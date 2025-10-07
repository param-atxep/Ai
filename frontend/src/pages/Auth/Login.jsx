import { useState } from 'react';
import api from '../../utils/api';


export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');


const handleLogin = async (e) => {
e.preventDefault();
try {
const res = await api.post('/auth/login', { email, password });
localStorage.setItem('token', res.data.token);
alert('Login successful');
} catch (err) {
setError(err.response?.data?.error || 'Login failed');
}
};


return (
<div>
<h2>Login</h2>
<form onSubmit={handleLogin}>
<input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
<button type="submit">Login</button>
</form>
{error && <p style={{ color: 'red' }}>{error}</p>}
</div>
);
}
