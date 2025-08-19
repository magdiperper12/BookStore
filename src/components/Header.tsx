'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';

import Image from 'next/image';

import { FaSignOutAlt } from 'react-icons/fa';
import { RiMenuFold2Fill } from 'react-icons/ri';
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleclick = () => {
		setIsOpen(!isOpen);
	};
	const navLinks = [
		{ name: 'المحاضرات', href: '/lecture' },
		{ name: 'الاختبارات', href: '/Projects' },
	];
	return (
		<header className='backdrop-blur-lg dark:bg-black/10 bg-white/10  fixed   w-full pb-2   text-textColor  dark:text-white  shadow-lg shadow-textColor/10'>
			<div className='mx-auto flex h-16  pt-1 items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link
					href='/'
					className='flex justify-center items-center gap-2'>
					<Image
						src='/favicon.png'
						alt='شركة كودا - تطوير البرمجيات والذكاء الاصطناعي'
						width={40}
						height={40}
						priority
					/>
					<h1 className='text-xl '> منصة الطلاب</h1>
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
				<div className='flex gap-3 justify-center items-center'>
					<div className='md:flex hidden flex-col gap-[2px]'>
						<h1>مجدي صالح</h1>
						<h4 className='text-xs text-red-500 flex justify-center items-center gap-2'>
							تسجيل الخروج <FaSignOutAlt className='text-sm font-bold ' />
						</h4>
					</div>
					<div>
						<Image
							alt='profile'
							width={15}
							height={15}
							src={'/image/student.png'}
							className='w-9 h-9'
						/>
					</div>
					<button
						onClick={toggleclick}
						className='lg:hidden flex text-3xl font-extrabold'>
						<RiMenuFold2Fill />
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
						className='fixed z-50  w-full left-0 top-0 lg:hidden px-4 pt-4 pb-6 space-y-10 bg-primary dark:bg-darkprimary min-h-screen'>
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
