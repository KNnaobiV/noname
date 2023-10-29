import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import SubmitBtn from '@/components/home/Buttons/SubmitBtn';
import { UseSelector, useDispatch } from 'react-redux';
import { signUpAsync } from '@/Store/slices/authSlice';
import Image from 'next/image';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();
	const dispatch = useDispatch();

	const password = watch('password', '');
	const confirm_password = watch('confirm_password', '');

	const onSubmit = async (data) => {
		dispatch(signUpAsync(data));
		console.log(data);
	};

	return (
		<div className='w-full max-w-sm mx-auto min-h-screen flex items-center justify-center'>
			<form onSubmit={handleSubmit(onSubmit)} className='bg-white mt-20 border border-gray-100 relative shadow-md rounded w-full md:min-w-[500px] px-8 py-16 pb-8 mb-4'>
				{/* <h2 className='text-2xl font-bold mb-6'>Sign Up</h2> */}
				<section className='absolute left-0 w-full -top-8'>
					<div className='flex w-full justify-center'>
						<Link href='/'>
							<Image src='/assets/images/logo.jpg' width={100} height={80} alt='logo' />
						</Link>
					</div>
				</section>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
						First Name
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='First Name' {...register('first_name', { required: 'First Name is required' })} />
					{errors.first_name && <p className='text-red-500 text-xs italic'>{errors.first_name.message}</p>}
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='last_name'>
						Last Name
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Last Name' {...register('last_name', { required: 'Last Name is required' })} />
					{errors.last_name && <p className='text-red-500 text-xs italic'>{errors.last_name.message}</p>}
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Email
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Email' {...register('email', { required: 'Email is required' })} />
					{errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
						Username
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Username' {...register('username', { required: 'Username is required' })} />
					{errors.username && <p className='text-red-500 text-xs italic'>{errors.username.message}</p>}
				</div>
				<div className='mb-6'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
						Password
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='Password' {...register('password', { required: 'Password is required' })} />
					{errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password2'>
						Confirm Password
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						type='password'
						placeholder='Password2'
						{...register('password2', {
							required: 'Confirm Password is required',
							validate: (value) => value === password || 'Passwords do not match',
						})}
					/>
					{errors.confirm_password && <p className='text-red-500 text-xs italic'>{errors.confirm_password.message}</p>}
				</div>
				<div className='flex items-center justify-between'>
					<button type='submit' className='flex items-center justify-between'>
						<SubmitBtn title='Sign Up' />
					</button>
				</div>
				<div className='mt-4 flex items-center gap-2'>
					<p className='text-gray-600 text-sm'>Already have an account?</p>
					<Link href='/signin' className='text-blue-500 text-sm hover:underline'>
						Sign In here
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
