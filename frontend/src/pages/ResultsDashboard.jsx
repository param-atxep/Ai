import React from 'react'
import Card from '../components/Card'


function Progress({value}){
return (
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
<div style={{width:`${value}%`}} className="h-4 bg-green-600" />
</div>
)
}


export default function ResultsDashboard(){
// Demo static data
const data = {
id: 'demo-1', score: 68, sentiment: 'neutral', claims: [
{id:1, text:'Carbon neutral by 2025', conf:0.86},
{id:2, text:'100% renewable energy use', conf:0.72},
],
timeline: [ {date:'2023-01-01',score:52}, {date:'2024-01-01',score:60}, {date:'2025-01-01',score:68} ]
}


return (
<div className="container-max">
<h2 className="text-xl font-bold mb-4">Results Dashboard</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<Card className="col-span-2">
<h3 className="font-semibold">Overall Greenwashing Score</h3>
<div className="mt-3">
<div className="flex items-center gap-4">
<div className="text-4xl font-bold">{data.score}</div>
<div className="flex-1">
<Progress value={data.score} />
</div>
</div>
<div className="text-sm mt-2">Scale 0 (clean) — 100 (likely greenwash)</div>
</div>


<div className="mt-6">
<h4 className="font-semibold">Detected claims</h4>
<ul className="mt-2 space-y-2">
{data.claims.map(c=> (
<li key={c.id} className="p-3 border rounded">
<div className="flex justify-between">
<div>{c.text}</div>
<div className="font-mono">{Math.round(c.conf*100)}%</div>
</div>
</li>
))}
</ul>
</div>


</Card>


<Card>
<h4 className="font-semibold">Sentiment</h4>
<div className="mt-3">{data.sentiment}</div>


<div className="mt-6">
<h4 className="font-semibold">Timeline (history)</h4>
<ol className="list-decimal list-inside text-sm mt-2">
{data.timeline.map(t=> (
<li key={t.date}>{t.date}: score {t.score}</li>
))}
</ol>
</div>
</Card>
</div>


<div className="mt-6">
<Card>
<h4 className="font-semibold">Evidence & Contradictions</h4>
<p className="text-sm mt-2">Links and snippets supporting or contradicting claims will appear here. In a real deployment the backend would fetch and cite sources.</p>
</Card>
</div>
</div>
)
}