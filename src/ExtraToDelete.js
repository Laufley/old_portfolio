import './App.css';
import Main from './Containers/Main'
import Projects from './Components/Projects'
import styled from "styled-components";


const NavContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
    background-color: rgba(0, 0, 0, 0.768);
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
      transition: 0.5s;
      color: white;
      font-weight: bold;
      text-shadow: 3px 3px orangered;
      cursor: pointer;
      };
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
    transition: 0.5s;
    color: white;
    font-weight: bold;
    text-shadow: 3px 3px #6823DC;
    cursor: pointer;
  }
  `
const MainBlock = styled.div `
  grid-area: MainBlock;
  `


function App() {
  return (
    <> 
      <NavContainer>
        <Title>Indira Borras Gonzalez</Title>
          <ProjectsTag > Projects </ProjectsTag>
          <ContactTag> Contact </ContactTag>
      </NavContainer>

      <MainBlock> 
        <Main></Main>
      </MainBlock>
    </>

  );
}

export default App;
