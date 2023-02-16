import {React, useState} from 'react'
import './Projects.css';
import Project from './Project';

import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import ProjectByIdPage from './ProjectByIdPage';




function Projects({projects}) {

    const [selectedProjectId, setSelectedProjectId] = useState(null)


    const listOfProjects = projects.map( (projectObj, index) => {
    return( 
        <>
        <Project id={index}
            image={projectObj.projectImg}
            title={projectObj.title}
            stack={projectObj.stack}
            link={projectObj.projectUrl}
            goal={projectObj.goal}
            solution={projectObj.solution}
            duration={projectObj.duration}
            />
        </>
        )
    } );   



    return (
        <>
        <div id="page-wrapper">
            <div id='nav'>
                <h1>Projects Showcase</h1>
                <Link id='back' to="/"><i className="fa fa-arrow-left"> Back to main page</i> </Link>
            </div>
            <Carousel listOfProjects={listOfProjects}/>
            {/* <ProjectByIdPage projects={projects}/> */}
        </div>
        </>
    
    )
}


export default Projects;
