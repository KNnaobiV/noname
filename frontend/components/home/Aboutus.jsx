import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div data-aos='fade-up' className=' py-20 px-4 md:px-12 lg:px-20'>
			<div className=' mx-auto py-10 flex flex-col md:flex-row-reverse items-center'>
				<div className='md:w-1/2'>
					<Image src='/assets/images/about2.png' width={800} height={500} alt='Your Image' className='mx-auto   rounded-md' />
				</div>
				<div className='md:w-1/2 md:pl-8'>
					<h1 className='text-3xl font-semibold capitalize'>Atom at a glance</h1>
					<p className='text-gray-700 mt-4 tracking-wider'>
						At ATOM, we are dedicated to helping you take control of your financial journey. Our mission is to provide innovative and accessible banking solutions that empower individuals and businesses alike.We specialize in personal finance management, enabling you to track your expenses, savings, and investments with ease. Our user-friendly tools put the power of financial management at your fingertips.As pioneers in asset tokenization, we're committed to democratizing investment
						opportunities. Discover the advantages of banking with us and make your financial goals a reality.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
