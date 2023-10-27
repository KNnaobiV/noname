import React from 'react';

const SubmitBtn = ({ title }) => {
	return (
		<div className='rounded px-5 py-2.5 overflow-hidden group bg-[#ED017F] relative hover:bg-gradient-to-r hover:from-[#ED017F] hover:to-[#ff3fa5] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#ED017F] transition-all ease-out duration-300'>
			<span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
			<span className='relative'>{title}</span>
		</div>
	);
};

export default SubmitBtn;
