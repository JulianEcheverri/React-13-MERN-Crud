import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../context/projects/ProjectContext";

const NewProject = () => {
    //States
    // Project
    const [project, saveProject] = useState({
        name: "",
    });

    // Contexts
    // Project form
    const projectContext = useContext(ProjectContext);

    // Variables
    // Project State
    const { name } = project;
    // Project Context
    const { showForm, showErrorForm, fnShowForm, addProject, fnShowFormError } =
        projectContext;

    // Functions
    const onChangeProjectForm = (e) => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if (name.trim() === "") {
            fnShowFormError();
            return;
        }

        // Add to state
        addProject(project);

        // Clear the form
        saveProject({
            name: "",
        });
    };

    const onClickNewProject = () => {
        fnShowForm();
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickNewProject}
            >
                New project
            </button>
            {showForm ? (
                <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Project name"
                        name="name"
                        value={name}
                        onChange={onChangeProjectForm}
                    />
                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Add project"
                    />
                </form>
            ) : null}

            {showErrorForm ? (
                <p className="mensaje error">Please type a Project Name</p>
            ) : null}
        </Fragment>
    );
};

export default NewProject;
