import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value 

        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset();
        })
        .catch(error => console.error(error))
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p>New to ema john? <Link to='/signup'>Create an account</Link></p>
        </div>
    );
};

export default Login;