import React from 'react';
import { useSelector } from 'react-redux';

const SubmitBtn = ({ title }) => {
	const { loading } = useSelector((state) => state.auth);
	return (
		<div className='rounded px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-[#552381] text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300 '>
			<span className='absolute  right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
			<span className='relative'>{loading ? 'loading....' : title}</span>
		</div>
	);
};

export default SubmitBtn;
