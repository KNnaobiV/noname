import { useForm } from 'react-hook-form';
import Link from 'next/link';
import SubmitBtn from '@/components/home/Buttons/SubmitBtn';
import { useDispatch } from 'react-redux';
import { signInAsync } from '@/Store/slices/authSlice';
import Image from 'next/image';

const SignIn = () => {
	const { register, handleSubmit, errors } = useForm();
	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(signInAsync(data));
		console.log(data);
	};

	return (
		<div className='w-full max-w-sm mx-auto min-h-screen flex items-center justify-center'>
			<form onSubmit={handleSubmit(onSubmit)} className=' relative border border-gray-100 bg-white w-full md:min-w-[500px] shadow-md rounded px-8 py-12 pb-8 mb-4'>
				<section className='absolute left-0 w-full -top-8'>
					<div className='flex w-full justify-center'>
						<Link href='/'>
							<Image src='/assets/images/logo.jpg' width={100} height={80} alt='logo' />
						</Link>
					</div>
				</section>

				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
						Username
					</label>
					<input className='shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='username' name='username' {...register('username', { required: true })} />
					{errors?.username && <p className='text-red-500 text-xs italic'>Username is required.</p>}
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
						<SubmitBtn title='Sign In' />
					</button>
				</div>
				<div className='mt-4 flex items-center gap-2'>
					<p className='text-gray-600 text-sm'>Don't have an account?</p>
					<Link href='/signup' className='text-blue-500 text-sm hover:underline'>
						Sign up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
