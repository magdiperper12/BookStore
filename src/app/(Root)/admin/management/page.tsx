'use client';

import { useState } from 'react';

export default function UserManagementPage() {
	const [activeTab, setActiveTab] = useState<'student' | 'doctor' | 'admin'>(
		'student'
	);

	return (
		<div className='flex min-h-screen'>
			{/* Main Content */}
			<div className='flex-1 p-8'>
				<h2 className='text-2xl font-semibold mb-6'>User Management</h2>

				{/* Tabs */}
				<div className='flex gap-4 border-b mb-6'>
					<button
						onClick={() => setActiveTab('student')}
						className={`px-4 py-2 font-medium ${
							activeTab === 'student'
								? 'border-b-2 border-blue-600 text-blue-600'
								: 'text-gray-600 hover:text-blue-600'
						}`}>
						Student
					</button>
					<button
						onClick={() => setActiveTab('doctor')}
						className={`px-4 py-2 font-medium ${
							activeTab === 'doctor'
								? 'border-b-2 border-blue-600 text-blue-600'
								: 'text-gray-600 hover:text-blue-600'
						}`}>
						Doctor
					</button>
				</div>

				{/* Tab Content */}
				{activeTab === 'student' && (
					<div className='bg-white shadow-md rounded-lg p-6 w-full'>
						<h3 className='text-lg font-semibold mb-4'>
							Create Student Account
						</h3>
						<div>
							<select>
								<option>علوم</option>
								<option>حاسبات</option>
								<option>طاسه</option>
								<option>محشره</option>
							</select>
						</div>
						<input
							type='number'
							placeholder='لايقبل عدد طلاب اكثر من 500'
						/>
					</div>
				)}

				{activeTab === 'doctor' && (
					<div className='bg-white shadow-md rounded-lg p-6 w-full'>
						<h3 className='text-lg font-semibold mb-4'>
							Create Doctor Account
						</h3>
						<form className='space-y-4'>
							<div>
								<label className='block text-sm font-medium'>Name</label>
								<input
									type='text'
									placeholder='magdi saleh fathi'
									className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium'>
									Email Address
								</label>
								<input
									type='email'
									placeholder='doctor@example.com'
									className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium'>Password</label>
								<input
									type='password'
									className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium'>
									Specialization
								</label>
								<input
									type='text'
									placeholder='e.g. Computer Science'
									className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
								/>
							</div>
							<button
								type='submit'
								className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700  transition'>
								Create Doctor Account
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
}
