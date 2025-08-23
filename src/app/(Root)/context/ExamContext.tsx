'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type ExamContextType = {
	correctCount: number;
	wrongCount: number;
	score: number;
	setResult: (correct: number, wrong: number, score: number) => void;
};

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export function ExamProvider({ children }: { children: ReactNode }) {
	const [correctCount, setCorrectCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);
	const [score, setScore] = useState(0);

	const setResult = (correct: number, wrong: number, newScore: number) => {
		setCorrectCount(correct);
		setWrongCount(wrong);
		setScore(newScore);
	};

	return (
		<ExamContext.Provider
			value={{ correctCount, wrongCount, score, setResult }}>
			{children}
		</ExamContext.Provider>
	);
}

export function useExam() {
	const context = useContext(ExamContext);
	if (!context) throw new Error('useExam must be used within ExamProvider');
	return context;
}
