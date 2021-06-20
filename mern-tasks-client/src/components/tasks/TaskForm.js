import React, { useContext, useState } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TaskForm = () => {
    // Contexts
    const projectContext = useContext(ProjectContext);
    const taskContext = useContext(TaskContext);

    // States
    // Form state
    const [task, setTask] = useState({
        name: "",
    });

    // Variables
    // Project Context
    const { currentProject } = projectContext;
    if (!currentProject) return null;

    const [currentProjectObj] = currentProject;
    const { name } = task;
    const { addTask } = taskContext;
    const { taskValidate, showErrorTaskForm, getTasks } = taskContext;

    const onChangeTask = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    // Functions
    // Add tasks
    const onSubmitTask = (e) => {
        e.preventDefault();

        // Validate
        if (name.trim() === "") {
            taskValidate();
            return;
        }

        // Add task to TaskState
        // Setting projectId to task
        task.projectId = currentProjectObj.id;
        task.completed = false;
        addTask(task);

        //Clear form
        setTask({
            name: ''
        });

        // Retrieve the task after adding a new task
        getTasks(currentProjectObj.id);
    };

    return (
        <div className="formulario">
            <form onSubmit={onSubmitTask}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        name="name"
                        onChange={onChangeTask}
                        value={name}
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
            {showErrorTaskForm ? (
                <p className="mensaje error">Please type a Task Name</p>
            ) : null}
        </div>
    );
};

export default TaskForm;
