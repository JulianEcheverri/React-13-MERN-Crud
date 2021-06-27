import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import AccountBar from '../layout/AccountBar';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';
import AuthContext from '../../context/auth/AuthContext';

const Projects = () => {
    const authContext = useContext(AuthContext);
    const { getUserAuthenticated } = authContext;

    useEffect(() => {
        getUserAuthenticated();
        // eslint-disable-next-line
    }, []);

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