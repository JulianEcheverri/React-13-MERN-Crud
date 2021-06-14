import React from 'react';
import Sidebar from '../layout/Sidebar';
import AccountBar from '../layout/AccountBar';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';

const Projects = () => {
    return (
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <AccountBar />
                <main>
                    <TaskForm />
                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;