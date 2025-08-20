'use client';
import { useState } from 'react';
import { useExam } from '../context/ExamContext';
import { useRouter } from 'next/navigation';

export default function ExamPage() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
		Array(5).fill(null)
	);
	const { setResult } = useExam();
	const router = useRouter();

	const questions = [
		{
			question: 'What is the capital of France?',
			answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
			correct: 'Paris',
		},
		{
			question: 'Which planet is known as the Red Planet?',
			answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
			correct: 'Mars',
		},
		{
			question: 'Who wrote “Hamlet”?',
			answers: [
				'Charles Dickens',
				'William Shakespeare',
				'Homer',
				'Leo Tolstoy',
			],
			correct: 'William Shakespeare',
		},
		{
			question: 'What is the largest ocean on Earth?',
			answers: [
				'Atlantic Ocean',
				'Pacific Ocean',
				'Indian Ocean',
				'Arctic Ocean',
			],
			correct: 'Pacific Ocean',
		},
		{
			question: 'What is the chemical symbol for gold?',
			answers: ['Ag', 'Au', 'Gd', 'Go'],
			correct: 'Au',
		},
	];

	const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

	const handleAnswerChange = (answer: string) => {
		const updatedAnswers = [...selectedAnswers];
		updatedAnswers[currentQuestion] = answer;
		setSelectedAnswers(updatedAnswers);
	};

	const handleSubmit = () => {
		let correctCount = 0;
		questions.forEach((q, i) => {
			if (selectedAnswers[i] === q.correct) correctCount++;
		});
		const wrongCount = questions.length - correctCount;
		const score = Math.round((correctCount / questions.length) * 100);

		setResult(correctCount, wrongCount, score);
		router.push('/result');
	};

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='from-blue-50 to-white bg-gradient-to-br shadow-xl rounded-2xl p-10 w-full max-w-2xl'>
				{/* Header */}
				<div className='mb-8 text-center'>
					<h1 className='text-2xl font-extrabold text-gray-800 mb-3'>
						اختبار القسم الأول
					</h1>
					<div className='flex justify-between text-gray-600 text-sm font-medium'>
						<p>
							⏳ الوقت المتبقي: <span className='font-semibold'>30 دقيقة</span>
						</p>
						<p>
							📑 عدد الأسئلة:{' '}
							<span className='font-semibold'>{questions.length}</span>
						</p>
					</div>

					{/* Progress Bar */}
					<div className='mt-6'>
						<div className='inline-block mb-2 py-0.5 px-2 bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-600 rounded-lg'>
							{progress}% مكتمل
						</div>
						<div className='flex w-full h-2 bg-gray-200 rounded-full overflow-hidden'>
							<div
								className='flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white transition-all duration-500'
								style={{ width: `${progress}%` }}></div>
						</div>
					</div>
				</div>

				{/* Question */}
				<h2 className='text-lg font-semibold text-gray-700 mb-6 text-center'>
					{questions[currentQuestion].question}
				</h2>

				{/* Answers */}
				<form className='space-y-4'>
					{questions[currentQuestion].answers.map((answer, index) => (
						<label
							key={index}
							className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 shadow-sm ${
								selectedAnswers[currentQuestion] === answer
									? 'border-blue-600 bg-blue-50 text-blue-700'
									: 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'
							}`}>
							<span className='text-base font-medium'>{answer}</span>
							<input
								type='radio'
								name='answer'
								value={answer}
								checked={selectedAnswers[currentQuestion] === answer}
								onChange={(e) => handleAnswerChange(e.target.value)}
								className='form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500'
							/>
						</label>
					))}
				</form>

				{/* Navigation Buttons */}
				<div className='mt-8 flex justify-between gap-4'>
					<button
						onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
						disabled={currentQuestion === 0}
						className={`w-1/2 py-3 px-5 rounded-xl font-semibold transition-colors ${
							currentQuestion === 0
								? 'bg-gray-200 text-gray-400 cursor-not-allowed'
								: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
						}`}>
						⬅️ السؤال السابق
					</button>
					<button
						onClick={() =>
							setCurrentQuestion((prev) =>
								Math.min(prev + 1, questions.length - 1)
							)
						}
						disabled={currentQuestion === questions.length - 1}
						className={`w-1/2 py-3 px-5 rounded-xl font-semibold transition-colors ${
							currentQuestion === questions.length - 1
								? 'bg-gray-200 text-gray-400 cursor-not-allowed'
								: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
						}`}>
						السؤال القادم ➡️
					</button>
				</div>

				{/* Submit Button */}
				{currentQuestion === questions.length - 1 && (
					<button
						disabled={!selectedAnswers[currentQuestion]}
						onClick={handleSubmit}
						className={`mt-6 w-full py-3 px-5 rounded-xl font-semibold transition-colors text-white ${
							selectedAnswers[currentQuestion]
								? 'bg-green-600 hover:bg-green-700 shadow-md'
								: 'bg-gray-300 cursor-not-allowed'
						}`}>
						إرسال الإجابة
					</button>
				)}
			</div>
		</div>
	);
}
