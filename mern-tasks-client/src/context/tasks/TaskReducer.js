import {
    TASK_PROJECT,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK,
    COMPLETED_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAR_TASK
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
                tasks: [action.payload, ...state.tasks],
                showErrorTaskForm: false,
            };
        case TASK_FORM_ERROR:
            return {
                ...state,
                showErrorTaskForm: true,
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((x) => x.id !== action.payload),
            };
        case COMPLETED_TASK:
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload,
            };
        case CLEAR_TASK:
            return {
                ...state,
                currentTask: null,
            };
        default:
            return state;
    }
};
