import './Header.css'

import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContext'
import { useContext } from 'react'

const Header = () => {
    let navigate = useNavigate()

    const { token, setToken } = useContext(LoginContext)

    const goToLogin = () => {
        navigate('/login')
    }

    const goToHome = () => {
        navigate('/')
    }

    const handleLogout = () => {
        setToken(null)
        goToHome()
    }

    return (
        <div className="flex-box">
            <h1 className="header" onClick={goToHome}>
                Mobildeal.se
            </h1>

            {!token ? (
                <button className="login-btn" onClick={goToLogin}>
                    Logga in
                </button>
            ) : (
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            )}
        </div>
    )
}

export default Header
