import React from "react";

const Task = ({ task }) => {
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
                <button className="btn btn-primario" type="button">Edit</button>
                <button className="btn btn-secundario" type="button">Delete</button>
            </div>
        </li>
    );
};

export default Task;
