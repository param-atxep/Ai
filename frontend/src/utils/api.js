import axios from 'axios';


const api = axios.create({
baseURL: import.meta.env.VITE_API_BASE,
});


// Add interceptor to send token automatically if exists
api.interceptors.request.use((config) => {
const token = localStorage.getItem('token');
if (token) config.headers.Authorization = `Bearer ${token}`;
return config;
});


export default api;
