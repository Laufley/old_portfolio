import {React, useState} from 'react'
import './Projects.css';
import Project from './Project';
import monster_archives from './monster_archives.jpeg'
import dnd_vault from './dnd_vault.jpeg'
import species from './species.jpeg'
import { Link } from 'react-router-dom';

const animals = species
const monsters = monster_archives
const vault = dnd_vault

function Projects() {

    const [projects, setProjects] = useState([
    {
        title: "D&D vault",
        projectImg: vault,
        projectUrl: "https://github.com/Laufley/Personal_Project_DnD_Vault",
        stack: "Pyhon, Flask, SQL HTML, CSS",
        request: "My client (business-owner) needed a website to showcase his new business, which at the same would allow him manage all the bookings between customers and gaming sessions.",
        solution: "I created a whole-in-one comprehensive website solution for my client where his customers can browse sessions and interact with the page to get more info on different topics, and I also added a booking feature for him to manage all the bookings."
    },
    {
        title: "Monster archives",
        projectImg: monsters,
        projectUrl: "https://github.com/Laufley/DnD_monster_archives_app",
        stack: "JavaScript, React, HTML, CSS",
        request: "to train myself on fetching complex and incomplete APIs.",
        solution: "I fetched and displayed data from a public and original Dungeons & Dragons API, created an interactive app for the user, and added music features",
    },
    {
        title: "Endangered Species",
        projectImg: animals,
        projectUrl: "https://github.com/Laufley/Endangered_animals_DOM_hw_js",
        stack: "JavaScript, React, HTML, CSS",
        request: "to train myself and interact with the DOM directly without jsx and see how things work on the background.",
        solution: "This is a basic js DOM events handling webapp to input endangered species of animals.",
    }

    ]);

    const listOfPojects = projects.map( (projectObj, index) => {
    return( 
        <>
        <Project key={index}
            image={projectObj.projectImg}
            title={projectObj.title}
            stack={projectObj.stack}>
        </Project>
        </>
        )
    } );

    return (
        <>
        <div id="page-wrapper">
            <div id='nav'>
                <h1>Projects Showcase</h1>
                <Link to="/">Back to main page</Link>
            </div>
            <div class="carousel">
                <ul>{listOfPojects}</ul>
            </div>
        </div>
        </>
    
    )

}

export default Projects;