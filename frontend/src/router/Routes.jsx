import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import UploadAnalyze from '../pages/UploadAnalyze'
import ResultsDashboard from '../pages/ResultsDashboard'
import Reports from '../pages/Reports'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'


export default function Routes(){
return (
<Switch>
<Route path="/" element={<Home/>} />
<Route path="/upload" element={<UploadAnalyze/>} />
<Route path="/results" element={<ResultsDashboard/>} />
<Route path="/reports" element={<Reports/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
</Switch>
)
}