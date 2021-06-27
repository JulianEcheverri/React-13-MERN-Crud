import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
import {
    SIGN_IN_SUCCESSFUL,
    ERROR_SIGN_IN,
    GET_USER,
    LOG_IN_SUCCESSFUL,
    ERROR_LOG_IN,
    SIGN_OFF
} from '../../types'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        msg: null,
        loading: true
    };

    // Retrieve state and dispatch
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Fucntions
    const signInUser = async (userData) => {
        try {
            const response = await axiosClient.post('/api/users', userData);
            dispatch({
                type: SIGN_IN_SUCCESSFUL,
                payload: response.data
            });
            getUserAuthenticated();
        } catch (error) {
            const warning = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            };

            dispatch({
                type: ERROR_SIGN_IN,
                payload: warning
            });
        }
    };

    const getUserAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
        try {
            const response = await axiosClient.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: ERROR_SIGN_IN,
                //payload: warning
            });
        }
    }

    const logInUser = async (datos) => {
        try {
            const response = await axiosClient.post('/api/auth', datos);
            dispatch({
                type: LOG_IN_SUCCESSFUL,
                payload: response.data
            });
            getUserAuthenticated();
        } catch (error) {
            const warning = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            };

            dispatch({
                type: ERROR_LOG_IN,
                payload: warning
            });
        }
    }

    const signOffUser = async () => {
        dispatch({
            type: SIGN_OFF,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                msg: state.msg,
                loading: state.loading,
                signInUser,
                logInUser,
                getUserAuthenticated,
                signOffUser
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;