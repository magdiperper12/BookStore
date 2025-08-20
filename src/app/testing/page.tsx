'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Exam = {
	id: number;
	subject: string;
	doctor: string;
	duration: string;
	questions: number;
	grade: number;
	status: 'متاح' | 'مكتمل';
};

type Result = {
	id: string;
	subject: string;
	grade: string;
	date: string;
};

export default function TestingPage() {
	const [exams] = useState<Exam[]>([
		{
			id: 1,
			subject: 'محاسبة',
			doctor: 'د. أحمد محمد',
			duration: '60 دقيقة',
			questions: 30,
			grade: 100,
			status: 'متاح',
		},
		{
			id: 2,
			subject: 'رياضة مالية',
			doctor: 'د. سارة خالد',
			duration: '45 دقيقة',
			questions: 25,
			grade: 75,
			status: 'مكتمل',
		},
		{
			id: 3,
			subject: 'قانون جنائي',
			doctor: 'د. محمود علي',
			duration: '90 دقيقة',
			questions: 40,
			grade: 120,
			status: 'متاح',
		},
	]);

	const [results] = useState<Result[]>([
		{
			id: '001',
			subject: 'مقدمة في البرمجة',
			grade: '45/50',
			date: '2024/01/15',
		},
		{
			id: '002',
			subject: 'قواعد البيانات',
			grade: '38/40',
			date: '2024/01/10',
		},
		{
			id: '003',
			subject: 'هندسة البرمجيات',
			grade: '28/30',
			date: '2024/01/25',
		},
	]);

	const router = useRouter();

	return (
		<div className='p-6 space-y-8'>
			{/* Available Exams */}
			<div>
				<h2 className='text-xl font-bold mb-4'>الاختبارات المتاحة</h2>
				<div className='overflow-x-auto rounded-xl shadow'>
					<table className='w-full text-right border-collapse'>
						<thead className='bg-gray-100 text-gray-700'>
							<tr>
								<th className='p-3'>اسم الدكتور</th>
								<th className='p-3'>اسم المادة</th>
								<th className='p-3'>وقت الاختبار</th>
								<th className='p-3'>عدد الأسئلة</th>
								<th className='p-3'>الدرجة</th>
								<th className='p-3'>الحالة</th>
							</tr>
						</thead>
						<tbody>
							{exams.map((exam) => (
								<tr
									key={exam.id}
									className='border-b hover:bg-gray-50'>
									<td className='p-3'>{exam.doctor}</td>
									<td className='p-3'>{exam.subject}</td>
									<td className='p-3'>{exam.duration}</td>
									<td className='p-3'>{exam.questions}</td>
									<td className='p-3'>{exam.grade}</td>
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
					</table>
				</div>
			</div>

			{/* Stats Section */}
			<div className='grid grid-cols-1 md:grid-cols-4 gap-4 text-center'>
				<div className='bg-white shadow rounded-xl p-6'>
					<p className='text-2xl font-bold text-blue-600'>92%</p>
					<p className='text-gray-600'>المعدل العام</p>
				</div>
				<div className='bg-white shadow rounded-xl p-6'>
					<p className='text-2xl font-bold text-blue-600'>150</p>
					<p className='text-gray-600'>أسئلة محلولة</p>
				</div>
				<div className='bg-white shadow rounded-xl p-6'>
					<p className='text-2xl font-bold text-blue-600'>24</p>
					<p className='text-gray-600'>ساعات الدراسة</p>
				</div>
				<div className='bg-white shadow rounded-xl p-6'>
					<p className='text-2xl font-bold text-blue-600'>5</p>
					<p className='text-gray-600'>اختبارات مكتملة</p>
				</div>
			</div>

			{/* Results */}
			<div>
				<h2 className='text-xl font-bold mb-4'>نتائج الاختبارات</h2>
				<div className='border-2 border-dashed rounded-xl p-6 text-center mb-6'>
					<p className='text-gray-500 mb-3'>قم بسحب وإفلات ملف النتائج هنا</p>
					<button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>
						اختر ملف
					</button>
				</div>
				<div className='overflow-x-auto rounded-xl shadow'>
					<table className='w-full text-right border-collapse'>
						<thead className='bg-gray-100 text-gray-700'>
							<tr>
								<th className='p-3'>رقم الاختبار</th>
								<th className='p-3'>المادة</th>
								<th className='p-3'>الدرجة</th>
								<th className='p-3'>التاريخ</th>
							</tr>
						</thead>
						<tbody>
							{results.map((result) => (
								<tr
									key={result.id}
									className='border-b hover:bg-gray-50'>
									<td className='p-3'>{result.id}</td>
									<td className='p-3'>{result.subject}</td>
									<td className='p-3'>{result.grade}</td>
									<td className='p-3'>{result.date}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
