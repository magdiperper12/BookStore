'use client';

export default function SettingsPage() {
	return (
		<div className='flex min-h-screen'>
			<div className='flex-1 p-8'>
				<h2 className='text-2xl font-semibold mb-6'>Settings</h2>
				<div className='bg-white shadow-md rounded-lg p-6 space-y-4'>
					<div>
						<label className='block text-sm font-medium'>
							Change Admin Email
						</label>
						<input
							type='email'
							placeholder='admin@example.com'
							className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium'>Change Password</label>
						<input
							type='password'
							placeholder='********'
							className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
						Save Settings
					</button>
				</div>
			</div>
		</div>
	);
}
