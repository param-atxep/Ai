import React from 'react'
import { NavLink } from 'react-router-dom'


const links = [
{to: '/', label: 'Home'},
{to: '/upload', label: 'Upload/Analyze'},
{to: '/results', label: 'Results Dashboard'},
{to: '/reports', label: 'Reports & History'},
]


export default function Sidebar(){
return (
<aside className="w-64 hidden md:block border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
<div className="p-6">
<div className="mb-6">
<h2 className="text-2xl font-bold">Greenwash AI</h2>
<p className="text-sm">Exposing Greenwashing with the Power of AI</p>
</div>


<nav className="flex flex-col gap-2">
{links.map(l => (
<NavLink key={l.to} to={l.to} className={({isActive}) => `px-3 py-2 rounded ${isActive ? 'bg-green-600 text-white':'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
{l.label}
</NavLink>
))}
</nav>


<div className="mt-6">
<label className="block text-xs uppercase">Filter by industry</label>
<select className="mt-2 w-full rounded p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
<option>All</option>
<option>Tech</option>
<option>Retail</option>
<option>Finance</option>
<option>Energy</option>
</select>
</div>
</div>
</aside>
)
}