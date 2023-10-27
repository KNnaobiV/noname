import React from 'react';

function SectionHeader({ title, subtitle }) {
	return (
		<div className=' py-4'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-semibold text-center'>{title}</h1>
				{subtitle && <p className='text-gray-600 text-center'>{subtitle}</p>}
			</div>
		</div>
	);
}

export default SectionHeader;
