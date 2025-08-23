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
					<button
						onClick={() => setActiveTab('admin')}
						className={`px-4 py-2 font-medium ${
							activeTab === 'admin'
								? 'border-b-2 border-blue-600 text-blue-600'
								: 'text-gray-600 hover:text-blue-600'
						}`}>
						Admin
					</button>
				</div>

				{/* Tab Content */}
				{activeTab === 'student' && (
					<div className='bg-white shadow-md rounded-lg p-6 w-full'>
						<h3 className='text-lg font-semibold mb-4'>
							Create Student Account
						</h3>
						<form className='space-y-4'>
							<div>
								<label className='block text-sm font-medium'>
									Email Address
								</label>
								<input
									type='email'
									placeholder='student@example.com'
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
									College Year
								</label>
								<select className='mt-1 w-full border rounded-lg px-3 py-2'>
									<option>Select Year</option>
									<option>1st Year</option>
									<option>2nd Year</option>
									<option>3rd Year</option>
									<option>4th Year</option>
								</select>
							</div>
							<div>
								<label className='block text-sm font-medium'>
									Faculty Name
								</label>
								<select className='mt-1 w-full border rounded-lg px-3 py-2'>
									<option>Select Faculty</option>
									<option>Engineering</option>
									<option>Medicine</option>
									<option>Law</option>
									<option>Business</option>
								</select>
							</div>
							<button
								type='submit'
								className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
								Create Student Account
							</button>
						</form>
					</div>
				)}

				{activeTab === 'doctor' && (
					<div className='bg-white shadow-md rounded-lg p-6 w-full'>
						<h3 className='text-lg font-semibold mb-4'>
							Create Doctor Account
						</h3>
						<form className='space-y-4'>
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

				{activeTab === 'admin' && (
					<div className='bg-white shadow-md rounded-lg p-6 w-full'>
						<h3 className='text-lg font-semibold mb-4'>Create Admin Account</h3>
						<form className='space-y-4'>
							<div>
								<label className='block text-sm font-medium'>
									Email Address
								</label>
								<input
									type='email'
									placeholder='admin@example.com'
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
							<button
								type='submit'
								className='w-full  bg-green-600 text-white py-2 rounded-lg hover:bg-green-700  transition'>
								Create Admin Account
							</button>
						</form>
					</div>
				)}
			</div>
		</div>
	);
}
