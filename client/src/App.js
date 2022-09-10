import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useState } from 'react'
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
import { FilteredSubscriptionsContext } from './contexts/FilteredSubscriptionsContext'
import { OperatorsContext } from './contexts/OperatorsContext'

import React from 'react'

const App = () => {
    const [token, setToken] = useState(null)
    const [subscriptions, setSubscriptions] = useState([])
    const [filteredSubscriptions, setFilteredSubscriptions] = useState()
    const [operators, setOperators] = useState([])

    return (
        <React.StrictMode>
            <div className="container">
                <OperatorsContext.Provider value={{ operators, setOperators }}>
                    <LoginContext.Provider value={{ token, setToken }}>
                        <SubscriptionsContext.Provider value={{ subscriptions, setSubscriptions }}>
                            <FilteredSubscriptionsContext.Provider
                                value={{ filteredSubscriptions, setFilteredSubscriptions }}
                            >
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
                            </FilteredSubscriptionsContext.Provider>
                        </SubscriptionsContext.Provider>
                    </LoginContext.Provider>
                </OperatorsContext.Provider>
            </div>
        </React.StrictMode>
    )
}

export default App
