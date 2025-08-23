'use client';

import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const subjects = [
	{ id: 1, name: 'علم الأحياء', teacher: 'د. محمد علي', faculty: 'كلية الطب' },
	{
		id: 2,
		name: 'الفيزياء الحديثة',
		teacher: 'د. أحمد أحمد',
		faculty: 'كلية الهندسة',
	},
	{
		id: 3,
		name: 'الرياضيات المتقدمة',
		teacher: 'د. أحمد محمد',
		faculty: 'كلية العلوم',
	},
	{
		id: 4,
		name: 'الإحصاء التطبيقي',
		teacher: 'د. مالك عبدالله',
		faculty: 'كلية العلوم',
	},
	{
		id: 5,
		name: 'برمجة الحاسوب',
		teacher: 'د. عمر خالد',
		faculty: 'كلية الحاسبات',
	},
	{
		id: 6,
		name: 'الكيمياء العضوية',
		teacher: 'د. فاطمة حسن',
		faculty: 'كلية العلوم',
	},
	{
		id: 7,
		name: 'الهندسة المدنية',
		teacher: 'د. سامي إبراهيم',
		faculty: 'كلية الهندسة',
	},
	{
		id: 8,
		name: 'الجراحة العامة',
		teacher: 'د. عمرو حسين',
		faculty: 'كلية الطب',
	},
	{
		id: 9,
		name: 'نظم المعلومات',
		teacher: 'د. سارة محمود',
		faculty: 'كلية الحاسبات',
	},
	{
		id: 10,
		name: 'الكيمياء الفيزيائية',
		teacher: 'د. محمود جلال',
		faculty: 'كلية العلوم',
	},
	{
		id: 11,
		name: 'هندسة البرمجيات',
		teacher: 'د. نوران علي',
		faculty: 'كلية الحاسبات',
	},
	{
		id: 12,
		name: 'الأشعة الطبية',
		teacher: 'د. ياسر محسن',
		faculty: 'كلية الطب',
	},
	{
		id: 13,
		name: 'الرياضيات التطبيقية',
		teacher: 'د. منى فؤاد',
		faculty: 'كلية العلوم',
	},
	{
		id: 14,
		name: 'الهندسة الكهربائية',
		teacher: 'د. شريف محمد',
		faculty: 'كلية الهندسة',
	},
	{
		id: 15,
		name: 'علم المناعة',
		teacher: 'د. خالد عبدالسلام',
		faculty: 'كلية الطب',
	},
	{
		id: 16,
		name: 'تحليل البيانات',
		teacher: 'د. مريم يوسف',
		faculty: 'كلية الحاسبات',
	},
];

const faculties = [
	'جميع المواد',
	'كلية العلوم',
	'كلية الهندسة',
	'كلية الطب',
	'كلية الحاسبات',
];

