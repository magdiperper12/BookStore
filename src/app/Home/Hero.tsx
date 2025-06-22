'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
const Hero = () => {
	const { t } = useTranslation();
	const items = [
		{
			title: t('innovation'),
			desc: t('innovationDesc'),
			icon: '💡',
		},
		{
			title: t('integrity'),
			desc: t('integrityDesc'),
			icon: '🤝',
		},
		{
			title: t('excellence'),
			desc: t('excellenceDesc'),
			icon: '🏆',
		},
	];
	return (
		<div className='  space-y-20 -mt-32     text-darkprimary dark:text-white px-6 '>
			<div>
				<section className=' mx-auto text-center'>
					<motion.h1
						className='text-4xl md:text-6xl font-extrabold mb-6'
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						{t('welcome')}
						<span className='text-darkthird'>{t('cuda')}</span>
					</motion.h1>

					<motion.p
						className='text-lg md:text-xl text-darksecoundry dark:text-gray-300 mb-8 max-w-2xl mx-auto'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}>
						{t('heroText')}
					</motion.p>

					<motion.div
						className='flex justify-center gap-4'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4 }}>
						<Link
							href='/Contact'
							className='bg-third text-white px-6 py-3 rounded-md font-semibold hover:bg-darkthird transition'>
							{t('contact')}
						</Link>
						<Link
							href='/About'
							className='border-darkthird dark:border-third border-2 dark:text-white hover:text-white px-6 py-3 rounded-md font-semibold hover:bg-darkthird dark:hover:bg-darkthird transition'>
							{t('learnMore')}
						</Link>
					</motion.div>
				</section>

				{/* Features Section */}
				<section className='mt-14 max-w-6xl mx-auto'>
					<motion.h2
						className='text-3xl font-bold text-center mb-10 '
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}>
						{t('whyChoose')}
						<span className='text-darkthird '>{t('cuda')}</span>
						<span className=''>?</span>
					</motion.h2>

					<div className='grid gap-10 md:grid-cols-3 text-center'>
						{items.map((feature, i) => (
							<motion.div
								key={i}
								className='rounded-xl p-6 border border-darkthird bg-white dark:bg-black shadow-sm hover:shadow-md transition'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 * i }}>
								<div className='text-4xl mb-3'>{feature.icon}</div>
								<h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
								<p className='text-darksecoundry dark:text-gray-300'>
									{feature.desc}
								</p>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Hero;
