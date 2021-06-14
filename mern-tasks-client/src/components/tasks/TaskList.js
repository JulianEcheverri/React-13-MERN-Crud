import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = () => {
    const tasks = [
        { name: 'Elegir plataforma', completed: true },
        { name: 'Elegir colores', completed: false },
        { name: 'Elegir plataformas de pago', completed: false },
        { name: 'Elegir hosting', completed: true },
    ];

    return (
        <Fragment>
            <h2>Project: Tienda virtual</h2>
            <ul className="listado-tareas">
                {tasks.length === 0 ? (
                    <li>There is no tasks</li>
                ) : (
                    tasks.map((task) => <Task task={task} />)
                )}
            </ul>
            <button type="button" className="btn btn-eliminar">
                Delete project &times;
            </button>
        </Fragment>
    );
};

export default TaskList;
