import Profile from '@/components/home/Dashboard/Profile';
import SecureLayout from '@/components/home/Dashboard/SecureLayout';
import React from 'react';

const dashboard = () => {
	return (
		<SecureLayout>
			<Profile />
		</SecureLayout>
	);
};

export default dashboard;
