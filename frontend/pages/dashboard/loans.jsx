import BorrowForm from '@/components/home/Dashboard/BorrowForm';
import LendForm from '@/components/home/Dashboard/LendForm';
import Profile from '@/components/home/Dashboard/Profile';
import SecureLayout from '@/components/home/Dashboard/SecureLayout';
import React, { useState } from 'react';

const Loans = () => {
	const [isLending, setIsLending] = useState(true);

	const toggleLending = () => {
		setIsLending(!isLending);
	};
	return (
		<SecureLayout>
			<div>
				<h2 className='text-2xl font-semibold'>Loan Component</h2>
				<div className='mb-4'>
					<button className={`px-4 py-2 ${isLending ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded`} onClick={toggleLending}>
						{isLending ? 'Lend' : 'Borrow'}
					</button>
				</div>
				{isLending ? <LendForm /> : <BorrowForm />}
			</div>
		</SecureLayout>
	);
};

export default Loans;
