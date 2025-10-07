import React from 'react'


export default function Card({children, className=''}){
return (
<div className={`rounded-2xl shadow-sm p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 ${className}`}>
{children}
</div>
)
}