export default function AllSubjectsPage() {
	const [search, setSearch] = useState('');
	const [selectedFaculty, setSelectedFaculty] = useState('جميع المواد');
	const [currentPage, setCurrentPage] = useState(1);

	const [itemsPerPage, setItemsPerPage] = useState(9);

	// تحديث itemsPerPage حسب حجم الشاشة
	useEffect(() => {
		const updateItems = () => {
			if (window.innerWidth >= 1280) {
				setItemsPerPage(9); // xl
			} else if (window.innerWidth >= 1024) {
				setItemsPerPage(12); // lg
			} else if (window.innerWidth >= 768) {
				setItemsPerPage(8); // md
			} else {
				setItemsPerPage(8); // sm و أصغر
			}
		};

		updateItems();
		window.addEventListener('resize', updateItems);
		return () => window.removeEventListener('resize', updateItems);
	}, []);

	// فلترة
	const filteredSubjects = subjects.filter((sub) => {
		const matchesSearch = sub.name.toLowerCase().includes(search.toLowerCase());
		const matchesFaculty =
			selectedFaculty === 'جميع المواد' || sub.faculty === selectedFaculty;
		return matchesSearch && matchesFaculty;
	});

	// Pagination
	const totalPages = Math.ceil(filteredSubjects.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedSubjects = filteredSubjects.slice(
		startIndex,
		startIndex + itemsPerPage
	);

	// حساب عرض النتائج (مثال: Showing 1 to 6 of 16 results)
	const showingFrom = filteredSubjects.length > 0 ? startIndex + 1 : 0;
	const showingTo = Math.min(
		startIndex + itemsPerPage,
		filteredSubjects.length
	);

	return (
		<div className='flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
			<div className='flex-1 p-8'>
				<h2 className='text-3xl font-bold mb-6 text-gray-800'>
					📚 جميع المواد الدراسية
				</h2>

				{/* Search + Filters */}
				<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8'>
					{/* Search */}
					<input
						type='text'
						placeholder='🔍 ابحث عن المواد...'
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
							setCurrentPage(1);
						}}
						className='border border-gray-300 rounded-2xl px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm bg-white'
					/>

					{/* Filter buttons */}
					<div className='flex gap-2 flex-wrap'>
						{faculties.map((faculty) => (
							<button
								key={faculty}
								onClick={() => {
									setSelectedFaculty(faculty);
									setCurrentPage(1);
								}}
								className={`px-4 py-2 rounded-xl transition font-medium shadow-sm ${
									selectedFaculty === faculty
										? 'bg-blue-600 text-white shadow-md'
										: 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
								}`}>
								{faculty}
							</button>
						))}
					</div>
				</div>

				{/* Subjects Grid */}
				{paginatedSubjects.length > 0 ? (
					<>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{paginatedSubjects.map((sub) => (
								<div
									key={sub.id}
									className='bg-white shadow-md rounded-2xl p-6 border hover:shadow-2xl hover:scale-[1.02] transition transform duration-200'>
									<h3 className='text-xl font-semibold mb-2 text-gray-800'>
										{sub.name}
									</h3>
									<p className='text-sm text-gray-600 mb-1'>👨‍🏫 {sub.teacher}</p>
									<p className='text-sm text-gray-500'>🏫 {sub.faculty}</p>

									<div className='flex justify-between items-center mt-5 gap-3'>
										<button className='flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm'>
											🎥 الفيديوهات
										</button>
										<button className='flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow-sm'>
											📝 الملاحظات
										</button>
									</div>
								</div>
							))}
						</div>

						{/* Pagination Controls */}
						<div className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 mt-24 rounded-xl shadow-sm'>
							<div className='flex flex-1 items-center justify-between'>
								<p className='text-sm text-gray-700'>
									<span className='font-medium'>{filteredSubjects.length}</span>{' '}
									مادة
								</p>
								<nav
									aria-label='Pagination'
									className='isolate inline-flex -space-x-px rounded-md shadow-sm'>
									{/* Previous */}
									<button
										onClick={() =>
											setCurrentPage((prev) => Math.max(prev - 1, 1))
										}
										disabled={currentPage === 1}
										className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 disabled:opacity-50'>
										<span className='sr-only'>السابق</span>
										<FiChevronLeft
											aria-hidden='true'
											className='h-5 w-5'
										/>
									</button>

									{/* Page numbers */}
									{Array.from({ length: totalPages }).map((_, i) => {
										const page = i + 1;
										return (
											<button
												key={page}
												onClick={() => setCurrentPage(page)}
												className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 ${
													currentPage === page
														? 'z-10 bg-indigo-600 text-white'
														: 'text-gray-900'
												}`}>
												{page}
											</button>
										);
									})}

									{/* Next */}
									<button
										onClick={() =>
											setCurrentPage((prev) => Math.min(prev + 1, totalPages))
										}
										disabled={currentPage === totalPages}
										className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 disabled:opacity-50'>
										<span className='sr-only'>التالي</span>
										<FiChevronRight
											aria-hidden='true'
											className='h-5 w-5'
										/>
									</button>
								</nav>
							</div>
						</div>
					</>
				) : (
					<p className='text-gray-500 mt-10 text-center text-lg'>
						لا توجد مواد مطابقة 🔎
					</p>
				)}
			</div>
		</div>
	);
}
