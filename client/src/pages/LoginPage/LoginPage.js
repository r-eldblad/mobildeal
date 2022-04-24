import React, { useContext } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { LoginContext } from '../../contexts/LoginContext'

const LoginPage = () => {
    const { token } = useContext(LoginContext)

    if (!token) {
        return <LoginForm />
    }
    return <div>Du är redan inloggad.</div>
}

export default LoginPage
