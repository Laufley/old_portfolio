import './App.css';
import Projects from './Components/Projects'
import Professional from './Components/Profesional'
import Personal from './Components/Personal'
import CV from './Components/CV'
import ErrorPage from './Components/ErrorPage'
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const Title = styled.h1`
    display: flex;
    justify-content: flex-start;
    font-size: 1.5em;
    color: #fff; 
    margin: 0;
    padding: 1em;
    `

const MainBlock = styled.div `
    display: grid;
`



function App() {
  return (
    <> 
      <Router>
        <Title>Indira Borras Gonzalez</Title>
        <Routes>
          <Route exact path='/' element={<Professional/>}> </Route>
          <Route path='/Professional' element={<Professional/>}> </Route>
          <Route path='/Personal' element={<Personal/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='CV' element={<CV/>}></Route>
          <Route path="*" element={< ErrorPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

