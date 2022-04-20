import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AddSubscriptionPage from './pages/AddSubscriptionPage/AddSubscriptionPage'

const App = () => {
    return (
        <div className="container">
            <h1 className="header">Mobildeal.se</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/subscriptions" element={<AddSubscriptionPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
