import React, { useContext, useEffect } from 'react';
import Project from './Project'
import ProjectContext from '../../context/projects/ProjectContext';
// React transition group
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectList = () => {
    // Contexts
    const projectContext = useContext(ProjectContext);

    // Variables
    // Contexts
    const { projects, getProjects } = projectContext;

    // Getting the projects when this component in loaded
    useEffect(() => {
        getProjects();
    }, []);

    if (projects.length === 0) return <p>There is no Projects</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project.id}
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