import { useNavigate } from 'react-router-dom'

const Header = () => {
    let navigate = useNavigate()

    const routeChange = () => {
        navigate('/login')
    }

    return (
        <div className="flex-box">
            <h1 className="header">Mobildeal.se</h1>
            <button className="login-btn" onClick={routeChange}>
                Logga in
            </button>
        </div>
    )
}

export default Header
