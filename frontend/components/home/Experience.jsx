import React from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import { FaCheckCircle, FaBullseye, FaUsers, FaHandsHelping, FaLaptop, FaBuilding, FaCode } from 'react-icons/fa';
const Experience = () => {
	const items = [
		{
			icon: <FaCheckCircle size={40} />,
			title: 'Integrity',
			description: 'We uphold the highest standards of integrity in all our business operations. Our commitment to ethical conduct is unwavering.',
		},
		{
			icon: <FaBullseye size={40} />,
			title: 'Will to Win',
			description: 'We possess a relentless drive to succeed in the marketplace. Our dedication to excellence fuels our pursuit of success.',
		},
		{
			icon: <FaUsers size={40} />,
			title: 'Diversity and Inclusion',
			description: 'We embrace and celebrate diversity in our workplace and communities. Inclusion is at the heart of our culture.',
		},
		{
			icon: <FaHandsHelping size={40} />,
			title: 'Collaborative Teamwork',
			description: 'Our teams work in harmony to achieve common goals. We value the power of collaboration in driving innovation.',
		},
		{
			icon: <FaLaptop size={40} />,
			title: 'Innovative Technology',
			description: 'We leverage cutting-edge technology to transform our services, delivering innovative solutions for our clients.',
		},
		{
			icon: <FaBuilding size={40} />,
			title: 'Corporate Responsibility',
			description: 'We take pride in our corporate responsibility, contributing positively to the communities where we operate.',
		},
		{
			icon: <FaCode size={40} />,
			title: 'Digital Excellence',
			description: 'Our commitment to digital excellence drives us to provide seamless, efficient, and secure digital solutions.',
		},
		{
			icon: <FaBullseye size={40} />,
			title: 'Customer-Centric Approach',
			description: 'Our customer-focused approach ensures that we prioritize the needs and satisfaction of our clients.',
		},
	];

	return (
		<div data-aos='fade-up' className='py-16 bg-gray-50 px-4 md:px-12 lg:px-20 mt-12'>
			<SectionHeader title='Create Extraordinary customer experience' subtitle='Transforming Transactions into Transformative Moments' />
			<div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16'>
				{items.map((item, index) => (
					<div key={index} className='flex flex-col shadow-lg p-4 hover:scale-105 duration-300 ease-linear items-center gap-4'>
						<span className='text-[#ED017F]'>{item.icon}</span>
						<h3 className='font-semibold'>{item.title}</h3>
						<p className='text-black/40 text-center'>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
