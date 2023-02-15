import {React, useState} from 'react'
import styled from 'styled-components';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import goofy from './goofy.jpeg'

const personalImg = goofy


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
    padding: 1rem 2rem;
    font-weight: 700;
    background: rgb(255, 255, 255);
    color: blueviolet;
    border-radius: .5rem;
    border-bottom: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
    border-top: 2px solid white;
    border-left: 2px solid white;
    transition-duration: 1s;
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

const Personal = () => {

    const [route, setRoute] = useState('personal');
    
    return (
        <div>
        <Header route={route} setRoute={setRoute} />
        {route === 'personal' && <div>
        <Aside>
            <Picture src={personalImg}></Picture>
            <Details> 
                    <LinkStyle to='/CV'> <i class="fa">&#xf12e;</i> Résumé </LinkStyle>
                    <LinkStyle to='https://github.com/Laufley' target="_blank"><i class="fa fa-github"> GitHub</i></LinkStyle>
                    <LinkStyle to='https://www.linkedin.com/in/indira-borras/' target="_blank"><i class="fa fa-linkedin"> LinkedIn</i></LinkStyle>
            </Details>
        </Aside>
        <Main>
            <Intro><h1>I'm an explorer, a leader when needed <br></br>
                and a bit of a goof.</h1></Intro>
            <Content>
            <h2>Life</h2>
            <pre><p> 
            life = list(range(1, 1001)) <br></br>
            print(life)<br></br><br></br>

            lemonade = 0<br></br>
            for lemons in life:<br></br>
            lemonade += lemons<br></br>
            print Lemonade</p>
            </pre>
            <h5>What is a Spaniard doing in Edinburgh, Indira?</h5>
            Good question. I sometimes wonder that myself. I moved here for love, leaving my previous career behind. And you know what? I don't regret it, if there is something out there to fight for, that is love - for cheesy as it sounds. Btw, in the end it didn't work out and we split up after 10y BUT! remember the lemons ;)

            <h5>what do you take from your previous working experiences?</h5>

            
                
            {/* <p> <b>Psychology:</b> My journey started in the sunny lands of Barcelona when I worked as a junior psyhoclogyst and research associate at Hospital Universitari de Bellvitge. I led my own neuropsichological evaluations, and participated on different treatments for a variety of mental disorders on top of the research we were carrying. But the universe works in misterious ways and I had to chose between my career or moving to another country for love. I chose love. <br></br><br></br>
            <b>Waitress and Customer Service:</b> I had to start from scratch again since pursuing a doctorate here wouldn't have brough enough economical safety. I barely spoke any english, but having client-facing roles pushed me to learn the language fast. It was the perfect challenge for my learning needs. And within 3 months of customer service I was promoted to the new Social Media team they had. It was fantastic, because I was already starting to feel slightly comfortable speaking English daily<br></br><br></br>
            <b>Social Media Community Coordinator:</b>My team and I worked for 3 different clients, making sure their different social media business accounts were thriving. I got to practice a lot of writing english while speaking it daily in the office. It was ideal. Yet again, I started to feel comfortable so I began to innovate and take more leading roles to help the team. That's how in the end I got my first face to face client interactions and experience training new teammates.<br></br><br></br>
            <b>IT recruitment:</b>The recruitment industry is savage, and that's fine, I don't mind it. Challenges makes you grow. I found it too cold and impersonal though, and that's not how I am. I am a psychologyst! I care about people! So that was me with a new career goal: To change the IT recruiting industry by making it more human. And even when it sounds impossible, I did it! at small scale, at company-scale, but for me, that counts. Specially on my last job where I had more influence on the culture and client handling. Candidates also appreciated it. And that's something I will forever take with me. <br></br>
            Hard work takes you places, and I finally became a senior recruiter which I so much pursued. Beyond my normal recruter duties headhunting, screening and interviewing candidates, I became the account manager of several clients in Norway, Sweden and Lithuania, provided training for new team members, mentorship to the team and - quite beyond my expected duties:
            <ul>
                <li>Improved internal operations and created guides and templates - which keep growing with new team inputs</li>
                <li>Drove a Social Media audit for the CEO - which they had never done before!</li>
                <li>Created a new Logo in parnership with the CEO - There is a funny story about that</li>
                <li>Collaborating with the CEO, together we rebranded the whole company resulting in a defined brand persona, tone of voice, etc. and a flashy website that a Front-End developer helped us create. The reactions from our audience were an absolute success!</li>
                <li>Client relationships were my forte. We were so succesful that partners were inviting us to their main offices, and one of them even invited me to the codeBEAM conference in Stokcholm they were sponsoring in May 2022. <b>THAT was a life-changing experience for me and the final push to decide become a programmer.</b></li>
                <li>I became a core member of the team, participated in important decision-making, and they are currently carrying one one of my latest suggestions for expansion - They are doing amazingly so far</li>
                <li>Got to be promoted to "Head of the creative division" for the new deparment - which is great! BUT. there is always a but. I had already achieved what I wanted to achieve and more. A change in title was only that, a change in title and salary, but my job would be essentially the same. I had reached a career plateau and I am pretty much a hands-on person, I like to be busy, create things and improve things.<br></br>
                And that's what drove me to studying Software Development. 
                </li>
            </ul> */}
            {/* </p> */}

            <h2>Hobbies</h2>
            Life is too short and has too much to offer. <br></br>
            It's quite humbling to think about all the things awaiting for us to discover.<br></br>
            And I want to learn as much as I can. Maybe that's why I have so many hobbies!
            <ul>
                <li><b>Writing:</b> I've been writing collaboratively with people all over the globe for years!</li>
                <li><b>Reading:</b> Hard sci-fi and Hard fantasy prefered</li>
                <li><b>Miniature painting:</b> We use them in our team's D&D camapigns</li>
                <li><b>Boardgames and videogames:</b> Platform eclectic</li>
                <li><b>Piano</b> just starting</li>
                <li><b>Video editing:</b> Blender is so complex!</li>
                <li><b>Documentaries:</b> About science and nature</li>
                <li><b>Hiking:</b> I belong to nature. I'm a mountain goat</li>
                <li><b>Travelling:</b> Discovering about the world and other cultures enrichens our scope</li>
                <li><b>Improving and fixing things:</b> I can't help it.</li>
            </ul>
            <h2>Causes I care about</h2>
            <ul>
                <li>Sustainability: I've currently adopted/sponsored turtles in the Antartic waters, Corals and SuperCorals, and bee hives</li>
                <li>Equality of human ressources distribution around the globe: A big ongoing project of mine to get more involved the future to help communities with better access to education</li>
                <li>EDUCATION: Quality education. We need better scientific and moral standards.</li>
                <li>Politics: Like it or not, they are key to understand the world we are ruling a bit better.</li>
                <li>SpaceStuff: I have always been addicted to space topics and our insignificant part in its vastness. The Cosmic Landscape was an eyes-opening book for me.</li>
            </ul>
            
            <h2>I love ducks</h2>
            <p>

            
            </p>
            </Content>
        </Main>
        </div>}
        </div>
    
    );
}

export default Personal