import Image from 'next/image';
import React from 'react';

const Phones = () => {
	return (
		<main data-aos='fade-up' className='py-20 bg-gray-50 w-full flex justify-center items-center'>
			<Image src='/assets/images/phone.png' width={800} height={500} />
		</main>
	);
};

export default Phones;
