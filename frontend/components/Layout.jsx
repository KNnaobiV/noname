import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children }) => {
	const { user } = useSelector((state) => state.auth);
	console.log(user);
	const router = useRouter();

	useEffect(() => {
		if (user) {
			router.push('/dashboard');
		}
	}, [user]);

	return (
		<div>
			{/* <ToastContainer /> */}
			<main>{children}</main>
		</div>
	);
};

export default Layout;
