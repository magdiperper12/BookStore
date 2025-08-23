// app/not-found/page.tsx أو app/404.tsx حسب تنظيمك
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const NotFoundPage: React.FC = () => {
	return (
		<main className='grid  place-items-center bg-transparent px-6  py-20  lg:px-8'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='text-center'>
				<motion.p
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}
					className='text-9xl font-semibold text-yellow-600'>
					404
				</motion.p>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className='mt-4 text-5xl font-semibold tracking-tight text-balance text-yellow-900 '>
					Page not found
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className='mt-6 text-2xl font-medium text-pretty text-yellow-600 '>
					Sorry, we couldn’t find the page you’re looking for.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.4 }}
					className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						href='/'
						className='rounded-md bg-yellow-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-yellow-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500'>
						Go back home
					</Link>
					<Link
						href='/contact'
						className='text-sm font-semibold text-yellow-900 hover:underline flex justify-center items-center gap-2'>
						Contact support{' '}
						<span aria-hidden='true'>
							<FaArrowAltCircleRight className='text-xs' />
						</span>
					</Link>
				</motion.div>
			</motion.div>
		</main>
	);
};

export default NotFoundPage;
