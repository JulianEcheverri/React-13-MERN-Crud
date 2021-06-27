import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import axiosClient from '../../config/axios'
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_ERROR,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR_MSG
} from '../../types'

const ProjectState = props => {
    const initialState = {
        showForm: false,
        showErrorForm: false,
        projects: [],
        currentProject: null,
        msg: null
    };

    // Dispatch for executing the actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // CRUD functions
    // For showing the New Project form
    const fnShowForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    };

    // Getting the projects from source (database)
    const getProjects = async () => {
        try {
            const response = await axiosClient.get('/api/projects');
            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects
            });
        } catch (error) {
            console.log(error);
            const warning = {
                msg: 'Cannot get projects',
                category: 'alerta-error'
            };
            dispatch({
                type: PROJECT_ERROR_MSG,
                payload: warning
            });
        }
    }

    // Add new project
    const addProject = async (project) => {
        try {
            const response = await axiosClient.post('/api/projects', project);
            dispatch({
                type: ADD_PROJECT,
                payload: response.data.project
            });
        } catch (error) {
            console.log(error);
            const warning = {
                msg: 'Cannot create project',
                category: 'alerta-error'
            };
            dispatch({
                type: PROJECT_ERROR_MSG,
                payload: warning
            });
        }
    };

    // Form error validation
    const fnShowFormError = () => {
        dispatch({
            type: FORM_ERROR,
        });
    };

    // For showing the selected project in the main
    const setCurrentProject = (id) => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: id
        });
    }

    // Delete project
    const deleteProject = async (id) => {
        try {
            const response = await axiosClient.delete(`/api/projects/${id}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: id
            });
        } catch (error) {
            console.log(error);
            const warning = {
                msg: 'Cannot delete project',
                category: 'alerta-error'
            };
            dispatch({
                type: PROJECT_ERROR_MSG,
                payload: warning
            });
        }
    };

    return (
        <ProjectContext.Provider
            value={{
                showForm: state.showForm,
                showErrorForm: state.showErrorForm,
                projects: state.projects,
                currentProject: state.currentProject,
                msg: state.msg,
                fnShowForm,
                getProjects,
                addProject,
                fnShowFormError,
                setCurrentProject,
                deleteProject
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;