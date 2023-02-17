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
            title={projectObj.title}
            image={projectObj.projectImg}
            link={projectObj.projectUrl}
            stack={projectObj.stack}
            nature={projectObj.nature}
            duration={projectObj.duration}
            goal={projectObj.goal}
            solution={projectObj.solution}
            features={projectObj.features}
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
