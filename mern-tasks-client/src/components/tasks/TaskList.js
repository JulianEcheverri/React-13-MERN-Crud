import React, { Fragment, useContext } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/ProjectContext";

const TaskList = () => {
    // Contexts
    // Project form
    const projectContext = useContext(ProjectContext);

    // Variables
    // Project Context
    const { currentProject, deleteProject } = projectContext;
    if (!currentProject)
        return <h2>Select a Project</h2>;

    const [currentProjectObj] = currentProject;
    const tasks = [
        { name: 'Elegir plataforma', completed: true },
        { name: 'Elegir colores', completed: false },
        { name: 'Elegir plataformas de pago', completed: false },
        { name: 'Elegir hosting', completed: true },
    ];

    // Functions
    // Deletes a project
    const onDeleteProject = () => {
        deleteProject(currentProjectObj.id);
    }

    return (
        <Fragment>
            <h2>Project: {currentProjectObj.name}</h2>
            <ul className="listado-tareas">
                {tasks.length === 0 ? (
                    <li>There is no tasks</li>
                ) : (
                    tasks.map((task) => <Task task={task} />)
                )}
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onDeleteProject}
            >
                Delete project &times;
            </button>
        </Fragment>
    );
};

export default TaskList;
