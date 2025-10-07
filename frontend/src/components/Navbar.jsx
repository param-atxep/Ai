import React from 'react'
import DarkModeToggle from './DarkModeToggle'


export default function Navbar(){
return (
<header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
<div className="flex items-center gap-4">
<img src="/src/assets/logo.png" alt="logo" className="h-8 w-8 object-contain" onError={(e)=>{e.target.src='https://via.placeholder.com/64x64?text=GW'}} />
<h1 className="text-lg font-semibold">Greenwash AI</h1>
</div>


<div className="flex items-center gap-4">
<nav className="hidden md:flex gap-4">
<a href="/" className="hover:underline">Home</a>
<a href="/upload" className="hover:underline">Analyze</a>
<a href="/reports" className="hover:underline">Reports</a>
</nav>
<DarkModeToggle />
</div>
</header>
)
}