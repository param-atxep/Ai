import React from 'react'
import Card from '../components/Card'


export default function Reports(){
const reports = [
{id:'r1', company:'Acme Corp', date:'2025-09-01', score:65},
{id:'r2', company:'Beta Ltd', date:'2024-07-12', score:45},
]


return (
<div className="container-max">
<h2 className="text-xl font-bold mb-4">Reports & History</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{reports.map(r=> (
<Card key={r.id}>
<div className="flex justify-between items-center">
<div>
<div className="font-semibold">{r.company}</div>
<div className="text-sm">{r.date}</div>
</div>
<div className="text-lg font-bold">{r.score}</div>
</div>
</Card>
))}
</div>
</div>
)
}