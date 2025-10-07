import { useState } from 'react';
import api from '../utils/api';


export default function UploadAnalyze() {
const [textInput, setTextInput] = useState('');
const [urlInput, setUrlInput] = useState('');
const [file, setFile] = useState(null);
const [result, setResult] = useState(null);


const handleTextAnalyze = async () => {
const res = await api.post('/analyze/text', { text: textInput });
setResult(res.data);
};


const handleUrlAnalyze = async () => {
const res = await api.post('/analyze/url', { url: urlInput });
setResult(res.data);
};


const handleFileAnalyze = async () => {
if (!file) return;
const formData = new FormData();
formData.append('file', file);
const res = await api.post('/analyze/file', formData);
setResult(res.data);
};


return (
<div>
<h2>Analyze</h2>
<div>
<h3>Text Input</h3>
<textarea value={textInput} onChange={e => setTextInput(e.target.value)} />
<button onClick={handleTextAnalyze}>Analyze Text</button>
</div>
<div>
<h3>URL Input</h3>
<input value={urlInput} onChange={e => setUrlInput(e.target.value)} />
<button onClick={handleUrlAnalyze}>Analyze URL</button>
</div>
<div>
<h3>File Upload</h3>
<input type="file" onChange={e => setFile(e.target.files[0])} />
<button onClick={handleFileAnalyze}>Analyze File</button>
</div>
{result && (
<div>
<h3>Result</h3>
<p>Score: {result.score}</p>
<p>Sentiment: {result.sentiment}</p>
<ul>{result.claims.map((c, i) => <li key={i}>{c.text} (Confidence: {c.confidence})</li>)}</ul>
</div>
)}
</div>
);
}
