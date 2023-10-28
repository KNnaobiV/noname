import React from 'react';
import { dashboardSideLinks } from '@/utils/data';
import { MdLogout } from 'react-icons/md';
import Link from 'next/link';
const Sidebar = () => {
	return (
		<aside className='h-screen bg-[#0F1222] pl-4 pt-8 relative'>
			<h2 className='text-white text-2xl'>Atom</h2>
			<ul className='mt-10 space-y-1'>
				{dashboardSideLinks.map((item) => (
					<Link href={item.link} key={item.id} className='text-white text-xl hover:bg-gray-100 hover:text-black transition-all duration-300 ease-linear p-3 rounded-sm font-semibold flex gap-3 items-center'>
						<span>{item.icon}</span>
						<h3>{item.name}</h3>
					</Link>
				))}
			</ul>

			<div className='absolute bottom-4 w-full flex pl-1 text-xl text-white'>
				<div className='flex w-full p-3 hover:bg-gray-100 hover:text-black transition-all duration-300 ease-linear gap-3 items-center'>
					<MdLogout />
					<button>Logout</button>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
