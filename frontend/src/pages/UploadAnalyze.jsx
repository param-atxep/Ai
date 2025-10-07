import React, {useState} from 'react'
export default function UploadAnalyze(){
const [url, setUrl] = useState('')
const [text, setText] = useState('')
const [file, setFile] = useState(null)
const [loading, setLoading] = useState(false)
const [result, setResult] = useState(null)


async function submit(kind){
setLoading(true)
try{
// we'll show example local dummy behaviour; replace with real API
const payload = { kind, url, text }
// for file upload you'd use FormData
// const res = await api.post('/analyze', form)
// demo: fake result
await new Promise(r=>setTimeout(r,800))
const fake = {
id: 'demo-1',
score: Math.floor(Math.random()*60)+30,
claims: [
{text: 'Carbon neutral by 2025', confidence: 0.86},
{text: '100% renewable energy use', confidence: 0.72},
],
sentiment: 'neutral'
}
setResult(fake)
}catch(e){
console.error(e)
alert('Analysis failed')
}finally{ setLoading(false) }
}


return (
<div className="container-max">
<h2 className="text-xl font-bold mb-4">Upload / Analyze</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<Card className="col-span-2">
<div className="mb-4">
<label className="block text-sm">Website URL</label>
<input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://example.com" className="mt-2 w-full rounded p-2 border" />
<div className="mt-3">
<button onClick={()=>submit('url')} className="px-4 py-2 rounded bg-green-600 text-white" disabled={loading}>Analyze URL</button>
</div>
</div>


<div className="mb-4">
<label className="block text-sm">Upload PDF / Text</label>
<input type="file" onChange={e=>setFile(e.target.files?.[0])} className="mt-2" />
<div className="mt-3">
<button onClick={()=>submit('file')} className="px-4 py-2 rounded bg-green-600 text-white" disabled={loading}>Analyze File</button>
</div>
</div>


<div>
<label className="block text-sm">Paste Text</label>
<textarea value={text} onChange={e=>setText(e.target.value)} rows={6} className="mt-2 w-full rounded p-2 border" />
<div className="mt-3">
<button onClick={()=>submit('text')} className="px-4 py-2 rounded bg-green-600 text-white" disabled={loading}>Analyze Text</button>
</div>
</div>
</Card>


<Card>
<h3 className="font-semibold mb-2">Quick tips</h3>
<ul className="list-disc list-inside text-sm">
<li>Include the exact claim text for better accuracy.</li>
<li>Upload the sustainability report (PDF) if available.</li>
<li>Use company website links for broader context.</li>
</ul>
</Card>
</div>


{result && (
<div className="mt-6">
<a href={`/results?id=${result.id}`} className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700">Open result (demo)</a>
</div>
)}
</div>
)
}