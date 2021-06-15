import React, { useContext } from 'react';
import ProjectContext from "../../context/projects/ProjectContext";

const TaskForm = () => {
    // Contexts
    // Project form
    const projectContext = useContext(ProjectContext);

    // Variables
    // Project Context
    const { currentProject } = projectContext;
    if (!currentProject) return null;

    // const [currentProjectObj] = currentProject;

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        name="task"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-primario btn-submit"
                        value="Add task"
                    />
                </div>
            </form>
        </div>
    );
}

export default TaskForm;