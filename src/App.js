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
import children_of_the_bookcase from './Components/helpers/children_of_the_bookcase.jpeg'
import kraken_demo_video from './Components/helpers/kraken_smol_demo.mp4'
import ttrpg_website_with_crm_demo from './Components/helpers/ttrpg_website_with_crm_demo.mp4'


const animals = species
const monsters = monster_archives
const vault = dnd_vault
const marine = marine_life
const game = children_of_the_bookcase
const kraken_demo = kraken_demo_video
const ttrpg_website_demo= ttrpg_website_with_crm_demo

function App() {

  const [projects, setProjects] = useState([


    {
        title: "Marine Life",
        projectImg: marine,
        github_link: "https://github.com/Laufley/Marine_Life_Group_Project",
        demo: kraken_demo,
        stack: "JavaScript, React, NodeJS, MongoDB, HTML",
        nature: "team project",
        duration: "4 days",
        info: "We created a fullstack learning platform with over 20 learning modules and a quiz page using our own API to teach kids about marine sustainability.",
        challenge: "The app works perfectly when you run it locally! GitHub Pages only support static sites though, which means that when deployed on github pages the db doesn't load. Similar issue with the link path for the quizz.",
        solution: "Solved the issue of db load by adding a cheeky button on the bottom on the main page which \"seeds\" the app when you click on it. Room for improvement to create a way to make github pages take us to the quizz path.",
        features: "Our API contains 20 different learning blocks, and 5 questions per block that we are using for the Quiz. The fullstack app is divided in three routed sections: home page, learning bubbles, and quizz. We added a dynamic search and a select/sort-by features to allow the users select the topics they want to start learning by. Once each learning block is completed/read, the user can tick a box, and once all 20 boxes are ticked it triggers the activation of a link that will lead them to the Quiz page. The quizz page displays 20 questions, 1 per learning module. All questions randomize at every game. We also added a Scores tracker for the user which displays the right answers, the wrong ones, and the total questions answered. The whole application is intendedly adapted to kids which became an enjoyable challenge to tackle as we built it.", 
        
    },
    {
        title: "Monster archives",
        projectImg: monsters,
        github_link: "https://github.com/Laufley/DnD_monster_archives_app",
        demo: "https://Laufley.github.io/monster_archives_app",
        stack: "JavaScript, React, HTML, CSS",
        nature: "individual project",
        duration: "3 days",
        info: "To help Dungeon Masters find D&D monsters' main information quickly so that the time they spend creating games for the players is optimised.",
        solution: "I created a small webapp which displays all existing D&D monsters' information, using a Dungeons and Dragons public API. I also added music features to help them relax or energize depending on their needs.",
        features: "I fetched and displayed data from a public and original Dungeons & Dragons API (which was quite big and complex as it was split in unfinished bits), and created an interactive app for the users which allows them use dynamic search, onClick searches which display info by id, and also pagination. Since not all API entries had an image, I used conditional logic to display a dummy picture when necessary. Finally, I and added a couple of music buttons with two different tracks depending on the user's mood which onClick makes the track stop or play again from the point where they stopped it, offering them fully control and hopefuly bring a better user experience.",
    },
    {
      title: "D&D vault",
      projectImg: vault,
      github_link: "https://github.com/Laufley/Personal_Project_DnD_Vault",
      demo: ttrpg_website_demo,
      stack: "Python, Flask, SQL HTML, CSS",
      nature: "individual project",
      duration: "6 days",
      info: "My client Ulf (a business-owner of a Dungeons and Dragons club) needed a website to promote his new business and also a CRM system to manage all the bookings",
      solution: "Since my client was on a low budget, I created a whole-in-one solution; a fullstack website with different pages for his customers to interact with and navigate regarding his business, and an additional admin feature exclusively for Ulf to use which is only accesible by login and allows him to manage his business as requested. Many to many db relationship used.",
      features: "The website contains 7 sections: Home, Dungeon Masters, Upcoming events, Tips and Guides, About, Contact Us, and the Management section. Ulf's customers can navigate through the pages and interact with them to gather the information they need, whilst Only needs to access to the Management page by login to do all the admin. There, he can go to Sessions or Players and perform all CRUD actions. Ulf can also add images to the sessions he updates or adds, and those images as well ass the information of the current sessions will display in the public section of his page. Finally, my user is able to see how many people are booked in for each session/campaign, and the system won't allow him to book a slot if the session is already full.",
  },
    {
      title: "Game! - Children of the bookcase",
      projectImg: game,
      github_link: "https://github.com/Laufley/Escape_Game",
      stack: "C#, Unity",
      nature: "team project",
      duration: "11 days",
      info: "To challenge ourselves greatly in a short period of time: learning enough of a new language & a game engine to deliver what we aimed for, to push our limits, and to create a game which sounds very exciting!",
      solution: "Children of the Bookcase is a 3D, escape-room style, detective puzzle game. Built by us - namelessGamesInc. Published & ready to play in unity store under this link: https://play.unity.com/mg/other/children-of-the-bookcase .",
      features: "First person 3D graphics, puzzles, music, animations, menu scene, credits scene, (some) own assets, and other cool surprises!"
    },
    {
        title: "Endangered Species",
        projectImg: animals,
        github_link: "https://github.com/Laufley/Endangered_animals_DOM_hw_js",
        stack: "JavaScript, React, HTML, CSS",
        nature: "individual project",
        duration: "2 days",
        info: "To train myself and interact with the DOM directly without jsx and see how things work on the background.",
        solution: "I like to work on interesting and meaningful projects, so I made the app about Mass extintion events so that our population at scale could be updated of the status of many different species by user input and raise awareness - if it was a commercial app. So, This is a basic js DOM events handling webapp to input endangered species of animals.",
        features: "It contains 3 main features. First, it is informative as it allows the user to learn more about mass extintion events through a link. Secondly, It contains an Action form with a submit form and a dropdown menu which on submission allows the user to input a species name and its location. Finally, all input information is added and visually displayed on a featured list for every visitor to be updated, the list can be deleted if necessary.",
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





