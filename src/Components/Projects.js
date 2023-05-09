import {React} from 'react'
import './Projects.css';
import Project from './Project';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

function Projects({projects}) {


    const listOfProjects = projects.map( (projectObj, index) => {
    return( 
        <>
        <Project id={index}
            title={projectObj.title}
            image={projectObj.projectImg}
            github_link={projectObj.github_link}
            demo={projectObj.demo_link}
            stack={projectObj.stack}
            nature={projectObj.nature}
            duration={projectObj.duration}
            info={projectObj.info}
            challenge={projectObj.challenge}
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
                <Link id='back' to="/portfolio"><i className="fa fa-arrow-left"> Back to main page</i> </Link>
            </div>
            <Carousel listOfProjects={listOfProjects}/>
            {/* <ProjectByIdPage projects={projects}/> */}
        </div>
        </>
    
    )
}


export default Projects;
