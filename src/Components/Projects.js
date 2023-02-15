
import {React, useState} from 'react'
import './Projects.css';
import Project from './Project';
import monster_archives from './monster_archives.jpeg'
import dnd_vault from './dnd_vault.jpeg'
import species from './species.jpeg'
import marine_life from './marine_life.jpeg'
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const animals = species
const monsters = monster_archives
const vault = dnd_vault
const marine = marine_life


function Projects() {

    const [text, setText] = useState(null)
    const [projects, setProjects] = useState([


    {
        title: "Marine Life",
        projectImg: marine,
        projectUrl: "https://github.com/Laufley/Marine_Life_Group_Project",
        stack: "JavaScript, React, NodeJS, MongoDB, HTML",
        goal: "to teach kids about marine sustainability",
        solution: "We created a learning platform with a quiz adapted to a young audience using our own API",
        duration: "4 days"
    },
    {
        title: "D&D vault",
        projectImg: vault,
        projectUrl: "https://github.com/Laufley/Personal_Project_DnD_Vault",
        stack: "Python, Flask, SQL HTML, CSS",
        goal: "My client (business-owner) needed a website to showcase his new business, which at the same would allow him manage all the bookings between customers and gaming sessions.",
        solution: "I created a whole-in-one comprehensive website solution for my client where his customers can browse sessions and interact with the page to get more info on different topics, and I also added a booking feature for him to manage all the bookings.",
        duration: "6 days"
    },
    {
        title: "Monster archives",
        projectImg: monsters,
        projectUrl: "https://github.com/Laufley/DnD_monster_archives_app",
        stack: "JavaScript, React, HTML, CSS",
        goal: "to train myself on fetching complex and incomplete APIs.",
        solution: "I fetched and displayed data from a public and original Dungeons & Dragons API, created an interactive app for the user, and added music features",
        duration: "3 days"
    },
    {
        title: "Endangered Species",
        projectImg: animals,
        projectUrl: "https://github.com/Laufley/Endangered_animals_DOM_hw_js",
        stack: "JavaScript, React, HTML, CSS",
        goal: "to train myself and interact with the DOM directly without jsx and see how things work on the background.",
        solution: "This is a basic js DOM events handling webapp to input endangered species of animals.",
        duration: "2 days"
    }
    
    ]);


    const listOfProjects = projects.map( (projectObj, index) => {
    return( 
        <>
        <Project key={index}
            image={projectObj.projectImg}
            title={projectObj.title}
            stack={projectObj.stack}
            link={projectObj.projectUrl}>
        </Project>
        </>
        )
    } );

    // const handleQuestion = () => {
    //     console.log("it tickles!")
    //     setText("Want more info about the projects? Just ask!")
    // }



    return (
        <>
        <div id="page-wrapper">
            <div id='nav'>
                <h1>Projects Showcase</h1>
                <Link id='back' to="/"><i className="fa fa-arrow-left"> Back to main page</i> </Link>
            </div>
            <Carousel listOfProjects={listOfProjects}/>
            {/* <div id='text'><h4>{text}</h4>
            <span onClick={handleQuestion}><i className="fa fa-question-circle" id='question-mark'></i></span>
            </div> */}
        </div>
        </>
    
    )
}


export default Projects;
