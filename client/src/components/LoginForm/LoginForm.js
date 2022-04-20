import './LoginForm.css'

const LoginForm = () => {
    return (
        <form>
            <div className="form-inner">
                <h2 className="login-header">Logga in</h2>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password: </label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="center">
                    <input className="btn" type="submit" value="Logga in" />
                </div>
            </div>
        </form>
    )
}

export default LoginForm
