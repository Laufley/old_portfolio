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
        nature: "team project",
        duration: "4 days",
        goal: "to teach kids about marine sustainability",
        solution: "We created a fullstack learning platform for kids with a quiz using our own API",
        features: "Our API contains 20 different learning blocks, and 5 questions per block that we are using for the Quiz. The fullstack app is divided in three routed sections: home page, learning bubbles, and quizz. We added a dynamic search and a select/sort-by features to allow the users select the topics they want to start learning by. Once each learning block is completed/read, the user can tick a box, and once all 20 boxes are ticked it triggers the activation of a link that will lead them to the Quiz page. The quizz page displays 20 questions, 1 per learning module. All questions randomize at every game. We also added a Scores tracker for the user which displays the right answers, the wrong ones, and the total questions answered. The whole application is intendedly adapted to kids which became an enjoyable challenge to tackle as we built it.", 
        
    },
    {
        title: "D&D vault",
        projectImg: vault,
        projectUrl: "https://github.com/Laufley/Personal_Project_DnD_Vault",
        stack: "Python, Flask, SQL HTML, CSS",
        nature: "individual project",
        duration: "6 days",
        goal: "My client (business-owner) needed a website to showcase his new business, which at the same would allow him manage all the bookings between customers and gaming sessions.",
        solution: "I created a whole-in-one comprehensive website solution for my client where his customers can browse sessions and interact with the page to get more info on different topics, and I also added a booking feature for him to manage all the bookings.",
        features: "3",
    },
    {
        title: "Monster archives",
        projectImg: monsters,
        projectUrl: "https://github.com/Laufley/DnD_monster_archives_app",
        stack: "JavaScript, React, HTML, CSS",
        nature: "individual project",
        duration: "3 days",
        goal: "to train myself on fetching complex and incomplete APIs.",
        solution: "I fetched and displayed data from a public and original Dungeons & Dragons API, created an interactive app for the user, and added music features",
        features: "3",
    },
    {
        title: "Endangered Species",
        projectImg: animals,
        projectUrl: "https://github.com/Laufley/Endangered_animals_DOM_hw_js",
        stack: "JavaScript, React, HTML, CSS",
        nature: "individual project",
        duration: "2 days",
        goal: "to train myself and interact with the DOM directly without jsx and see how things work on the background.",
        solution: "This is a basic js DOM events handling webapp to input endangered species of animals.",
        features: "3",
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
      <Route path='/CV' element={<CV/>}></Route>
      <Route path="*" element={< ErrorPage />}/>
    </Routes>
  </Router>
  )
}

export default App;





