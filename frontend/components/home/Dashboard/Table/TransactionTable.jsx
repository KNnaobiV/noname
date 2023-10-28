import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TransactionTable = ({ transactions }) => {
	return (
		<div className='shadow bg-white p-4'>
			<div className='flex w-full justify-between mb-6'>
				<h3 className='font-bold text-xl text-gray-800'>Transactions</h3>
				<Link href='/dashboard/transactions'>
					<p className='font-semibold text-gray-500 text-base'>See All</p>
				</Link>
			</div>
			<table className='min-w-full table-auto'>
				<thead>
					<tr className='text-gray-700'>
						<th className='px-4 text-start py-2'>Name</th>
						<th className='px-4 text-start py-2'>ID</th>
						<th className='px-4 text-start py-2'>Status</th>
						<th className='px-4 text-start py-2'>Date</th>
						<th className='px-4 text-start py-2'>Amount</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id} className='text-gray-800 font-semibold'>
							<td className='border px-4 py-2 flex items-center gap-2'>
								<div className='rounded-full p-1 border border-gray-200'>
									<Image src={transaction.image} height={20} width={20} />
								</div>
								{transaction.name}
							</td>
							<td className='border px-4 py-2'>{transaction.id}</td>
							<td className='border px-4 py-2'>{transaction.status}</td>
							<td className='border px-4 py-2'>{transaction.date}</td>
							<td className='border px-4 py-2'>${transaction.amount.toFixed(2)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionTable;
