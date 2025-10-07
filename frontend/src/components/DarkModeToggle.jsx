import React, {useEffect, useState} from 'react'


export default function DarkModeToggle(){
const [dark, setDark] = useState(()=>{
if (typeof window === 'undefined') return false
return localStorage.getItem('gw-dark') === 'true'
})


useEffect(()=>{
const root = document.documentElement
if (dark) root.classList.add('dark'); else root.classList.remove('dark')
localStorage.setItem('gw-dark', dark)
}, [dark])


return (
<button onClick={()=>setDark(d=>!d)} className="p-2 rounded-lg border border-gray-200 dark:border-gray-700">
{dark ? '🌙 Dark' : '☀️ Light'}
</button>
)
}