import { FaCheckCircle, FaGlobe, FaMoneyBill, FaHome, FaExchangeAlt, FaList, FaCreditCard, FaCog } from 'react-icons/fa';

export const stockData = [
	{
		id: 1,
		title: 'Same day approval',
		icon: <FaCheckCircle size={30} />,
	},
	{
		id: 2,
		title: 'Completely Online',
		icon: <FaGlobe size={30} />,
	},
	{
		id: 3,
		title: 'Easy Payment',
		icon: <FaMoneyBill size={30} />,
	},
];

export const footerData = [
	{
		id: 1,
		title: 'Company',
		links: [
			{
				id: 1,
				name: 'About Us',
			},
			{
				id: 2,
				name: 'Teams',
			},
			{
				id: 3,
				name: 'Visions',
			},
		],
	},
	{
		id: 2,
		title: 'Resources',
		links: [
			{
				id: 1,
				name: 'Newsletter',
			},
			{
				id: 2,
				name: 'Books',
			},
			{
				id: 3,
				name: 'Pdf',
			},
		],
	},
	{
		id: 3,
		title: 'Legal',
		links: [
			{
				id: 1,
				name: 'Policy',
			},
			{
				id: 2,
				name: 'Terms',
			},
			{
				id: 3,
				name: 'Condition',
			},
		],
	},
	{
		id: 4,
		title: 'Location',
		links: [
			{
				id: 1,
				name: 'Lagos',
			},
			{
				id: 2,
				name: 'Abuja',
			},
			{
				id: 3,
				name: 'Port Harcourt',
			},
		],
	},
];

export const dashboardSideLinks = [
	{
		id: 1,
		name: 'Dashboard',
		icon: <FaHome />,
		link: '/dashboard',
	},
	{
		id: 2,
		name: 'Loans',
		icon: <FaMoneyBill />,
		link: '/dashboard/loans',
	},
	{
		id: 3,
		name: 'Fund Transfer',
		icon: <FaExchangeAlt />,
		link: '/dashboard/transfer',
	},
	{
		id: 4,
		name: 'Transactions',
		icon: <FaList />,
		link: '/dashboard/transactions',
	},
	{
		id: 5,
		name: 'Bill Payments',
		icon: <FaCreditCard />,
		link: '/dashboard/bills',
	},
	{
		id: 6,
		name: 'Settings',
		icon: <FaCog />,
		link: '/dashboard/settings',
	},
];

export const transactions = [
	{ id: 1, name: 'John Doe', status: 'Completed', date: '2023-10-27', amount: 100.0, image: '/assets/images/Bag.png' },
	{ id: 2, name: 'Jane Smith', status: 'Pending', date: '2023-10-28', amount: 75.5, image: '/assets/images/Bag.png' },
	{ id: 3, name: 'Bob Johnson', status: 'Failed', date: '2023-10-29', amount: 50.25, image: '/assets/images/Bag.png' },
	{ id: 4, name: 'Sarah Doe', status: 'Completed', date: '2023-10-27', amount: 100.0, image: '/assets/images/Bag.png' },
	{ id: 5, name: 'Will Smith', status: 'Pending', date: '2023-10-28', amount: 75.5, image: '/assets/images/Bag.png' },
	{ id: 6, name: 'Jerry Johnson', status: 'Failed', date: '2023-10-29', amount: 50.25, image: '/assets/images/Bag.png' },
];
