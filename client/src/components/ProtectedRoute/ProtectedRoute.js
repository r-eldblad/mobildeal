import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../contexts/LoginContext'

const ProtectedRoute = ({ children }) => {
    const { token } = useContext(LoginContext)

    return token ? children : <Navigate to="/" />
}

export default ProtectedRoute
