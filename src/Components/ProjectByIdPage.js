import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectByIdPage = ({ projects }) => {

    const {id} = useParams()

        if (id >= projects.length) {
            return "error"
        }
        else {
    
    const project = projects[id]
    
    return ( project &&
        <div>
            <h2>{project.title}</h2>
            <img src={project.projectImg} alt={`${project.title} project`} />
            <p>{project.stack}</p>
            <p>{project.goal}</p>
            <p>{project.solution}</p>
            <p>{project.duration}</p>
            <a href={project.projectUrl}>GitHub link</a>
        </div>
    )}
}

export default ProjectByIdPage;


