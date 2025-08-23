// file: services/api.ts
export async function login(phone: string, password: string) {
	const res = await fetch(
		'https://united-feed-api-dev.aiotgroups.com/api/auth/login',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ phone, password }),
		}
	);

	if (!res.ok) throw new Error('Login failed');

	return res.json();
}
