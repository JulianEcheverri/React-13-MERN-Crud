import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {
    TASK_PROJECT
} from '../../types'

const TaskState = props => {
    // "tasks" array will be replaced with data from database
    const tasks = [
        { name: 'Elegir plataforma', completed: true, projectId: 1 },
        { name: 'Elegir colores', completed: false, projectId: 2 },
        { name: 'Elegir plataformas de pago', completed: false, projectId: 3 },
        { name: 'Elegir hosting', completed: true, projectId: 4 },
        { name: 'Elegir plataforma', completed: true, projectId: 4 },
        { name: 'Elegir colores', completed: false, projectId: 3 },
        { name: 'Elegir colores', completed: false, projectId: 1 },
        { name: 'Elegir plataformas de pago', completed: false, projectId: 2 },
        { name: 'Elegir plataformas de pago', completed: false, projectId: 1 },
        { name: 'Elegir hosting', completed: true, projectId: 1 },
    ];

    const initialState = {
        tasks: tasks,
        taskFromProject: null
    }

    // Retrieve state and dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Functions
    const getTasks = (projectId) => {
        dispatch({
            type: TASK_PROJECT,
            payload: projectId
        });
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                taskFromProject: state.taskFromProject,
                getTasks
            }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskState;