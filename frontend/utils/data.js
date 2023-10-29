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
		name: 'Settings',
		icon: <FaCog />,
		link: '/dashboard/settings',
	},
];

export const transactions = [
	{ id: 1, name: 'John Doe', status: 'Completed', date: '2023-10-27', amount: 100.0, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 2, name: 'Jane Smith', status: 'Pending', date: '2023-10-28', amount: 75.5, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 3, name: 'Bob Johnson', status: 'Failed', date: '2023-10-29', amount: -50.25, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 4, name: 'Sarah Doe', status: 'Completed', date: '2023-10-27', amount: 100.0, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 5, name: 'Will Smith', status: 'Pending', date: '2023-10-28', amount: 75.5, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 6, name: 'Jerry Johnson', status: 'Failed', date: '2023-10-29', amount: -50.25, image: '/assets/images/Bag.png', type: 'debit' },
];

export const fetchedTransactions = [
	{ id: 1, name: 'John Doe', status: 'Completed', date: '2023-10-27', amount: 100.0, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 2, name: 'Jane Smith', status: 'Pending', date: '2023-10-28', amount: 75.5, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 3, name: 'Bob Johnson', status: 'Failed', date: '2023-10-29', amount: -50.25, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 4, name: 'Sarah Doe', status: 'Completed', date: '2023-10-27', amount: 100.0, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 5, name: 'Will Smith', status: 'Pending', date: '2023-10-28', amount: -75.5, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 6, name: 'Jerry Johnson', status: 'Failed', date: '2023-10-29', amount: 50.25, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 7, name: 'Alicia Keys', status: 'Completed', date: '2023-10-30', amount: -90.0, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 8, name: 'Robert Smith', status: 'Pending', date: '2023-10-31', amount: 60.5, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 9, name: 'David Johnson', status: 'Failed', date: '2023-11-01', amount: 30.25, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 10, name: 'Emma Watson', status: 'Completed', date: '2023-11-02', amount: 80.0, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 11, name: 'Michael Jordan', status: 'Pending', date: '2023-11-03', amount: -65.5, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 12, name: 'Olivia Smith', status: 'Failed', date: '2023-11-04', amount: -40.25, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 13, name: 'Samuel Jackson', status: 'Completed', date: '2023-11-05', amount: -70.0, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 14, name: 'Linda Johnson', status: 'Pending', date: '2023-11-06', amount: 85.5, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 15, name: 'Matthew Smith', status: 'Failed', date: '2023-11-07', amount: -55.25, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 16, name: 'Sophia Williams', status: 'Completed', date: '2023-11-08', amount: 120.0, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 17, name: 'Richard Johnson', status: 'Pending', date: '2023-11-09', amount: 45.5, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 18, name: 'Elizabeth Smith', status: 'Failed', date: '2023-11-10', amount: 35.25, image: '/assets/images/Bag.png', type: 'credit' },
	{ id: 19, name: 'Daniel White', status: 'Completed', date: '2023-11-11', amount: -110.0, image: '/assets/images/Bag.png', type: 'debit' },
	{ id: 20, name: 'Emily Brown', status: 'Pending', date: '2023-11-12', amount: 95.5, image: '/assets/images/Bag.png', type: 'credit' },
];
