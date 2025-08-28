'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/src/lib/axios';

export default function SubjectsPage() {
	const router = useRouter();

	const [title, setTitle] = useState('');
	const [teacher, setTeacher] = useState('');
	const [faculty, setFaculty] = useState('');
	const [videoLink, setVideoLink] = useState('');
	const [file, setFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<{
		text: string;
		type: 'success' | 'error';
	} | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setFile(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setMessage(null);

		try {
			let data;
			let headers: any = {};

			if (file) {
				data = new FormData();
				data.append('title', title);
				data.append('file', file);
				data.append('academicProgram', faculty);
				data.append('type', 'file');
				headers['Content-Type'] = 'multipart/form-data';
			} else {
				data = {
					title,
					file: '',
					academicProgram: faculty,
					type: 'video_link',
					videoLink,
				};
				headers['Content-Type'] = 'application/json';
			}

			await axiosInstance.post('/api/v1/materials', data, { headers });

			setMessage({ text: 'Material uploaded successfully!', type: 'success' });
			setTitle('');
			setTeacher('');
			setFaculty('');
			setVideoLink('');
			setFile(null);
		} catch (err: any) {
			console.error(err);
			if (err.response?.status === 401) {
				localStorage.removeItem('section_token');
				router.push('/lecture');
			}
			setMessage({
				text:
					err.response?.data?.message || err.message || 'Something went wrong',
				type: 'error',
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='flex min-h-screen'>
			<div className='flex-1 p-8'>
				<h2 className='text-2xl font-semibold mb-6'>Add New Subject</h2>

				<div className='bg-white shadow-md rounded-lg p-6'>
					<h3 className='text-lg font-semibold mb-6'>Subject Details</h3>
					<form
						className='grid grid-cols-1 md:grid-cols-2 gap-6'
						onSubmit={handleSubmit}>
						{/* Subject Name */}
						<div>
							<label className='block text-sm font-medium'>Subject Name</label>
							<input
								type='text'
								placeholder='Enter subject name'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
								disabled={loading}
							/>
						</div>

						{/* Teacher */}
						<div>
							<label className='block text-sm font-medium'>Teacher Name</label>
							<select
								value={teacher}
								onChange={(e) => setTeacher(e.target.value)}
								className='mt-1 w-full border rounded-lg px-3 py-2'
								disabled={loading}>
								<option value=''>Select teacher</option>
								<option>Dr. John Smith</option>
								<option>Dr. Sarah Ahmed</option>
								<option>Prof. Ali Hassan</option>
							</select>
						</div>

						{/* Faculty */}
						<div>
							<label className='block text-sm font-medium'>Faculty Name</label>
							<select
								value={faculty}
								onChange={(e) => setFaculty(e.target.value)}
								className='mt-1 w-full border rounded-lg px-3 py-2'
								disabled={loading}>
								<option value=''>Select faculty</option>
								<option value='68a87b648a5b9b2a634409c5'>Engineering</option>
								<option value='...'>Medicine</option>
								<option value='...'>Law</option>
								<option value='...'>Business</option>
							</select>
						</div>

						{/* Video Link */}
						<div>
							<label className='block text-sm font-medium'>Video Link</label>
							<input
								type='url'
								placeholder='Enter video URL'
								value={videoLink}
								onChange={(e) => setVideoLink(e.target.value)}
								className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500'
								disabled={loading || !!file}
							/>
						</div>

						{/* File Upload */}
						<div className='col-span-1 md:col-span-2'>
							<label className='block text-sm font-medium mb-2'>
								Course Materials
							</label>
							<input
								type='file'
								onChange={handleFileChange}
								className='w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500'
								disabled={loading || !!videoLink}
							/>
						</div>

						{/* Message */}
						{message && (
							<div
								className={`col-span-1 md:col-span-2 text-center text-sm ${
									message.type === 'success' ? 'text-green-600' : 'text-red-600'
								}`}>
								{message.text}
							</div>
						)}

						{/* Buttons */}
						<div className='col-span-1 md:col-span-2 flex justify-end gap-4 mt-6'>
							<button
								type='button'
								onClick={() => {
									setTitle('');
									setTeacher('');
									setFaculty('');
									setVideoLink('');
									setFile(null);
									setMessage(null);
								}}
								className='px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100'
								disabled={loading}>
								Cancel
							</button>
							<button
								type='submit'
								className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
								disabled={loading}>
								{loading ? 'Uploading...' : 'Save Subject'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
