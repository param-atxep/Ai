import { useState, useEffect } from 'react';
import api from '../utils/api';


export default function ResultsDashboard() {
const [reports, setReports] = useState([]);


const fetchReports = async () => {
const res = await api.get('/results');
setReports(res.data);
};


useEffect(() => {
fetchReports();
}, []);


return (
<div>
<h2>Results Dashboard</h2>
{reports.length === 0 ? (
<p>No reports yet</p>
) : (
<ul>
{reports.map((r) => (
<li key={r._id}>
<p>Source: {r.source}</p>
<p>Score: {r.score}</p>
<p>Sentiment: {r.sentiment}</p>
</li>
))}
</ul>
)}
</div>
);
}
