import Image from 'next/image';
import React from 'react';

export default function ProfilePage() {
	return (
		<div className='min-h-screen bg-gray-100 p-6'>
			{/* Header */}
			<h1 className='text-2xl font-bold mb-4'>مرحباً بك في ملفك الشخصي</h1>

			{/* Personal Info */}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				{/* Personal Data */}
				<div className='lg:col-span-2 bg-white rounded-2xl shadow p-6'>
					<h2 className='text-lg font-semibold mb-4'>البيانات الشخصية</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label className='text-gray-600'>الاسم الكامل</label>
							<input
								type='text'
								value='أحمد محمد عبدالله'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
						<div>
							<label className='text-gray-600'>السنة الدراسية</label>
							<input
								type='text'
								value='السنة الثالثة'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>

						<div>
							<label className='text-gray-600'>رقم الجوال</label>
							<input
								type='text'
								value='••••••••'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
						<div className='md:col-span-2'>
							<label className='text-gray-600'>رقم القومي</label>
							<input
								type='text'
								value='••••••••'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
