import React, { Fragment, useState } from 'react';

const NewProject = () => {
    //States
    // New project
    const [project, saveProject] = useState({
        name: ''
    });

    // Variables
    const { name } = project;

    // Functions
    const onChangeProjectForm = (e) => {
        saveProject({
            ...project,
            [e.target.name]: [e.target.value]
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // Form validation

        // Add to state

        // Clear the form

    };


    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                New project
            </button>
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmit}
            >
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
        </Fragment>
    );
}

export default NewProject;