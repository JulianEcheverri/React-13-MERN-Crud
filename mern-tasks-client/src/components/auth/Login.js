import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    // States
    // Log In
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    // Variables
    const { email, password } = user;

    // Functions
    const onChangeLoginForm = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // Form validation


    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Log In</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={onChangeLoginForm}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChangeLoginForm}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Log In"
                        />
                    </div>
                </form>
                <Link to={'/new-account'} className="enlace-cuenta">
                    Create an Account
                </Link>
            </div>
        </div>
    );
}

export default Login;