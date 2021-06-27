import React, { useContext, useEffect } from 'react';
import Project from './Project'
import ProjectContext from '../../context/projects/ProjectContext';
import WarningContext from '../../context/warnings/WarningContext'
// React transition group
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectList = () => {
    // Contexts
    const projectContext = useContext(ProjectContext);
    const warningContext = useContext(WarningContext);

    // Variables
    // Contexts
    const { projects, getProjects, msg } = projectContext;
    const { warning, showWarning } = warningContext;


    // Getting the projects when this component in loaded
    useEffect(() => {
        if (msg) {
            showWarning(msg.msg, msg.category);
        }
        getProjects();
    }, [msg]);

    if (projects.length === 0) return <p>There is no Projects</p>;

    return (
        <ul className="listado-proyectos">
            {
                warning ? (<div className={`alerta ${warning.category}`}>{warning.msg}</div>) : null
            }
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={400}
                        classNames="proyecto"
                    >
                        <Project project={project} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ProjectList;