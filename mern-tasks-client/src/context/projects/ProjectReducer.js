import {
    FORM_PROJECT,
    GET_PROJECTS
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                showForm: true,
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
            };
        default:
            return state;
    }
};
