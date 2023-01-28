import './App.css';
import Home from './Containers/Home'
import Personal from './Components/Personal'
import Projects from './Components/Projects'
import CV from './Components/CV'
import ErrorPage from './Components/ErrorPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route exact path='/home' element={<Home/>}> </Route>
      <Route path='/Personal' element={<Personal/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='CV' element={<CV/>}></Route>
      <Route path="*" element={< ErrorPage />}/>
    </Routes>
  </Router>
  )
}

export default App;





