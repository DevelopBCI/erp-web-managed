import axios from 'axios';

// Create a configured axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // If using cookies/sessions
});

// Interceptor for responses
apiClient.interceptors.response.use(
  (response) => {
    // You can handle unified response structures here
    return response.data;
  },
  (error) => {
    // Suppress console errors for expected 401s on auth endpoints
    const isAuthCheck = error.config?.url?.includes('/users/me.php');
    const isLogin = error.config?.url?.includes('/users/login.php');
    
    if (error.response?.status === 401 && (isAuthCheck || isLogin)) {
      // Silently reject
    } else {
      console.error('API Error:', error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
