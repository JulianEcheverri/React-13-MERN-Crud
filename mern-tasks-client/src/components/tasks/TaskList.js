import React, { Fragment, useContext } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/ProjectContext";
import TaskContext from "../../context/tasks/TaskContext";
// React transition group
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = () => {
    // Contexts
    const projectContext = useContext(ProjectContext);
    // Tasks
    const taskContext = useContext(TaskContext);

    // Variables
    // Project Context
    const { currentProject, deleteProject } = projectContext;
    if (!currentProject) return <h2>Select a Project</h2>;

    const [currentProjectObj] = currentProject;
    // Tasks Context
    const { taskFromProject } = taskContext;

    // Functions
    // Deletes a project
    const onDeleteProject = () => {
        deleteProject(currentProjectObj._id);
    };

    return (
        <Fragment>
            <h2>Project: {currentProjectObj.name}</h2>
            <ul className="listado-tareas">
                {taskFromProject.length === 0 ? (
                    <li>There is no tasks</li>
                ) : (
                    <TransitionGroup>
                        {taskFromProject.map((task) => (
                            <CSSTransition
                                key={task.id}
                                timeout={400}
                                classNames="tarea"
                            >
                                <Task task={task} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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
