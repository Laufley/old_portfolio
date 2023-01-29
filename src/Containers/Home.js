import styled from 'styled-components';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import headshoot from './headshoot.jpg';

const profileImg = headshoot

const Aside = styled.div`
float: right;
position: sticky;
top: 0;
margin-right: 10%;
margin-top: -20%;
`
const Picture = styled.img`
    width: 80%;
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.79);
    width: 300px;
    height: 400;
    background-color: white;
    vertical-align: middle;
    transform: rotate(8deg);
`
const Details = styled.div`
display: flex;
list-style: none;
flex-direction: row;
justify-content: space-between;
margin-top: 20%;
`
const LinkStyle = styled(Link)`
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.2rem;
    color: #4F0080;
    &:hover{
        color: whitesmoke;
    }
`

const Main = styled.div`
display: grid;
grid-template-rows: repeat(2, auto);
padding: 5%;
background-color: rgba(88, 85, 85, 0.653);
`
const Intro = styled.div`
display: flex;
grid-area: Intro;
grid-template-columns: 1fr; 
flex-direction: column;
margin-left: 2%;
margin-top: -5%;
`

const Content = styled.div`
display: flex;
grid-area: Content;
margin-top: 12%;
grid-template-columns: 1fr; 
flex-direction: column;
margin-left: 4%;
`

const Button = styled.div`
    position: relative;
    top: 0;
    margin-top: 10%;
    margin-left: 25%;
    width: 35%;
    padding: 1rem 2rem;
    font-weight: 700;
    text-align: center;
    font-weight: bold;
    background: rgb(255, 255, 255);
    color: blueviolet;
    border-radius: .5rem;
    border-bottom: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transition-duration: 0.5s;
    transition-property: border-top, 
    border-left, 
    border-bottom,
    border-right,
    box-shadow;
    &:hover {
    border-top: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-bottom: 2px solid rgb(238, 103, 238);
    border-right: 2px solid rgb(238, 103, 238);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px;
    }
`

const LinkStyled = styled(Link)`
text-decoration: none;
` 


const Home = () =>{
    

    return (
    <>
        <Header/>
        <Aside>
            <Picture src={profileImg}></Picture>
            <Details> 
                    <LinkStyle to='/CV'> <i className="fa">&#xf12e;</i> Résumé </LinkStyle>
                    <LinkStyle to='https://github.com/Laufley' target="_blank"><i className="fa fa-github"> GitHub</i></LinkStyle>
                    <LinkStyle to='https://www.linkedin.com/in/indira-borras/' target="_blank"><i className="fa fa-linkedin"> LinkedIn</i></LinkStyle>
            </Details>
            <LinkStyled to="/Projects"><Button>PROJECTS</Button></LinkStyled>
        </Aside>
        <Main>
            <Intro><h1>I am a junior software developer passionate about my craft. </h1></Intro>
            <Content>
            <h2>Web development</h2>
            <h4>JavaScript</h4>
                <p>I have worked alone and with different teams over several projects, both in front-end and back-end, using Node.js, React, JSX, HTML, CSS.
                <br></br>
                Even though I appreciate the back-end logic, I do have a blast working in front-end!
                    
                </p>
            <h4>Python</h4>
                <p> Great and versatile language, so widely used. I do appreciate it not being dynamically typed when I compare it with JS - the many typos I could have avoided...
                <br></br>
                I do enjoy Python as I enjoy JS though. And I have worked alone and collaborated with others to create apps using Flask, SQL, HTML, CSS.
                <br></br>
                Feel free to check some of my projects!
                </p>
            <h2>Databases</h2>
            <p> Mainly SQL and getting familiar with NoSQL</p>
            <h2>Testing tools</h2>
            <p>Experience with unit testing, integration testing, and E2E.
                <br></br>
                Unittest, Pytest, Mocha, Cypress.
            </p>


            <h2>Soft Skills</h2>
            <p>Some are acquired over years of working experience, others are innate:</p>
                <ul>
                <li>Good communication Skills</li>
                <li>Comfortable working alone or in a team</li>
                <li>Collaboration & knowledge-sharing - essential!</li>
                <li>Resilience</li>
                <li>Commitment</li>
                <li>Enthusiasm</li>
                <li>Versatility - improvise, adapt, overcome - quite often</li>
                <li>Thinking outside the box!!</li>
                <li>Hunger for learning</li>
            </ul>
            <h2>My mindset</h2>
            <h3>I.Love.Creating.Stuff</h3>
            <h4>I've always been quite a workaholic and I'm afraid it may be a little too late to change. 
                Well... I can't help it! I really lose track of time when I'm focused -  I know it's not very healthy, so feel free to give me a gentle poke if I deserve it! 
            <br></br>
            <br></br> 
            I like to feel proud of my craft, yes. But I try not to lose the scope<br></br>
            there is still a long way to go on my career, and I will never be completely satisfied with my results - or so I hope - for there is always something new to learn and implement, and I want to know as much as I can!
            <br></br>
            <br></br>
            My goals are: to deliver good results, strenghten relationships, and to keep learning to be in a position of helping others in the future. 
            <br></br>
            <br></br>
            PS. I've walked this road a couple of times already. Growing on previous roles and becoming a senior, someone who's there for the team. I can and I will do it again.
            as a Knights Radiant would say "Journey Before Destination".
            </h4>
            </Content>
        </Main>
    </>
    );
}
    
export default Home;

