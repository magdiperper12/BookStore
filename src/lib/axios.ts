import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://section-library-back-dev.aiotgroups.com',
	headers: {
		'Content-Type': 'application/json',
	},
});

let isRefreshing = false;
let failedRequests: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
	failedRequests.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});
	failedRequests = [];
};

// Request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('section_token');
			if (token) {
				if (!config.headers) {
					config.headers = {};
				}
				config.headers['Authorization'] = `Bearer ${token}`;
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedRequests.push({ resolve, reject });
				})
					.then((token) => {
						originalRequest.headers['Authorization'] = `Bearer ${token}`;
						return axiosInstance(originalRequest);
					})
					.catch((err) => Promise.reject(err));
			}

			originalRequest._retry = true;
			isRefreshing = true;

			try {
				const refreshToken = localStorage.getItem('refresh_token');
				if (!refreshToken) {
					throw new Error('No refresh token available');
				}

				const response = await axios.post(
					'https://section-library-back-dev.aiotgroups.com/api/v1/auth/refresh',
					{ refreshToken }
				);

				const { accessToken, refreshToken: newRefreshToken } = (
					response.data as { data: { accessToken: any; refreshToken: any } }
				).data;

				localStorage.setItem('section_token', accessToken.token);
				localStorage.setItem('refresh_token', newRefreshToken);

				axiosInstance.defaults.headers.common[
					'Authorization'
				] = `Bearer ${accessToken.token}`;
				originalRequest.headers[
					'Authorization'
				] = `Bearer ${accessToken.token}`;

				processQueue(null, accessToken.token);
				isRefreshing = false;

				return axiosInstance(originalRequest);
			} catch (refreshError) {
				processQueue(refreshError, null);
				isRefreshing = false;

				if (typeof window !== 'undefined') {
					localStorage.removeItem('section_token');
					localStorage.removeItem('refresh_token');
					localStorage.removeItem('user_role');
					localStorage.removeItem('user_name');
					window.location.href = '/login';
				}

				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

export default axiosInstance;
