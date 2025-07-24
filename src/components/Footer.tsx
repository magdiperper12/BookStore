'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	const [hideFooter, setHideFooter] = useState(false);

	useEffect(() => {
		const url = window.location.href.toString();
		setHideFooter(url.includes('Pricing'));
	}, []);

	if (hideFooter) return null;

	return (
		<motion.footer
			className='bg-darkforth py-16 dark:bg-darkprimary text-darksecoundry dark:text-third pt-12 pb-6 px-6 md:px-16'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}>
			<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10'>
				{/* Company Info */}
				<div>
					<h2 className='text-2xl font-bold mb-4 text-darkthird dark:text-third'>
						{t('footerTitle')}
					</h2>
					<p className='text-sm leading-6 text-darkprimary dark:text-darkforth'>
						<span className='text-darkthird dark:text-third'>TOKEN</span>{' '}
						{t('footerDesc')}
					</p>
				</div>

				{/* Quick Links */}
				<div className='grid grid-cols-2 '>
					<div>
						<h3 className='text-lg font-semibold mb-4 text-third dark:text-white'>
							{t('quickLinks')}
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								{ label: t('quickHome'), href: '/' },
								{ label: t('quickAbout'), href: '/about' },
								{ label: t('quickServices'), href: '/services' },
								{ label: t('quickContact'), href: '/contact' },
							].map(({ label, href }) => (
								<li key={label}>
									<Link
										href={href}
										className='hover:text-darkprimary dark:hover:text-darkforth transition-colors duration-200'>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}

					<div>
						<h3 className='text-lg font-semibold mb-4 text-third dark:text-white'>
							{t('quickResources')}
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								{ label: t('quickCareers'), href: '/careers' },
								{ label: t('quickBlog'), href: '/blog' },
								{ label: t('quickPricing'), href: '/pricing' },
								{ label: t('quickSupport'), href: '/support' },
							].map(({ label, href }) => (
								<li key={label}>
									<Link
										href={href}
										className='hover:text-darkprimary dark:hover:text-darkforth transition-colors duration-200'>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				{/* Socials */}
				<div>
					<h3 className='text-lg font-semibold mb-4 text-third dark:text-white'>
						{t('followUs')}
					</h3>
					<div className='flex gap-4 text-lg'>
						<a
							href='#'
							className='hover:text-blue-600 transition-colors'>
							<FaFacebookF />
						</a>
						<a
							href='#'
							className='hover:text-sky-400 transition-colors'>
							<FaTwitter />
						</a>
						<a
							href='#'
							className='hover:text-blue-700 transition-colors'>
							<FaLinkedinIn />
						</a>
						<a
							href='#'
							className='hover:text-gray-500 transition-colors'>
							<FaGithub />
						</a>
					</div>
				</div>
			</div>

			<div className='text-center text-sm border-t text-darkprimary dark:text-darkforth border-secoundry dark:border-darksecoundry pt-6'>
				&copy; 2025
				<Link
					href={'https://www.linkedin.com/in/magdi-perper-95b132343/'}
					className='text-darkthird dark:text-third px-1'>
					Magdi
				</Link>
				All rights reserved.
			</div>
		</motion.footer>
	);
};

export default Footer;
