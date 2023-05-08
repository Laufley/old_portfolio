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
            <p id='individual-stack'><b style={{color : '#00f0a8' }} >Stack: </b>&nbsp;{project.stack}</p>
            <p id='individual-nature'><b style={{color : '#00f0a8'}}>Nature:</b>&nbsp;{project.nature} </p>
            <p id='individual-duration'><b style={{ color : '#00f0a8'}} >Duration: </b>&nbsp;{project.duration}</p>
            <p id='individual-info'><b style={{ color : '#00f0a8'}}>info:</b>&nbsp;{project.info}</p>
            <p id='individual-challenge'><b style={{ color : '#00f0a8'}}>Challenge</b>&nbsp;{project.challenge}</p>
            <p id='individual-solution'><b style={{color : '#00f0a8'}} >Solution:</b>&nbsp;{project.solution}</p>
            <p id='individual-feature'><b style={{color : '#00f0a8'}} >Features:</b>&nbsp;{project.features}</p>
            <a id='individual-github-link' href={project.github_link} style={{marginLeft:'20rem', fontSize:'1.7rem'}} >GitHub link</a>
            <a id='individual-demo-link' href={project.demo_link} style={{marginLeft:'35rem', fontSize:'1.7rem'}} >Demo link</a>
        </div>
        </div>
    )}
}

export default ProjectByIdPage;






