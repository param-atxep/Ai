import { useState } from 'react';
import api from '../../utils/api';


export default function Signup() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');


const handleSignup = async (e) => {
e.preventDefault();
try {
const res = await api.post('/auth/signup', { name, email, password });
localStorage.setItem('token', res.data.token);
alert('Signup successful');
} catch (err) {
setError(err.response?.data?.error || 'Signup failed');
}
};


return (
<div>
<h2>Signup</h2>
<form onSubmit={handleSignup}>
<input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
<input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
<button type="submit">Signup</button>
</form>
{error && <p style={{ color: 'red' }}>{error}</p>}
</div>
);
}
