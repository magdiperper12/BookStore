'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import Dark from './Dark';
import Lang from './Lang';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
const Header = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	if (!i18n.isInitialized) return null;

	const navLinks = [
		{ name: t('Home'), href: '/' },
		{ name: t('Projects'), href: '/Projects' },
		{ name: t('About'), href: '/About' },
		{ name: t('contact'), href: '/Contact' },
	];
	return (
		<header className='backdrop-blur-lg dark:bg-black/10 bg-white/10  fixed   w-full pb-2   text-darkprimary  dark:text-white  shadow-lg'>
			<div className='mx-auto flex h-16  pt-1 items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link href='/'>
					<Image
						src='/favicon.png'
						alt='شركة كودا - تطوير البرمجيات والذكاء الاصطناعي'
						width={50}
						height={50}
						priority
					/>
				</Link>
				{/* Desktop Navigation */}
				<nav className='hidden lg:flex items-center gap-6  font-bold text-xl'>
					{navLinks.map((link, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 * i }}>
							<Link
								className='hover:text-third transition focus:text-darkthird  px-3'
								href={link.href}>
								{link.name}
							</Link>
						</motion.div>
					))}
				</nav>

				{/* Right actions */}
				<div className='flex items-center gap-4'>
					<Dark />
					<Lang />
					{/* Mobile Menu Button */}
					<button
						className='lg:hidden  p-2 text-darkprimary text-2xl dark:text-primary'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<div>
								<IoClose />
							</div>
						) : (
							<div>
								<TiThMenu />
							</div>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed z-50  w-full left-0 top-0 lg:hidden px-4 pt-4 pb-6 space-y-10 bg-secoundry dark:bg-darkprimary min-h-screen'>
						<button
							className='lg:hidden fixed right-4 top-4  p-2 text-darkprimary text-3xl dark:text-primary'
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? (
								<div>
									<IoClose />
								</div>
							) : (
								<div>
									<TiThMenu />
								</div>
							)}
						</button>
						{navLinks.map((link, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.2 * i }}
								className='ps-5'>
								<Link
									className='hover:text-third transition focus:text-darkthird text-2xl font-bold'
									href={link.href}>
									{link.name}
								</Link>
							</motion.div>
						))}
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
