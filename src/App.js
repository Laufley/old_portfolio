import './App.css';
import Projects from './Components/Projects'
import Professional from './Components/Profesional'
import Personal from './Components/Personal'
import CV from './Components/CV'
import ErrorPage from './Components/ErrorPage'
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const Body = styled.body`
  background: linear-gradient(45deg, #ffffff,#f87171, #de3274, #ba5ee2, #4e9aec, #67e2b5, #40eeb7);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  height: 100vh;
`


function App() {
  return (
    <Body>
      <Router>
        <Routes>
          <Route exact path='/' element={<Professional/>}> </Route>
          <Route path='/Professional' element={<Professional/>}> </Route>
          <Route path='/Personal' element={<Personal/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='CV' element={<CV/>}></Route>
          <Route path="*" element={< ErrorPage />}/>
        </Routes>
      </Router>
    </Body>
  )
}

export default App;

