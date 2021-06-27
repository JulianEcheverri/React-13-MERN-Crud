import {
    SIGN_IN_SUCCESSFUL,
    ERROR_SIGN_IN,
    GET_USER,
    LOG_IN_SUCCESSFUL,
    ERROR_LOG_IN,
    SIGN_OFF,
} from "../../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESSFUL:
        case LOG_IN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                msg: null,
                loading: false
            };
        case ERROR_SIGN_IN:
        case ERROR_LOG_IN:
        case SIGN_OFF:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                authenticated: null,
                user: null,
                msg: action.payload,
                loading: false
            };
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload.user,
                loading: false
            };
        default:
            return state;
    }
};

export default AuthReducer;