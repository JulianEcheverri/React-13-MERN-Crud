import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import axiosClient from '../../config/axios';
import {
    TASK_PROJECT,
    ADD_TASK,
    TASK_FORM_ERROR,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAR_TASK
} from '../../types'

const TaskState = props => {
    const initialState = {
        tasksFromProject: [],
        showErrorTaskForm: false,
        currentTask: null
    };

    // Retrieve state and dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Functions
    const getTasks = async (projectId) => {
        try {
            const response = await axiosClient.get('/api/tasks', { params: { projectId } });
            dispatch({
                type: TASK_PROJECT,
                payload: response.data.tasks
            });
        } catch (error) {
            console.log(error);
        }
    };

    // Add task to the selected project
    const addTask = async (task) => {
        try {
            const response = await axiosClient.post('/api/tasks', task);
            dispatch({
                type: ADD_TASK,
                payload: response.data.task
            });
        } catch (error) {
            console.log(error);
        }
    };

    const updateTask = async (task) => {
        try {
            const response = await axiosClient.put(`/api/tasks/${task._id}`, task);
            dispatch({
                type: UPDATE_TASK,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };

    // Validates and shows an error
    const taskValidate = () => {
        dispatch({
            type: TASK_FORM_ERROR
        });
    };

    const deleteTask = async (id, projectId) => {
        try {
            await axiosClient.delete(`/api/tasks/${id}`, { params: { projectId } });
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    };



    const setCurrentTask = (task) => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        });
    };

    const clearCurrentTask = () => {
        dispatch({
            type: CLEAR_TASK
        });
    };

    return (
        <TaskContext.Provider
            value={{
                tasksFromProject: state.tasksFromProject,
                showErrorTaskForm: state.showErrorTaskForm,
                currentTask: state.currentTask,
                getTasks,
                addTask,
                taskValidate,
                deleteTask,
                setCurrentTask,
                updateTask,
                clearCurrentTask
            }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskState;