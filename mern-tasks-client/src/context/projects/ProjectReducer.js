import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_ERROR,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR_MSG
} from "../../types";

const ProjectReducer = (state, action) => {
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
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                showForm: false,
                showErrorForm: false,
            };
        case FORM_ERROR:
            return {
                ...state,
                showErrorForm: true,
            };
        case CURRENT_PROJECT:
            return {
                ...state,
                currentProject: state.projects.filter(x => x._id === action.payload)
            };
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(x => x._id !== action.payload),
                currentProject: null
            };
        case PROJECT_ERROR_MSG:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state;
    }
};

export default ProjectReducer;
