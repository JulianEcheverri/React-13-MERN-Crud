import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const AccountBar = () => {
    const authContext = useContext(AuthContext);
    const { getUserAuthenticated, user, signOffUser } = authContext;

    useEffect(() => {
        getUserAuthenticated();
        // eslint-disable-next-line
    }, []);

    return (
        <header className="app-header">
            {
                user ? <p className="nombre-usuario">Hello <span>{user.name}</span></p> : null
            }
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => signOffUser()}
                >
                    Log Out
                </button>
            </nav>
        </header>
    );
}

export default AccountBar;