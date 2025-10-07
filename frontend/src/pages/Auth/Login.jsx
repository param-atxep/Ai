import React, {useState} from 'react'


export default function Login(){
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const handle = (e)=>{ e.preventDefault(); alert('Demo login') }
return (
<div className="container-max">
<div className="max-w-md mx-auto">
<h2 className="text-2xl font-bold mb-4">Login</h2>
<form onSubmit={handle} className="space-y-4">
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
<input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-2 border rounded" />
<button className="w-full py-2 rounded bg-green-600 text-white">Sign in</button>
</form>
</div>
</div>
)
}