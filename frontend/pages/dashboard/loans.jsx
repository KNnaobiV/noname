import BorrowForm from '@/components/home/Dashboard/BorrowForm';
import LendForm from '@/components/home/Dashboard/LendForm';
import SecureLayout from '@/components/home/Dashboard/SecureLayout';
import React, { useState } from 'react';

const Loans = () => {
	const [isLending, setIsLending] = useState(true);
	const [active, setActive] = useState('borrow');

	const toggleLending = (value) => {
		setIsLending(!isLending);
		setActive(value);
	};
	return (
		<SecureLayout>
			<div className='w-full px-8'>
				<h2 className='text-2xl font-semibold'>Loan Component</h2>
				<div className='mb-4 flex w-full items-center justify-between'>
					<p className={`px-4 flex flex-1 border-b py-2 ${active === 'borrow' ? 'border-pink-500' : 'border-gray-300'} text-gray-800 rounded`} onClick={() => toggleLending('borrow')}>
						Borrow
					</p>
					<p className={`px-4 flex flex-1 border-b py-2 ${active === 'lend' ? 'border-pink-500' : 'border-gray-300'} text-gray-800 rounded`} onClick={() => toggleLending('lend')}>
						Lend
					</p>
				</div>
				{isLending ? <LendForm /> : <BorrowForm />}
			</div>
		</SecureLayout>
	);
};

export default Loans;
