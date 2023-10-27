import axios from 'axios';

const API_BASE_URL = 'your_api_base_url';

const authService = {
  signUp: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, userData);
      return response;
    } catch (error) {
      throw error;
    }
  },
  signIn: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signin`, userData);
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
