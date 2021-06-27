import {
    SING_IN_SUCCESSFUL,
    ERROR_SING_IN,
    GET_USER,
    LOG_IN_SUCCESSFUL,
    ERROR_LOG_IN,
    SING_OFF,
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case SING_IN_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                msg: null
            };
        case ERROR_SING_IN:
            return {
                ...state,
                token: null,
                msg: action.payload
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload.user
            };
        case LOG_IN_SUCCESSFUL:
            return {
                warning: action.payload,
            };
        case ERROR_LOG_IN:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                msg: action.payload
            };
        case SING_OFF:
            return {
                warning: action.payload,
            };
        default:
            return state;
    }
};
