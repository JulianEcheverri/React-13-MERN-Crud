import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import WarningContext from "../../context/warnings/WarningContext";
import AuthContext from "../../context/auth/AuthContext";

const NewAccount = (props) => {
    // Contexts
    const warningContext = useContext(WarningContext);
    const { warning, showWarning } = warningContext;
    const authContext = useContext(AuthContext);
    const { signInUser, authenticated, msg } = authContext;

    // Validate user repeated
    useEffect(() => {
        if (authenticated) {
            props.history.push('/projects');
        }
        if (msg) {
            showWarning(msg.msg, msg.category);
        }
        // eslint-disable-next-line
    }, [msg, authenticated, props.history]);

    // States
    // New Account
    const [user, saveUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
    });

    // Variables
    const { name, email, password, confirm } = user;

    // Functions
    const onChangeNewAccountForm = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // Form validation
        if (
            name.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirm.trim() === ""
        ) {
            showWarning("All fields are required", "alerta-error");
            return;
        }

        if (password.length < 6) {
            showWarning("Password length should be at least 6 characters", "alerta-error");
            return;
        }

        if (password !== confirm) {
            showWarning("Confirm Password does not match", "alerta-error");
            return;
        }

        signInUser({
            name,
            email,
            password
        });
    };

    return (
        <div className="form-usuario">
            {warning ? (
                <div className={`alerta ${warning.category}`}> {warning.msg} </div>
            ) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Create an Account</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={onChangeNewAccountForm}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={onChangeNewAccountForm}
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
                            onChange={onChangeNewAccountForm}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm Password"
                            value={confirm}
                            onChange={onChangeNewAccountForm}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Create an Account"
                        />
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">
                    Log In
                </Link>
            </div>
        </div>
    );
};

export default NewAccount;
