import './Header.css'

import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../../contexts/LoginContext'
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

    const goToControlPanel = () => {
        navigate('/subscriptions')
    }

    const handleLogout = () => {
        setToken(null)
        goToLogin()
    }

    return (
        <div className="flex-box">
            <h1 className="header" onClick={goToHome}>
                Mobildeal.se
            </h1>

            {token ? (
                <div className="auth-buttons">
                    <button className="control-panel" onClick={goToControlPanel}>
                        Kontrollpanel
                    </button>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logga ut
                    </button>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Header
