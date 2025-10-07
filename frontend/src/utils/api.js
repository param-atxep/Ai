import axios from 'axios'


const api = axios.create({
baseURL: process.env.VITE_API_BASE || 'https://greenwash-backend.local/api',
timeout: 60_000,
})


export default api