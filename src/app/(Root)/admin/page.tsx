'use client';

import ProtectedRoute from '@/src/components/ProtectedRoute';

export default function DashboardPage() {
	return (
		<ProtectedRoute allowedRoles={['admin']}>
			<div className='flex min-h-screen'>
				<div className='flex-1 p-8'>
					<h2 className='text-2xl font-semibold mb-6'>Dashboard</h2>
					<div className='bg-white shadow-md rounded-lg p-6'>
						<p className='text-gray-700'>Welcome to EduAdmin Dashboard!</p>
					</div>
				</div>
			</div>
		</ProtectedRoute>
	);
}
