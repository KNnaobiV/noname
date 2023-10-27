import Image from 'next/image';
import React from 'react';
import SubmitBtn from './Buttons/SubmitBtn';
import Link from 'next/link';
import { footerData } from '@/utils/data';

const Footer = () => {
	return (
		<main data-aos='fade-up' className='grid grid-cols-2 py-20 gap-8 bg-gray-50 w-full px-4 md:px-12 lg:px-20'>
			<section>
				<Image src='/assets/images/man2.png' width={600} height={500} />
			</section>
			<section className='flex flex-col gap-4 justify-between items-center'>
				<div>
					<p className='text-2xl'>
						No more waiting to start your <br /> business. Your search for Credit <br /> ends with us.
					</p>
					<div className=' flex justify-start mt-4'>
						<Link href='/signup' className='w-[130px]'>
							<SubmitBtn title='Apply Now' />
						</Link>
					</div>
				</div>
				<div className='grid grid-cols-4 gap-4 w-full justify-center'>
					{footerData.map((item, index) => (
						<div key={index}>
							<h1 className='text-lg text-[#ED017F] font-semibold mb-6'>{item.title}</h1>
							<div className='gap-3 flex flex-col'>
								{item.links.map((link, index) => (
									<a key={link.id} className='text-gray-600 text-sm hover:text-black'>
										{link.name}
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default Footer;
