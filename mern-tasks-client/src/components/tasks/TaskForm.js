import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TaskForm = () => {
    // Contexts
    const projectContext = useContext(ProjectContext);
    // Project context variables
    const { currentProject } = projectContext;

    const taskContext = useContext(TaskContext);
    // Task context variables
    const { taskValidate, showErrorTaskForm, getTasks, addTask, currentTask, updateTask, clearCurrentTask } = taskContext;

    const [task, setTask] = useState({
        name: "",
    });

    // State variables
    const { name } = task;

    // Use effect for checking changes in current tastk
    useEffect(() => {
        if (currentTask !== null) {
            setTask(currentTask);
        }
        else {
            setTask({
                name: ''
            });
        }
    }, [currentTask]);

    if (!currentProject) return null;

    const [currentProjectObj] = currentProject;

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

        // Check for editing or adding
        if (currentTask === null) {
            // Add task to TaskState
            // Setting projectId to task
            task.projectId = currentProjectObj.id;
            task.completed = false;
            addTask(task);
        } else {
            updateTask(task);
            clearCurrentTask();
        }

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
                        value={currentTask ? "Edit Task" : "Add Task"}
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
