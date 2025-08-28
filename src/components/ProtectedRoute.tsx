'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({
	children,
	allowedRoles,
}: {
	children: React.ReactNode;
	allowedRoles: string[];
}) => {
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('section_token');
		const role = localStorage.getItem('user_role');

		if (!token) {
			router.push('/login');
			return;
		}

		if (role && !allowedRoles.includes(role)) {
			router.push('/unauthorized');
			return;
		}
	}, [router, allowedRoles]);

	return <>{children}</>;
};

export default ProtectedRoute;
