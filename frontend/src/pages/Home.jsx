import React from 'react'
import Card from '../components/Card'


export default function Home(){
return (
<div className="container-max">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<Card className="col-span-2">
<h2 className="text-2xl font-bold mb-2">Exposing Greenwashing with the Power of AI</h2>
<p className="text-sm">Analyze corporate websites, sustainability reports, or paste text and get a clear greenwashing score, detected claims and evidence.</p>


<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 border rounded">
<h3 className="font-semibold">How it works</h3>
<ol className="list-decimal list-inside text-sm mt-2">
<li>Upload a report, provide a website, or paste text.</li>
<li>AI extracts claims and checks evidence & consistency.</li>
<li>Receive a score and detailed report.</li>
</ol>
</div>


<div className="p-4 border rounded">
<h3 className="font-semibold">Quick actions</h3>
<div className="mt-2 flex gap-2">
<a href="/upload" className="px-3 py-2 rounded bg-green-600 text-white">Analyze now</a>
<a href="/reports" className="px-3 py-2 rounded border">View history</a>
</div>
</div>
</div>
</Card>


<Card>
<h3 className="font-semibold mb-2">Your link</h3>
<p className="text-sm">You provided: <span className="font-mono text-xs">https://greenwashing-detecti-ecoo.bolt.host/</span></p>
</Card>
</div>
</div>
)
}