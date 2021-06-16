import React, { useContext } from 'react';
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Project = ({ project }) => {
    // Contexts
    // Project form
    const projectContext = useContext(ProjectContext);
    // Tasks
    const taskContext = useContext(TaskContext);

    // Variables
    // Project Context
    const { setCurrentProject } = projectContext;
    // Tasks Context
    const { getTasks } = taskContext;

    // Functions
    // To set the current project on the UI and retrieve their tasks
    const onSelectCurrentProject = (id) => {
        setCurrentProject(id);
        getTasks(id);
    }

    return (
        <li>
            <button 
                type="button" 
                className="btn btn-blank"
                onClick={() => onSelectCurrentProject(project.id)}
                >
                {project.name}
            </button>
        </li>
    );
}

export default Project;