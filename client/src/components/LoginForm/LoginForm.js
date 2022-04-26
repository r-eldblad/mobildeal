import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginContext } from '../../contexts/LoginContext'
import './LoginForm.css'

import axios from 'axios'

const LoginForm = () => {
    const { setToken } = useContext(LoginContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { email, password }
        console.log(user)

        axios
            .post(process.env.REACT_APP_LOGIN_URL, user)
            .then((response) => {
                setToken(response.data)
                navigate('/subscriptions')
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-inner">
                <h2 className="login-header">Logga in</h2>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="center">
                    <button type="submit">Logga in</button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
