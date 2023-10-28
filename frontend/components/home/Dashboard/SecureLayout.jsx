import React from 'react';
import Sidebar from './Sidebar';
import SecureNavbar from './SecureNavbar';

const SecureLayout = ({ children }) => {
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
