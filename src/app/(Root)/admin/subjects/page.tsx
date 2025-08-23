'use client';
export default function SubjectsPage() {
	return (
		<div className='flex min-h-screen'>
			{/* Main Content */}
			<div className='flex-1 p-8'>
				<h2 className='text-2xl font-semibold mb-6'>Add New Subject</h2>

				<div className='bg-white shadow-md rounded-lg p-6'>
					<h3 className='text-lg font-semibold mb-6'>Subject Details</h3>
					<form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{/* Subject Name */}
						<div>
							<label className='block text-sm font-medium'>Subject Name</label>
							<input
								type='text'
								placeholder='Enter subject name'
								className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Teacher Name */}
						<div>
							<label className='block text-sm font-medium'>Teacher Name</label>
							<select className='mt-1 w-full border rounded-lg px-3 py-2'>
								<option>Select teacher</option>
								<option>Dr. John Smith</option>
								<option>Dr. Sarah Ahmed</option>
								<option>Prof. Ali Hassan</option>
							</select>
						</div>

						{/* Faculty Name */}
						<div>
							<label className='block text-sm font-medium'>Faculty Name</label>
							<select className='mt-1 w-full border rounded-lg px-3 py-2'>
								<option>Select faculty</option>
								<option>Engineering</option>
								<option>Medicine</option>
								<option>Law</option>
								<option>Business</option>
							</select>
						</div>

						{/* Video Link */}
						<div>
							<label className='block text-sm font-medium'>Video Link</label>
							<input
								type='url'
								placeholder='Enter video URL'
								className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Course Materials Upload */}
						<div className='col-span-1 md:col-span-2'>
							<label className='block text-sm font-medium mb-2'>
								Course Materials
							</label>
							<div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500'>
								<p className='text-gray-500'>
									Drag and drop files here or click to browse
								</p>
								<p className='text-xs text-gray-400 mt-2'>
									Supported formats: PDF, DOC, DOCX, PPT, PPTX | Max: 50MB
								</p>
							</div>
						</div>

						{/* Buttons */}
						<div className='col-span-1 md:col-span-2 flex justify-end gap-4 mt-6'>
							<button
								type='button'
								className='px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100'>
								Cancel
							</button>
							<button
								type='submit'
								className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
								Save Subject
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
