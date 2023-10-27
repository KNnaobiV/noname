// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import SubmitBtn from './Buttons/SubmitBtn';

const HeroSection = () => {
	return (
		<div className='bg-white mt-[140px] px-4 md:px-12 lg:px-20 w-full flex flex-col justify-center lg:flex-row'>
			<div className='w-full grid md:grid-cols-2'>
				<div className='p-8 gap-4 flex flex-col justify-center'>
					<h1 data-aos='slide-down' data-aos-duration='1000' className='text-4xl m-0 lg:text-6xl font-extrabold text-black'>
						Chase Your <br /> Dream Finance with us
					</h1>
					<p className='mt-4 text-lg lg:text-xl'>Manage your finances securely with our trusted banking services.</p>
					<div data-aos='slide-up' data-aos-duration='1000' className='w-[130px]'>
						<Link href='/signup'>
							<SubmitBtn title='Get Started' />
						</Link>
					</div>
				</div>
				<div className=' '>
					<Image src='/assets/images/herobg.jpg' alt='Bank Image' width={600} height={400} objectFit='cover' className='bg-[#FFEAF5]' />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
