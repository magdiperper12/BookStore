import Lecture from '@/src/components/student/Lecturebox';
import React from 'react';

const LecturePage = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10'>
			<Lecture
				title='المحاضره الاولي'
				doctorName='مجدي صالح فتحي'
				date='١٥ يناير ٢٠٢٤'
				image='/image/pdfImage.png'
			/>
			<Lecture
				title='المحاضره الثانيه'
				doctorName='مجدي صالح فتحي'
				date='١٥ يناير ٢٠٢٤'
				image='/image/pdfimage2.png'
			/>
			<Lecture
				title='المحاضره الثالثه'
				doctorName='مجدي صالح فتحي'
				date='١٥ يناير ٢٠٢٤'
				image='/image/pdfImage.png'
			/>
			<Lecture
				title='المحاضره الرابعه'
				doctorName='مجدي صالح فتحي'
				date='١٥ يناير ٢٠٢٤'
				image='/image/pdfimage2.png'
			/>
			<Lecture
				title='المحاضره الخامسه'
				doctorName='مجدي صالح فتحي'
				date='١٥ يناير ٢٠٢٤'
				image='/image/pdfimage2.png'
			/>
			<Lecture
				title='المحاضره السادسه'
				doctorName='مجدي صالح فتحي'
				date='١٥ يناير ٢٠٢٤'
				image='/image/pdfImage.png'
			/>
		</div>
	);
};

export default LecturePage;
