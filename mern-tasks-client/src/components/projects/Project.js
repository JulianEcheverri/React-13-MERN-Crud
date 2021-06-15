import React, { useContext } from 'react';
import ProjectContext from "../../context/projects/ProjectContext";

const Project = ({ project }) => {
    // Contexts
    // Project form
    const projectContext = useContext(ProjectContext);

    // Variables
    // Project Context
    const { setCurrentProject } = projectContext;

    return (
        <li>
            <button 
                type="button" 
                className="btn btn-blank"
                onClick={() => setCurrentProject(project.id)}
                >
                {project.name}
            </button>
        </li>
    );
}

export default Project;