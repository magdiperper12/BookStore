'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
	const [hideFooter, setHideFooter] = useState(false);
	const [login, setLogin] = useState(false);
	const [admin, setAdmin] = useState(false);

	const pathname = usePathname();
	const isAdminPath = pathname.includes('/admin');
	useEffect(() => {
		const url = window.location.href.toString();
		setHideFooter(url.includes('Pricing'));
	}, []);

	if (hideFooter) return null;

	useEffect(() => {
		setLogin(pathname.includes('login'));
		setAdmin(pathname.includes('admin'));
	}, [pathname]);
	return (
		!login && (
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
							{'footerTitle'}
						</h2>
						<p className='text-sm leading-6 text-darkprimary dark:text-darkforth'>
							<span className='text-darkthird dark:text-third'>TOKEN</span>{' '}
							{'footerDesc'}
						</p>
					</div>

					{/* Quick Links */}
					<div className='grid grid-cols-2 '>
						<div>
							<h3 className='text-lg font-semibold mb-4 text-third dark:text-white'>
								{'quickLinks'}
							</h3>
							<ul className='space-y-2 text-sm'>
								{[
									{ label: 'quickHome', href: '/' },
									{ label: 'quickAbout', href: '/about' },
									{ label: 'quickServices', href: '/services' },
									{ label: 'quickContact', href: '/contact' },
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
								{'quickResources'}
							</h3>
							<ul className='space-y-2 text-sm'>
								{[
									{ label: 'quickCareers', href: '/careers' },
									{ label: 'quickBlog', href: '/blog' },
									{ label: 'quickPricing', href: '/pricing' },
									{ label: 'quickSupport', href: '/support' },
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
							{'followUs'}
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
		)
	);
};

export default Footer;
