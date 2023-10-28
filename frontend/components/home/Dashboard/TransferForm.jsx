import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import SubmitBtn from '../Buttons/SubmitBtn';

const schema = yup.object().shape({
	fromAccount: yup.string().required('From account is required'),
	toAccount: yup.string().required('To account is required'),
	amount: yup.number().typeError('Amount must be a number').required('Amount is required').positive('Amount must be a positive number'),
});

const FundTransferForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		// Handle the form submission here
		console.log(data);
	};

	return (
		<section className='w-full flex justify-center '>
			<form onSubmit={handleSubmit(onSubmit)} className='border px-4 py-8 border-gray-200 min-w-full md:min-w-[500px]'>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='fromAccount'>
						From Account
					</label>
					<input type='text' id='fromAccount' className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...register('fromAccount')} />
					<p className='text-red-500 text-xs italic'>{errors.fromAccount?.message}</p>
				</div>

				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='toAccount'>
						To Account
					</label>
					<input type='text' id='toAccount' className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...register('toAccount')} />
					<p className='text-red-500 text-xs italic'>{errors.toAccount?.message}</p>
				</div>

				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='amount'>
						Amount
					</label>
					<input type='number' id='amount' className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...register('amount')} />
					<p className='text-red-500 text-xs italic'>{errors.amount?.message}</p>
				</div>

				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='amount'>
						Description
					</label>
					<input type='number' id='amount' className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' {...register('amount')} />
					<p className='text-red-500 text-xs italic'>{errors.amount?.message}</p>
				</div>

				<div className='flex items-center justify-between'>
					<button type='submit' className='flex items-center justify-between'>
						<SubmitBtn title='Transfer' />
					</button>
				</div>
			</form>
		</section>
	);
};

export default FundTransferForm;
