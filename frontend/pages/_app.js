import '@/styles/globals.css';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '@/Store/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 500,
			offset: 200,
			once: true,
		});
	}, []);
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
