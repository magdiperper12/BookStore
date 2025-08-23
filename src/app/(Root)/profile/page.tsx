import Image from 'next/image';
import React from 'react';

export default function ProfilePage() {
	return (
		<div className='min-h-screen bg-gray-100 p-6'>
			{/* Header */}
			<h1 className='text-2xl font-bold mb-4'>مرحباً بك في ملفك الشخصي</h1>
			<p className='text-gray-600 mb-6'>
				يمكنك عرض وتحديث بياناتك الشخصية من هنا
			</p>

			{/* Personal Info */}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				{/* Personal Data */}
				<div className='lg:col-span-2 bg-white rounded-2xl shadow p-6'>
					<h2 className='text-lg font-semibold mb-4'>البيانات الشخصية</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label className='text-gray-600'>الاسم الكامل</label>
							<input
								type='text'
								value='أحمد محمد عبدالله'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
						<div>
							<label className='text-gray-600'>السنة الدراسية</label>
							<input
								type='text'
								value='السنة الثالثة'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
						<div>
							<label className='text-gray-600'>القسم</label>
							<input
								type='text'
								value='علوم الحاسب'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
						<div>
							<label className='text-gray-600'>رقم الجوال</label>
							<input
								type='text'
								value='••••••••'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
						<div className='md:col-span-2'>
							<label className='text-gray-600'>رقم الهوية الوطنية</label>
							<input
								type='text'
								value='••••••••'
								readOnly
								className='w-full mt-1 p-2 border rounded-lg bg-gray-50'
							/>
						</div>
					</div>
				</div>

				{/* Profile Image */}
				<div className='bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center'>
					<h2 className='text-lg font-semibold mb-4'>الصورة الشخصية</h2>
					<div className='w-28 h-28 border rounded-full overflow-hidden flex items-center justify-center bg-gray-200'>
						<Image
							alt='profile'
							width={50}
							height={50}
							src={'/image/magdi.png'}
							className='w-32 h-32 object-contain'
						/>
					</div>
					<p className='text-sm text-gray-500 mt-2'>الصورة اختيارية</p>
				</div>
			</div>

			{/* Incomplete Exams */}
			<div className='bg-white rounded-2xl shadow p-6 mt-6'>
				<h2 className='text-lg font-semibold mb-4'>الاختبارات غير المكتملة</h2>
				<table className='w-full text-right border-collapse'>
					<thead>
						<tr className='bg-gray-50 text-gray-700'>
							<th className='p-3 border'>الإجراء المطلوب</th>
							<th className='p-3 border'>الحالة</th>
							<th className='p-3 border'>تاريخ الاختبار</th>
							<th className='p-3 border'>اسم الاختبار</th>
						</tr>
					</thead>
					<tbody>
						<tr className='text-gray-700'>
							<td className='p-3 border'>
								<button className='px-3 py-1 bg-blue-500 text-white rounded-lg'>
									بدء الاختبار
								</button>
							</td>
							<td className='p-3 border'>
								<span className='text-orange-500'>تم التوقف</span>
							</td>
							<td className='p-3 border'>25/3/2024</td>
							<td className='p-3 border'>اختبار منتصف الفصل - برمجة متقدمة</td>
						</tr>
						<tr className='text-gray-700'>
							<td className='p-3 border'>
								<button className='px-3 py-1 bg-green-500 text-white rounded-lg'>
									استكمال
								</button>
							</td>
							<td className='p-3 border'>
								<span className='text-yellow-500'>معلق</span>
							</td>
							<td className='p-3 border'>27/3/2024</td>
							<td className='p-3 border'>اختبار نهائي - قواعد البيانات</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
