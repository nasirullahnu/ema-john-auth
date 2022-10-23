import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState(null)
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)


        if(password.length < 3){
            setError('password must be minimum 6 character long')
            // alert('password should be 6 minimum character long')
            return;
        }

        if(password !== confirm){
            setError('your password did not match')
            // alert('password did not match')
            return
        }

        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password" name='confirm' required />
                </div>
                <input className='btn-submit' type="submit" value='Register' />
            </form>
            <p>Already have an account?? <Link to='/login'>Login</Link></p>
            <p className='password-error'>{error}</p>
        </div>
    );
};

export default Signup;