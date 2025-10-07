import React from 'react'
import Routes from './router/Routes'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'


export default function App(){
return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
<div className="flex">
<Sidebar />
<div className="flex-1">
<Navbar />
<main className="p-6">
<Routes />
</main>
</div>
</div>
</div>
)
}