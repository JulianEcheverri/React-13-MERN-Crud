import React, { useContext } from 'react';
import TaskContext from '../../context/tasks/TaskContext';
import ProjectContext from '../../context/projects/ProjectContext';

const Task = ({ task }) => {
    // Context
    // Task context
    const taskContext = useContext(TaskContext);
    // Project context
    const projectContext = useContext(ProjectContext);

    // Variables
    const { currentProject } = projectContext;
    if (!currentProject) return null;

    const [currentProjectObj] = currentProject;
    const { deleteTask, getTasks } = taskContext;

    // Functions
    // Delete task
    const onDeleteTask = (id) => {
        deleteTask(id);
        getTasks(currentProjectObj.id);
    };

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.completed ? (
                    <button type="button" className="completo">
                        Completed
                    </button>
                ) : (
                    <button type="button" className="incompleto">
                        Incompleted
                    </button>
                )}
            </div>
            <div className="acciones">
                <button className="btn btn-primario" type="button">
                    Edit
                </button>
                <button
                    onClick={() => onDeleteTask(task.id)}
                    className="btn btn-secundario"
                    type="button"
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Task;
