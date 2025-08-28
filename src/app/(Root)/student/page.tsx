import Lecture from '@/src/components/student/Lecturebox';
import React from 'react';

const LecturePage = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10'>
			<Lecture />
		</div>
	);
};

export default LecturePage;
