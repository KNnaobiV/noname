import Image from 'next/image';
import React from 'react';
import TransactionTable from './Table/TransactionTable';
import { transactions } from '@/utils/data';

const Profile = () => {
	const data = [
		{
			id: 1,
			name: 'John Doe',
			image: '/assets/images/man2.png',
		},
		{
			id: 2,
			name: 'Sarah Doe',
			image: '/assets/images/man2.png',
		},
	];
	return (
		<main className='h-screen '>
			<section className='flex items-start w-full justify-between px-10 py-8'>
				<div className='space-y-8'>
					<article className='shadow p-4 bg-white border border-gray-100 space-y-4 w-[400px]'>
						<h3 className='font-semibold text-gray-800 text-xl'>Balance</h3>
						<p className='font-semibold text-2xl'>100000000 USD</p>
						<h6 className='font-semibold text-base text-gray-700'>Available</h6>
					</article>
					<article className='shadow p-4 bg-white border border-gray-100 w-[400px]'>
						<div className='flex w-full justify-between mb-6'>
							<h3 className='font-semibold  text-gray-800 text-xl'>Favorite Transfers</h3>
							<p className='font-semibold text-gray-500 text-base'>See more</p>
						</div>
						<ul className='flex flex-col gap-2'>
							{data.map((item) => (
								<li className='flex items-center gap-4 p-2 border border-gray-200' key={item.id}>
									<div className='rounded-full border border-gray-200 p-1'>
										<Image src={item.image} height={25} width={25} />
									</div>
									<h4 className='font-semibold text-base text-gray-800'>{item.name}</h4>
								</li>
							))}
						</ul>
					</article>
				</div>
				<div className='bg-white shadow-md px-4 py-4'>
					<h3 className='font-semibold  text-gray-800 text-xl'>Insights</h3>
					<Image src='/assets/images/dashboard/about.png' width={600} height={500} />
				</div>
			</section>
			<section className='px-8 py-10 '>
				<TransactionTable transactions={transactions} />
			</section>
		</main>
	);
};

export default Profile;
