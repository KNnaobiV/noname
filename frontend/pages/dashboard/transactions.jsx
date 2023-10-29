import Profile from '@/components/home/Dashboard/Profile';
import SecureLayout from '@/components/home/Dashboard/SecureLayout';
import TransactionTable from '@/components/home/Dashboard/Table/TransactionTable';
import React from 'react';
import { useSelector } from 'react-redux';

const Transactions = () => {
	const { transactions, filteredTransactions } = useSelector((state) => state.user);
	return (
		<SecureLayout>
			<h2 className='text-center font-semibold text-2xl '>Transactions</h2>
			<section className='px-8 py-16'>
				<TransactionTable transactions={filteredTransactions} />
			</section>
		</SecureLayout>
	);
};

export default Transactions;
