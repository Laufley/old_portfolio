import React from 'react'
import './ProjectById.css';
import { Link, useParams } from 'react-router-dom'

const ProjectByIdPage = ({ projects }) => {

    const {id} = useParams()

        if (id >= projects.length) {
            return "error"
        }
        else {
    
    const project = projects[id]
    
    return ( project &&
        <div id='project-by-page-nav'>
            <h1 id='individual-title'>{project.title}</h1>
            <Link id='individual-back' to="/projects"><i className="fa fa-arrow-left"> Back to projects showcase</i> </Link>
        <div id='content-background'>
            <img id='individual-img'src={project.projectImg}/>
            <p id='individual-stack'><b>Stack:</b> {project.stack}</p>
            <p id='individual-nature'><b>Nature:</b> {project.nature}</p>
            <p id='individual-duration'><b>Duration:</b> {project.duration}</p>
            <p id='individual-goal'><b>Project Goal:</b> {project.goal}</p>
            <p id='individual-solution'><b>Solution:</b> {project.solution}</p>
            <p id='individual-feature'><b>Features:</b>{project.features}</p>
            <a id='individual-github-link' href={project.projectUrl}><b>GitHub link</b></a>
        </div>
        </div>
    )}
}

export default ProjectByIdPage;






