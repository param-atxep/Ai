import { useState, useEffect } from 'react';
import api from '../utils/api';


export default function Reports() {
const [reports, setReports] = useState([]);


useEffect(() => {
const fetchReports = async () => {
try {
const res = await api.get('/results/all');
setReports(res.data);
} catch (err) {
console.error(err);
}
};
fetchReports();
}, []);


return (
<div>
<h2>Past Reports</h2>
{reports.length === 0 ? (
<p>No reports yet.</p>
) : (
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
{reports.map((r) => (
<div key={r._id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
<p><strong>Source:</strong> {r.source}</p>
<p><strong>Score:</strong> {r.score}</p>
<p><strong>Sentiment:</strong> {r.sentiment}</p>
<p><strong>Claims:</strong></p>
<ul>
{r.claims.map((c, i) => <li key={i}>{c.text} (Confidence: {c.confidence})</li>)}
</ul>
</div>
))}
</div>
)}
</div>
);
}
