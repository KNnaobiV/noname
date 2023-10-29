import axios from 'axios';

const API_BASE_URL = 'your_api_base_url';
const api_url = process.env.NEXT_PUBLIC_BASE_API_URL;
console.log(api_url);

const authService = {
	signUp: async (userData) => {
		try {
			const response = await axios.post(`${api_url}/register/`, userData);
			return response;
		} catch (error) {
			throw error;
		}
	},
	signIn: async (userData) => {
		try {
			const response = await axios.post(`${api_url}/login/`, userData);
			return response;
		} catch (error) {
			throw error;
		}
	},
	logout: async () => {
		// Implement your logout logic here, e.g., sending a request to revoke the token.
	},
};

export default authService;
