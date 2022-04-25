import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'

import { useState, useContext } from 'react'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// Page imports
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AddSubscriptionPage from './pages/AddSubscriptionPage/AddSubscriptionPage'

// Component imports
import Header from './components/Header/Header'

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
                    <Router>
                        <Header />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/subscriptions"
                                element={
                                    <ProtectedRoute>
                                        <AddSubscriptionPage />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </Router>
                </SubscriptionsContext.Provider>
            </LoginContext.Provider>
        </div>
    )
}

export default App
