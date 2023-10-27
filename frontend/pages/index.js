import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import Experience from '@/components/home/Experience';
import About from '@/components/home/Aboutus';
import Stock from '@/components/home/Stock';
import Phones from '@/components/home/Phones';
import Footer from '@/components/home/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`relative bg-white flex min-h-screen flex-col items-center justify-between w-full ${inter.className}`}>
			<Navbar />
			<HeroSection />
			<Experience />
			<Stock />
			<Phones />
			<About />
			<Footer />
		</main>
	);
}
