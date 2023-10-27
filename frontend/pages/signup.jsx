import { useForm } from 'react-hook-form';
import Link from 'next/link';
import SubmitBtn from '@/components/home/Buttons/SubmitBtn';
const SignUp = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className='w-full max-w-sm mx-auto min-h-screen flex items-center justify-center'>
			<form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded w-full md:min-w-[500px] px-8 pt-6 pb-8 mb-4'>
				<h2 className='text-2xl font-bold mb-6'>Sign Up</h2>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
						First Name
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='First Name' name='firstName' {...register('firstName', { required: true })} />
					{errors?.firstName && <p className='text-red-500 text-xs italic'>First Name is required.</p>}
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
						Last Name
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Last Name' name='lastName' {...register('lastName', { required: true })} />
					{errors?.lastName && <p className='text-red-500 text-xs italic'>Last Name is required.</p>}
				</div>
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Email
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Email' name='email' {...register('email', { required: true })} />
					{errors?.email && <p className='text-red-500 text-xs italic'>Email is required.</p>}
				</div>
				<div className='mb-6'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
						Password
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='password' placeholder='Password' name='password' {...register('password', { required: true })} />
					{errors?.password && <p className='text-red-500 text-xs italic'>Password is required.</p>}
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
