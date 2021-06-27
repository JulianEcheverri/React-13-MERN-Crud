import React, { useReducer } from 'react';
import WarningContext from './WarningContext';
import WarningReducer from './WarningReducer';
import {
    SHOW_WARNING,
    HIDE_WARNING
} from '../../types'

const WarningState = props => {
    const initialState = {
        warning: null
    };

    // Retrieve state and dispatch
    const [state, dispatch] = useReducer(WarningReducer, initialState);

    // Fucntions
    const showWarning = (msg, category) => {
        dispatch({
            type: SHOW_WARNING,
            payload: {
                msg,
                category
            }
        });

        setTimeout(() => {
            dispatch({
                type: HIDE_WARNING,
            });
        }, 5000);
    }

    return (
        <WarningContext.Provider
            value={{
                warning: state.warning,
                showWarning
            }}>
            {props.children}
        </WarningContext.Provider>
    );
}

export default WarningState;