import Profile from '@/components/home/Dashboard/Profile';
import SecureLayout from '@/components/home/Dashboard/SecureLayout';
import FundTransferForm from '@/components/home/Dashboard/TransferForm';
import React from 'react';

const Transfer = () => {
	return (
		<SecureLayout>
			<h2 className='text-center font-semibold text-2xl mb-8'>Transfer Funds</h2>
			<FundTransferForm />
		</SecureLayout>
	);
};

export default Transfer;
