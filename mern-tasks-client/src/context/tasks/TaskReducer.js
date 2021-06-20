import {
    TASK_PROJECT,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case TASK_PROJECT:
            return {
                ...state,
                taskFromProject: state.tasks.filter(
                    (x) => x.projectId === action.payload
                ),
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                showErrorTaskForm: false
            };
        case TASK_FORM_ERROR:
            return {
                ...state,
                showErrorTaskForm: true
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(
                    (x) => x.id !== action.payload
                )
            };
        default:
            return state;
    }
};
