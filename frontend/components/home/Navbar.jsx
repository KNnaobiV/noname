// Navbar.js
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import SubmitBtn from './Buttons/SubmitBtn';

const Navbar = ({ isAuthenticated }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed text-black bg-white shadow-lg top-0 left-0 z-10  px-4 md:px-12 lg:px-20 py-5 w-full'>
			<div className=' mx-auto flex items-center justify-between'>
				<div className=' text-2xl font-bold'>Banking App</div>
				<div className='hidden sm:flex space-x-4'>
					<a href='#' className=' hover:underline'>
						Home
					</a>
					{isAuthenticated && (
						<>
							<a href='#' className=' hover:underline'>
								Accounts
							</a>
							<a href='#' className=' hover:underline'>
								Transactions
							</a>
						</>
					)}
					<a href='#' className=' hover:underline'>
						Services
					</a>
				</div>
				<div className='sm:hidden'>
					<AiOutlineMenu className=' text-2xl cursor-pointer' onClick={toggleMenu} />
				</div>
				<div className='w-[130px]'>
					<Link href='/signup'>
						<SubmitBtn title='Get Started' />
					</Link>
				</div>
			</div>
			{isOpen && (
				<div className='sm:hidden mt-4'>
					<a href='#' className='block py-2 px-4 hover:bg-blue-700'>
						Home
					</a>
					{isAuthenticated && (
						<>
							<a href='#' className='block py-2 px-4 hover:bg-blue-700'>
								Accounts
							</a>
							<a href='#' className='block py-2 px-4 hover:bg-blue-700'>
								Transactions
							</a>
						</>
					)}
					<a href='#' className='block py-2 px-4 hover:bg-blue-700'>
						Services
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
