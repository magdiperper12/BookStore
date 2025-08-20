'use client';
import { useExam } from '../context/ExamContext';
import { useRouter } from 'next/navigation';

export default function ResultPage() {
	const { correctCount, wrongCount, score } = useExam();
	const router = useRouter();

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white'>
			<div className='shadow-xl rounded-2xl p-10 w-full max-w-md text-center bg-white'>
				<h1 className='text-2xl font-extrabold text-gray-800 mb-6'>
					🎉 نتيجة الاختبار
				</h1>
				<p className='text-lg text-gray-700 mb-4'>
					✅ صحيحة:{' '}
					<span className='font-bold text-green-600'>{correctCount}</span>
				</p>
				<p className='text-lg text-gray-700 mb-4'>
					❌ خاطئة: <span className='font-bold text-red-600'>{wrongCount}</span>
				</p>
				<p className='text-xl font-semibold text-blue-700 mb-6'>
					📊 الدرجة: {score}/100
				</p>

				<div className='flex flex-col gap-3'>
					<button
						onClick={() => router.push('/exam')}
						className='w-full py-3 px-5 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-md'>
						🔄 إعادة الاختبار
					</button>
					<button
						onClick={() => router.push('/')}
						className='w-full py-3 px-5 rounded-xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300'>
						🏠 العودة للرئيسية
					</button>
				</div>
			</div>
		</div>
	);
}
