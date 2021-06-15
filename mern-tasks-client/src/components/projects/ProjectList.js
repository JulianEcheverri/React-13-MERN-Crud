import React, { useContext, useEffect } from 'react';
import Project from './Project'
import ProjectContext from '../../context/projects/ProjectContext';

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
            {projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </ul>
    );
}

export default ProjectList;