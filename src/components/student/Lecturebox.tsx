'use client';

import axiosInstance from '@/src/lib/axios';
import React, { useState, useEffect } from 'react';

interface Material {
	_id: string;
	title: string;
	file?: string;
	videoLink?: string;
	academicProgram: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface MaterialsResponse {
	document: Material[];
	video_link: Material[];
	video: Material[];
}

const LecturePage: React.FC = () => {
	const [materials, setMaterials] = useState<MaterialsResponse>({
		document: [],
		video_link: [],
		video: [],
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

	useEffect(() => {
		const fetchMaterials = async () => {
			try {
				setLoading(true);
				const response = await axiosInstance.get<MaterialsResponse>(
					'/api/v1/materials/me'
				);
				setMaterials(response.data);
				setError(null);
			} catch (err: any) {
				console.error('Error fetching materials:', err);
				setError(err.response?.data?.message || 'Failed to load materials');
			} finally {
				setLoading(false);
			}
		};

		fetchMaterials();
	}, []);

	// Function to extract YouTube video ID from URL
	const getYouTubeId = (url: string) => {
		const regExp =
			/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11 ? match[2] : null;
	};

	if (loading) {
		return (
			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
				<div className='bg-white p-6 rounded-lg shadow-md text-center'>
					<h2 className='text-xl font-bold text-red-600 mb-2'>Error</h2>
					<p className='text-gray-700'>{error}</p>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gray-50 p-6'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-3xl font-bold text-gray-800 mb-8'>
					Lecture Materials
				</h1>

				{/* PDF Documents Section */}
				{materials.document.length > 0 && (
					<section className='mb-12'>
						<h2 className='text-2xl font-semibold text-gray-700 mb-4 flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 mr-2 text-red-500'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								/>
							</svg>
							PDF Documents
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{materials.document.map((doc) => (
								<div
									key={doc._id}
									className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300'
									onClick={() => setSelectedPdf(doc.file || null)}>
									<div className='bg-red-100 h-40 flex items-center justify-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-16 w-16 text-red-500'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
											/>
										</svg>
									</div>
									<div className='p-4'>
										<h3 className='font-medium text-gray-800 truncate'>
											{doc.title}
										</h3>
										<p className='text-sm text-gray-500 mt-1'>
											Uploaded on {new Date(doc.createdAt).toLocaleDateString()}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Video Links Section */}
				{materials.video_link.length > 0 && (
					<section className='mb-12'>
						<h2 className='text-2xl font-semibold text-gray-700 mb-4 flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 mr-2 text-blue-500'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
								/>
							</svg>
							Video Lectures
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							{materials.video_link.map((video) => {
								const videoId = video.videoLink
									? getYouTubeId(video.videoLink)
									: null;
								const thumbnailUrl = videoId
									? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
									: null;

								return (
									<div
										key={video._id}
										className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
										<div className='relative'>
											{thumbnailUrl ? (
												<img
													src={thumbnailUrl}
													alt={video.title}
													className='w-full h-40 object-cover'
												/>
											) : (
												<div className='bg-gray-200 h-40 flex items-center justify-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-16 w-16 text-gray-400'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
														/>
													</svg>
												</div>
											)}
											<div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
												<a
													href={video.videoLink}
													target='_blank'
													rel='noopener noreferrer'
													className='bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-6 w-6'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
														/>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth={2}
															d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
												</a>
											</div>
										</div>
										<div className='p-4'>
											<h3 className='font-medium text-gray-800 truncate'>
												{video.title}
											</h3>
											<p className='text-sm text-gray-500 mt-1'>
												Uploaded on{' '}
												{new Date(video.createdAt).toLocaleDateString()}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</section>
				)}

				{/* PDF Modal */}
				{selectedPdf && (
					<div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'>
						<div className='bg-white rounded-lg w-full max-w-4xl h-5/6 flex flex-col'>
							<div className='flex justify-between items-center p-4 border-b'>
								<h3 className='text-lg font-medium'>PDF Viewer</h3>
								<button
									onClick={() => setSelectedPdf(null)}
									className='text-gray-500 hover:text-gray-700'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</button>
							</div>
							<div className='flex-1'>
								<iframe
									src={`https://section-library-back-dev.aiotgroups.com/api/v1/files/${selectedPdf}`}
									className='w-full h-full'
									frameBorder='0'
									title='PDF Document'></iframe>
							</div>
						</div>
					</div>
				)}

				{/* Empty State */}
				{materials.document.length === 0 &&
					materials.video_link.length === 0 &&
					materials.video.length === 0 && (
						<div className='bg-white rounded-lg shadow-md p-8 text-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-16 w-16 mx-auto text-gray-400 mb-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								/>
							</svg>
							<h2 className='text-xl font-semibold text-gray-700 mb-2'>
								No Materials Available
							</h2>
							<p className='text-gray-500'>
								There are no lecture materials available at this time.
							</p>
						</div>
					)}
			</div>
		</div>
	);
};

export default LecturePage;
