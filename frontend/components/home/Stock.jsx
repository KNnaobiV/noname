import { stockData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

const Stock = () => {
	return (
		<main data-aos='fade-up' className='grid grid-cols-2 py-16 w-full px-4 md:px-12 lg:px-44'>
			<section className='flex flex-col items-start justify-start '>
				<h2 className='font-bold text-3xl mb-4'>
					Stock Up Easily with <br /> Easy Loan Process
				</h2>
				<p className='text-[#868687]'>
					Expand your business easily and grow with our easily available loans <br /> at lowest available interest
				</p>
				<ul className='mt-20 flex flex-col gap-8'>
					{stockData.map((item, index) => (
						<li key={index} className='flex gap-4'>
							<span className='text-[#ED017F]'>{item.icon}</span>
							<h3>{item.title}</h3>
						</li>
					))}
				</ul>
			</section>
			<section className='w-full'>
				<Image src='/assets/images/stock2.png' width={500} height={500} />
			</section>
		</main>
	);
};

export default Stock;
