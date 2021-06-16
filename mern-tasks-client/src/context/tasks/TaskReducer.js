import {
    TASK_PROJECT
} from "../../types";

export default (state, action) => {
    switch (action.type) {
        case TASK_PROJECT:
            return {
                ...state,
                taskFromProject: state.tasks.filter(x => x.projectId === action.payload)
            };
        default:
            return state;
    }
}