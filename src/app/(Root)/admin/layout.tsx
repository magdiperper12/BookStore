'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			router.push('/login');
		}
	}, []);

	return (
		<div className='md:flex-row flex-col  flex  min-h-screen bg-green-50 dark:bg-[#000000] md:-mt-10 xl:-mt-9'>
			<AdminSidebar />
			<main className='flex-1 py-5 '>{children}</main>
		</div>
	);
}
