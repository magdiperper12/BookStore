'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/src/lib/axios';

const SignInPage: React.FC = () => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError(null);
		setLoading(true);

		try {
			type LoginResponse = {
				data: {
					accessToken: { token: string };
					refreshToken: string;
					user: { role: string; name: string };
				};
			};

			const res = await axiosInstance.post<LoginResponse>(
				'/api/v1/auth/login',
				{
					provider: phone,
					password: password,
				}
			);

			// Save both tokens
			const response = res.data.data;
			const token = '${response.accessToken.token}';
			localStorage.setItem('section_token', token);
			localStorage.setItem('refresh_token', response.refreshToken);
			localStorage.setItem('user_role', response.user.role);
			localStorage.setItem('user_name', response.user.name);

			// Redirect based on role
			const role = res.data.data.user.role;
			switch (role) {
				case 'admin':
					router.push('/admin');
					break;
				case 'teacher':
					router.push('/teacher');
					break;
				case 'student':
					router.push('/student');
					break;
				default:
					setError('Unknown user role');
					setLoading(false);
			}
		} catch (err: any) {
			console.error(err);
			setError(
				err.response?.data?.message ||
					(err.response?.status === 401
						? 'Invalid credentials'
						: 'Something went wrong')
			);
			setLoading(false);
		}
	};

	return (
		<div className='flex flex-col lg:flex-row xl:pt-24 xl:-mt-10 bg-white dark:bg-gray-800 w-full pb-20'>
			{/* الصورة */}
			<div className='flex w-full md:w-1/2 flex-col gap-10 items-center justify-center'>
				<div className='flex justify-center items-center h-[300px] w-[300px] rounded-full bg-gradient-to-t from-yellow-800 to-yellow-400 p-[1px]'>
					<div className='flex justify-center overflow-hidden items-center h-full w-full rounded-full bg-white dark:bg-darkprimary'>
						<Image
							src='/image/magdi.png'
							alt='Poultry Farm'
							width={245}
							height={245}
							className='object-cover'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='text-3xl font-bold text-center text-yellow-500 nosifer-regular'>
						SIGN IN TO SECTION
					</h1>
					<p className='text-center text-2xl text-gray-800 dark:text-gray-400 nosifer-regular'>
						WELCOME
					</p>
				</div>
			</div>

			{/* الفورم */}
			<div className='flex w-full md:w-1/2 items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8'>
				<div className='w-full max-w-md space-y-8'>
					<h2 className='text-3xl font-bold text-center'>
						Sign In to Your Account
					</h2>

					<form
						className='space-y-6'
						onSubmit={handleSubmit}>
						<div className='flex items-center gap-2 border-b border-gray-300 py-1'>
							<MdPhone className='text-xl text-gray-600' />
							<input
								type='tel'
								required
								placeholder='0101945178'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className='bg-white outline-none w-full'
								disabled={loading}
							/>
						</div>

						<div className='flex items-center gap-2 border-b border-gray-300 py-1'>
							<RiLockPasswordFill className='text-xl text-gray-600' />
							<input
								type='password'
								required
								placeholder='********'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='bg-white outline-none w-full'
								disabled={loading}
							/>
						</div>

						{error && <p className='text-red-500 text-sm'>{error}</p>}

						<button
							type='submit'
							disabled={loading}
							className='w-full py-2 bg-yellow-400 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition duration-300 text-lg'>
							{loading ? 'Signing in...' : 'Sign In'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
