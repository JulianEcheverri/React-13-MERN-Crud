import {
    SHOW_WARNING,
    HIDE_WARNING
} from '../../types'

const WarningReducer = (state, action) => {
    switch (action.type) {
        case SHOW_WARNING:
            return {
                warning: action.payload
            }
        case HIDE_WARNING:
            return {
                warning: null
            }
        default:
            return state;
    }
};

export default WarningReducer;