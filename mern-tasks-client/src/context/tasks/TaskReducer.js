import {
    TASK_PROJECT,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAR_TASK
} from "../../types";

const TaskReducer = (state, action) => {
    switch (action.type) {
        case TASK_PROJECT:
            return {
                ...state,
                tasksFromProject: action.payload
            };
        case ADD_TASK:
            return {
                ...state,
                tasksFromProject: [action.payload, ...state.tasksFromProject],
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
                tasksFromProject: state.tasksFromProject.filter((x) => x._id !== action.payload),
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasksFromProject: state.tasksFromProject.map((task) =>
                    task._id === action.payload._id ? action.payload : task
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

export default TaskReducer;
