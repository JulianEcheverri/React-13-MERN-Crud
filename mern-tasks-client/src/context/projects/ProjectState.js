import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { 
    FORM_PROJECT,
    GET_PROJECTS
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
        projects: []
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

    return (
        <ProjectContext.Provider
            value={{
                showForm: state.showForm,
                projects: state.projects,
                fnShowForm,
                getProjects
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;