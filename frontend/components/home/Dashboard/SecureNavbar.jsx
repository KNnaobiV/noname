import Image from 'next/image';
import React from 'react';
import { AiOutlineDown, AiOutlineBell } from 'react-icons/ai';

const SecureNavbar = () => {
	return (
		<nav className='w-full  shadow-lg border border-gray-100 p-4'>
			<section className='w-full flex justify-between items-center'>
				<div>
					<h3 className='text-black text-lg'>Good morning</h3>
				</div>
				<div className='flex items-center gap-2'>
					<AiOutlineBell size={25} />
					<div className='rounded-full border border-gray-200 ml-8 p-2'>
						<Image src='/assets/images/Bag.png' height={25} width={25} />
					</div>
					<h3 className='text-black text-lg'>Ezekiel</h3>
					<AiOutlineDown size={20} />
				</div>
			</section>
		</nav>
	);
};

export default SecureNavbar;
