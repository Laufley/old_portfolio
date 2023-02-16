import {React, useState} from 'react';
import './App.css';
import Home from './Containers/Home'
import Personal from './Components/Personal'
import Projects from './Components/Projects'
import CV from './Components/CV'
import ErrorPage from './Components/ErrorPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProjectByIdPage from './Components/ProjectByIdPage';
import monster_archives from './Components/helpers/monster_archives.jpeg'
import dnd_vault from './Components/helpers/dnd_vault.jpeg'
import species from './Components/helpers/species.jpeg'
import marine_life from './Components/helpers/marine_life.jpeg'


const animals = species
const monsters = monster_archives
const vault = dnd_vault
const marine = marine_life

function App() {

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

  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route exact path='/portfolio' element={<Home/>}> </Route>
      <Route exact path='/home' element={<Home/>}> </Route>
      <Route path='/Personal' element={<Personal/>}></Route>
      <Route path='/Projects' element={<Projects projects={projects}/>}></Route>
      <Route path='/Projects/:id' element={<ProjectByIdPage projects={projects}/>}></Route>
      <Route path='CV' element={<CV/>}></Route>
      <Route path="*" element={< ErrorPage />}/>
    </Routes>
  </Router>
  )
}

export default App;





