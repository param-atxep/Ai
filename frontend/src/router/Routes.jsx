import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import UploadAnalyze from '../pages/UploadAnalyze';
import ResultsDashboard from '../pages/ResultsDashboard';
import Reports from '../pages/Reports';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';


// Simple auth check
const PrivateRoute = ({ children }) => {
const token = localStorage.getItem('token');
return token ? children : <Navigate to="/login" />;
};


export default function AppRoutes() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/upload-analyze" element={<PrivateRoute><UploadAnalyze /></PrivateRoute>} />
<Route path="/results" element={<PrivateRoute><ResultsDashboard /></PrivateRoute>} />
<Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
</Routes>
</Router>
);
}
