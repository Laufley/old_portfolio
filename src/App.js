import './App.css';
import Main from './Containers/Main'
import Projects from './Components/Projects'
import styled from "styled-components";


const NavContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
    background-color: #4c1b7cd0;
    &:hover{
        background-color: #8350afb0;
        transition: 3s;
    }
`

const Title = styled.h1`
    display: flex;
    justify-content: flex-start;
    font-size: 1.5em;
    color: #fff; 
    margin: 0;
    padding: 1em;
    `
const ProjectsTag = styled.h1`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5em;
    color: #fff; 
    margin: 0;
    padding: 1em;
    &:hover{
      color: #6BDE21;
      text-shadow: 2px 2px black;
      cursor: pointer;
    }
    `

const ContactTag = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin-right: 20%;
  font-size: 1.5em;
  color: #fff; 
  margin: 0;
  padding: 1em;
  &:hover{
      color: #6BDE21;
      cursor: pointer;
      text-shadow: 2px 2px black;
  }
  `
const MainBlock = styled.div `
  grid-area: MainBlock;
  `


function App() {
  return (
    <> 
      <NavContainer>
        {<Title>Indira.codes</Title>}
          <ProjectsTag> Projects </ProjectsTag>
          <ContactTag> Contact </ContactTag>
      </NavContainer>

      <MainBlock> 
        <Main></Main>
      </MainBlock>
    </>

  );
}

export default App;

////#f15b5b,
//#e73c7e,
