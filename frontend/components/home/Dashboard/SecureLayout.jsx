import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import SecureNavbar from './SecureNavbar';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const SecureLayout = ({ children }) => {
	const { user } = useSelector((state) => state.auth);
	const router = useRouter();
	console.log(user);
	useEffect(() => {
		if (!user) {
			router.push('/signin?redirect=dashboard');
		}
	}, [user]);

	return (
		<main className='flex items-start h-screen overflow-auto'>
			<section className='w-[400px]'>
				<Sidebar />
			</section>
			<section className='w-full bg-gray-50 relative h-screen overflow-auto'>
				<SecureNavbar />
				<section className='mt-12'>{children}</section>
			</section>
		</main>
	);
};

export default SecureLayout;
