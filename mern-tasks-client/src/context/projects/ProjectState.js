import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    FORM_ERROR,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from '../../types'

const ProjectState = props => {
    // "projects" array will be replaced with data from database
    const projects = [
        { id: 1, name: 'Tienda virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Disenio de sitio web' }
    ];

    const initialState = {
        showForm: false,
        showErrorForm: false,
        projects: [],
        currentProject: null
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
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    }

    // Add new project
    const addProject = (project) => {
        project.id = uuidv4();
        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
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
    const deleteProject = (id) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        });
    };

    return (
        <ProjectContext.Provider
            value={{
                showForm: state.showForm,
                showErrorForm: state.showErrorForm,
                projects: state.projects,
                currentProject: state.currentProject,
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