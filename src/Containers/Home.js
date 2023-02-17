import React from 'react'
import styled from 'styled-components';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import headshoot from '../Components/helpers/headshoot.jpg';


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
                    <LinkStyle to='/portfolio/CV'> <i className="fa">&#xf12e;</i> Résumé </LinkStyle>
                    <LinkStyle to='https://github.com/Laufley' target="_blank"><i className="fa fa-github"> GitHub</i></LinkStyle>
                    <LinkStyle to='https://www.linkedin.com/in/indira-borras/' target="_blank"><i className="fa fa-linkedin"> LinkedIn</i></LinkStyle>
            </Details>
            <LinkStyled to="/portfolio/Projects"><Button>PROJECTS</Button></LinkStyled>
        </Aside>
        <Main>
            <Intro><h1>I am a junior software developer passionate about my craft. </h1></Intro>
            <Content>
            <h2>Web development</h2>
            <h4>JavaScript</h4>
                <p>I have worked alone and in a team over several projects, both in front-end and back-end using React, Node.js, HTML, and CSS.
                <br></br>
                <br></br>
                All throughout my career I've always focused on my end users, this may be why even when I appreciate the back-end logic I do prefer front-end and event-driven development.
                    
                </p>
            <h4>Python</h4>
                <p> Great and versatile language, no wonder it's so widely used! I do appreciate the fact that is not dynamically typed when I compare it with JS - the many typos I could have avoided...
                <br></br>
                <br></br>
                I do enjoy Python as well, And I have worked alone and collaborated with others to create apps using Flask, SQL, HTML, CSS.
                </p>
            <h2>Databases</h2>
            <p> SQL and MongoDB</p>
            <h2>Testing tools</h2>
            <p>Experience with unit testing, integration testing, and systems testing.
                <br></br>
                Unittest, Pytest, Mocha, Cypress.
            </p>


            <h2>Soft Skills</h2>
            <p>Innate traits + I've learnt from and grown on my roles for every single job I've had:</p>
                <ul>
                <li>Curiosity! ... and endless hunger for learning</li>
                <li>Resilience and self-drive</li>
                <li>Commitment</li>
                <li>Passion and enthusiasm</li>
                <li>Creativity</li>
                <li>Comfortable working alone or in a team - knowledge sharing is essential!</li>
                <li>Adaptability (improvise, adapt, overcome)</li>
                <li>Used to tight deadlines and fast-paced environments</li>
                <li>Good communication Skills <i>(English, Spanish, Catalan)</i></li>
                <li>Organising, Planning and Project Management</li>
                <li>Psychology and diplomacy</li>
                <li>Leadership, mentoring and training</li>
                <li>Experience nurturing client relationships</li>
            </ul>


            <h2>Summary</h2>
            <p>I'm a junior software developer with an insatiable curiosity and hunger for learning, a positive attitude, and a keen interest in Front-end. I've always found the most value in knowledge-sharing, and I enjoy solving problems and collaborating with a team to bring out the best from everyone and deliver outstanding solutions with a twist.<br></br><br></br>I'm quite a perfectionist and detail-oriented, a hard worker, and I like to feel proud of my craft. I will rely on my diverse skillset and recently acquired knowledge in software development to help my team achieve our  goals.</p>

            <h2>My mindset</h2>
            <h3>I.Love.Creating.Stuff</h3>

            <h4>Thinking back, on every role I've had I have always felt a similar craving - To be creative! <br></br>
            Maybe that's why I've always got involved on more than it was expected from me. <br></br>
            And that exposure could be the reason behind all the things I've learnt and the speed of it.
                <br></br><br></br>
                I really enjoy improving things, finding solutions, helping teams grow... I feel good when I'm adding value and I see a real impact from my efforts.
                When I manage to make my team's life easier or to surprise my clients with nice additions they didn't expect THAT drives me.
                <br></br><br></br>
                Programming allows me to create not only for myself or my team, but for a wider audience. 
                Hopefuly my small actions in the bigger team picture will make our users happier.
                <br></br><br></br>
                I'm a hardworker and I like to feel proud of my craft.
                My software developer career is just starting, and this will me an incredible learning curve for me again. I can't wait.

            </h4>
            </Content>
        </Main>
    </>
    );
}
    
export default Home;

