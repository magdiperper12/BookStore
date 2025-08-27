'use client';
import React from 'react';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FaCalendarAlt, FaUserCircle } from 'react-icons/fa';
import { IoVideocamOutline } from 'react-icons/io5';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
interface dataType {
	title: string;
	doctorName: string;
	date: string;
	image: string;
}
type Exam = {
	status: 'متاح' | 'مكتمل';
};

const Lecture = ({ title, doctorName, date, image }: dataType) => {
	const [exams] = useState<Exam[]>([
		{
			status: 'متاح',
		},
		{
			status: 'مكتمل',
		},
		{
			status: 'متاح',
		},
	]);

	const router = useRouter();
	return (
		<div>
			<tbody>
				{exams.map((exam) => (
					<tr
						key={exam.id}
						className='border-b hover:bg-gray-50'>
						<td className='p-3'>
							<button
								onClick={() => {
									if (exam.status === 'متاح') {
										router.push('/exam');
									}
								}}
								className={`px-3 py-1 rounded-md text-white ${
									exam.status === 'متاح'
										? 'bg-blue-600 hover:bg-blue-700'
										: 'bg-gray-400 cursor-not-allowed'
								}`}>
								{exam.status === 'متاح' ? 'بدء الاختبار' : 'مكتمل'}
							</button>
						</td>
					</tr>
				))}
			</tbody>
			ال pdf هيتعرض جوه الويبسايت
			<div className='bg-white text-textColor space-y-3 rounded-t-lg overflow-hidden gap-2 pb-6'>
				<div className='text-right px-4 text-xl text-darkprimary'>{title}</div>
				<div className='px-4'>
					<div className='flex justify-start items-center gap-2'>
						<FaCalendarAlt />
						{date}
					</div>
				</div>
				<div className='flex justify-center items-center gap-2 w-10/12 m-auto '>
					<button className='bg-[#FEF2F2]  text-red-500 w-1/2 flex justify-center items-center gap-2 rounded-md p-1'>
						<BsFileEarmarkPdfFill /> pdf
					</button>
				</div>
			</div>
			///////////////////////////////////////////////////////////////////
			<div className='bg-white text-textColor space-y-3 rounded-t-lg overflow-hidden gap-2 pb-6'>
				<iframe>url</iframe>//عرض فيديو thubnail صورة الفيديو
				<div className='text-right px-4 text-xl text-darkprimary'>{title}</div>
				<div className='px-4'>
					<div className='flex justify-start items-center gap-2'>
						<FaCalendarAlt />
						{date}
					</div>
				</div>
				<div className='flex justify-center items-center gap-2 w-10/12 m-auto '>
					<button className='bg-[#EFF6FF] text-blue-600 w-1/2 flex justify-center items-center gap-2 rounded-md p-1'>
						<IoVideocamOutline /> video
					</button>
				</div>
			</div>
		</div>
	);
};

export default Lecture;
