import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AddSubscriptionPage from './pages/AddSubscriptionPage/AddSubscriptionPage'

// Contexts
import { LoginContext } from './contexts/LoginContext'
import { SubscriptionsContext } from './contexts/SubscriptionsContext'

const App = () => {
    const [token, setToken] = useState(null)
    const [subscriptions, setSubscriptions] = useState([])

    return (
        <div className="container">
            <LoginContext.Provider value={{ token, setToken }}>
                <SubscriptionsContext.Provider value={{ subscriptions, setSubscriptions }}>
                    <h1 className="header">Mobildeal.se</h1>
                    <Router>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/subscriptions" element={<AddSubscriptionPage />} />
                        </Routes>
                    </Router>
                </SubscriptionsContext.Provider>
            </LoginContext.Provider>
        </div>
    )
}

export default App
