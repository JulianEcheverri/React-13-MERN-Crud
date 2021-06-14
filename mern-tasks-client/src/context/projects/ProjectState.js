import React, {useReducer} from 'react';
import ProjectContext from './ProjectContext'
import ProjectReducer from './ProjectReducer'

const ProjectState = props => {
    const initialState = {
        form: false
    };

    // Dispatch for executing the actions
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // CRUD functions

    return (
        <ProjectContext.Provider value={{ form: state.form }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;