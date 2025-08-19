import Image from 'next/image';
import React from 'react';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FaCalendarAlt, FaUserCircle } from 'react-icons/fa';
import { IoVideocamOutline } from 'react-icons/io5';

interface dataType {
	title: string;
	doctorName: string;
	date: string;
	image: string;
}
const Lecture = ({ title, doctorName, date, image }: dataType) => {
	return (
		<div className='bg-white text-textColor space-y-3 rounded-t-lg overflow-hidden gap-2 pb-6'>
			<Image
				width={100}
				height={70}
				alt='image'
				src={image}
				className='object-cover w-full h-48'
			/>
			<div className='text-right px-4 text-xl text-darkprimary'>{title}</div>
			<div className='px-4'>
				<div className='flex justify-start items-center gap-2'>
					<FaUserCircle /> د. {doctorName}
				</div>
				<div className='flex justify-start items-center gap-2'>
					<FaCalendarAlt />
					{date}
				</div>
			</div>
			<div className='flex justify-center items-center gap-2 w-10/12 m-auto '>
				<button className='bg-[#FEF2F2]  text-red-500 w-1/2 flex justify-center items-center gap-2 rounded-md p-1'>
					<BsFileEarmarkPdfFill /> pdf
				</button>
				<button className='bg-[#EFF6FF] text-blue-600 w-1/2 flex justify-center items-center gap-2 rounded-md p-1'>
					<IoVideocamOutline /> video
				</button>
			</div>
		</div>
	);
};

export default Lecture;
