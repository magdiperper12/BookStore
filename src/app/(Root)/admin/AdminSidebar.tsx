'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTachometerAlt, FaUsers, FaBook, FaCog } from 'react-icons/fa';

const navItems = [
	{ href: '/admin', label: 'Dashboard', icon: <FaTachometerAlt /> },
	{ href: '/admin/management', label: 'User Management', icon: <FaUsers /> },
	{ href: '/admin/subjects', label: 'Subjects', icon: <FaBook /> },
	{ href: '/admin/settings', label: 'Settings', icon: <FaCog /> },
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className='w-full md:w-64 bg-white border-r md:h-screen p-5'>
			<h1 className='text-2xl font-bold mb-8'>EduAdmin</h1>
			<nav className='space-y-2'>
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
							pathname === item.href
								? 'bg-blue-500 text-white'
								: 'hover:bg-gray-100 text-gray-700'
						}`}>
						{item.icon}
						<span>{item.label}</span>
					</Link>
				))}
			</nav>
		</div>
	);
}
