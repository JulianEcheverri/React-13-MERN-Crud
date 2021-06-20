import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {
    TASK_PROJECT,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK
} from '../../types'

const TaskState = props => {
    // "tasks" array will be replaced with data from database
    const tasks = [
        { id: 1, name: 'Elegir plataforma', completed: true, projectId: 1 },
        { id: 2, name: 'Elegir colores', completed: false, projectId: 2 },
        { id: 3, name: 'Elegir plataformas de pago', completed: false, projectId: 3 },
        { id: 4, name: 'Elegir hosting', completed: true, projectId: 4 },
        { id: 5, name: 'Elegir plataforma', completed: true, projectId: 4 },
        { id: 6, name: 'Elid:1, egir colores', completed: false, projectId: 3 },
        { id: 7, name: 'Elegir colores', completed: false, projectId: 1 },
        { id: 8, name: 'Elegir plataformas de pago', completed: false, projectId: 2 },
        { id: 9, name: 'Elegir plataformas de pago', completed: false, projectId: 1 },
        { id: 10, name: 'Elegir hosting', completed: true, projectId: 1 },
    ];

    const initialState = {
        tasks: tasks,
        taskFromProject: null,
        showErrorTaskForm: false,
    };

    // Retrieve state and dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Functions
    const getTasks = (projectId) => {
        dispatch({
            type: TASK_PROJECT,
            payload: projectId
        });
    };

    // Add task to the selected project
    const addTask = (task) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        });
    };

    // Validates and shows an error
    const taskValidate = () => {
        dispatch({
            type: TASK_FORM_ERROR
        });
    };

    const deleteTask = (id) => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    };

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                taskFromProject: state.taskFromProject,
                showErrorTaskForm: state.showErrorTaskForm,
                getTasks,
                addTask,
                taskValidate,
                deleteTask
            }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskState;