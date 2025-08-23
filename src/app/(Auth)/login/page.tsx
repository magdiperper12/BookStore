'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const SignInPage: React.FC = () => {
	const router = useRouter();
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		try {
			const cleanedPhone = phone.replace(/\D/g, '');
			const normalizedPhone = cleanedPhone.startsWith('20')
				? '+' + cleanedPhone
				: '+20' + cleanedPhone.replace(/^0+/, '');

			console.log('Normalized Phone:', normalizedPhone); // تأكد أنه +201012345678 مثلاً
			console.log('Password:', password);

			const response = await fetch(
				'https://united-feed-api-dev.aiotgroups.com/api/auth/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ phone: normalizedPhone, password }),
				}
			);

			const data = await response.json();

			console.log('Status:', response.status);
			console.log('Data:', data);

			if (!response.ok) {
				setError(data.message || 'Invalid credentials');
				return;
			}
			console.log('Login successful:', data);
			localStorage.setItem('token', `Bearer ${data.data.token}`);
			router.push('/admin/products/out');
		} catch (err) {
			console.error('Error:', err);
			setError('Login failed. Please try again.');
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
						SIGN IN TO SECTION{' '}
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
						<div>
							<MdPhone className='text-xl text-gray-600' />
							<input
								type='tel'
								required
								placeholder='0101945178'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className='bg-white outline-none w-full'
							/>
						</div>
						<div>
							<RiLockPasswordFill className='text-xl text-gray-600' />
							<input
								type='password'
								required
								placeholder='********'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='bg-white outline-none w-full'
							/>
						</div>

						{error && <p className='text-red-500 text-sm'>{error}</p>}

						<button
							type='submit'
							className='w-full py-2 bg-yellow-400 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition duration-300 text-lg'>
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
