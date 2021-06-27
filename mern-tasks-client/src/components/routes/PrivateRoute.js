import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

// Higher order component
const PrivateRoute = ({ component: Component, ...props }) => {
    const authContext = useContext(AuthContext);
    const { authenticated, getUserAuthenticated, loading } = authContext;

    useEffect(() => {
        getUserAuthenticated();
    }, []);

    return (
        <Route
            {...props}
            render={props => !authenticated && !loading ? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            )}
        />
    );
}

export default PrivateRoute;

