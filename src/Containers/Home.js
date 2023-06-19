import React from 'react'
import './Home.css';
import styled from 'styled-components';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import headshoot from '../Components/helpers/headshoot.jpg';
//FontAwesome stuff:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(fab); // for the JS fontAwesome icon in the languages section
const profileImg = headshoot

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
    };

    @media (max-width: 768px) {
        margin-bottom: 12%;
        margin-left: 55%;
      }

      @media (max-width: 414px) {
        margin-bottom: 12%;
        margin-left: 25%;
      }
`

const Text = styled.p`
  font-size: 16px;
  color: rgb(35, 29, 35);
  transition: 1s;

  &:hover {
    
    transition: 1s;
    color: ;
    font-size: 17.5px;
  }
`;

const Home = () =>{
    

    return (
    <>
        <Header/>
        <div id='Aside'>
            <img id='profilePicture' src={profileImg}></img>
            <div id='Details'> 
                    <Link className='LinkStyle' to='/CV'> <i className="fa">&#xf12e;</i> Résumé </Link>
                    <Link className='LinkStyle' to='https://github.com/Laufley' target="_blank"><i className="fa fa-github"> GitHub</i></Link>
                    <Link className='LinkStyle' to='https://www.linkedin.com/in/indira-borras/' target="_blank"><i className="fa fa-linkedin"> LinkedIn</i></Link>
            </div>
            <Link id='LinkStyled' to="/Projects"><Button>PROJECTS</Button></Link>
        </div>
        <div id='Main'>
            <div id='Intro'><h1>I am a software developer passionate about my craft </h1></div>
            <div id='Content'>
            <h2 className='section-header'><b>Languages:</b></h2>
                <section id='languages-box'>
                <Text>
                <h3 class='main-or-other-language'style={{color: 'aliceblue'}}> <b> <u> Main ones </u> </b> </h3>
                    <h4 class='main-or-other-language'><span style={{ color: 'rgb(239, 216, 26)', fontSize: '25px' }}>< FontAwesomeIcon icon={['fab', 'js']}/></span><span style={{ color: 'aliceblue', fontSize: '25px' }}> ...</span> <span style={{color: '#4F0080'}}><b>JavaScript</b></span></h4>
                            <p class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}>I have worked alone and in a team over several projects, both in front-end and back-end <br></br>using<b> React, Node.js, HTML, and CSS.</b>
                            <br></br>
                            <br></br>
                            All throughout my career I've always been focused on my end users; focused on tailoring <br></br>their experience with eye-catching and meaningful material.<br></br> 
                            This may be why — even when I appreciate back-end logic — I do prefer <br></br>event driven development more than any other kind. I can't get enough of it!
                            </p>
                            <br></br>
                        <h4 class='main-or-other-language'><span style={{ color: '#4280b0', fontSize: '25px', background:'rgb(239, 216, 26)'}}><FontAwesomeIcon icon={faPython}/></span><span style={{ color: 'aliceblue', fontSize: '25px'}}> ...</span><span style={{color: '#4F0080'}}> Python</span></h4>
                            <p class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}> Great and versatile language, no wonder it's so widely used.
                            <br></br>
                            <br></br>
                            I do enjoy Python as well, And I have worked alone and collaborated with others to create <br></br>webapps using <b> Flask, SQL, HTML, CSS.</b>
                            </p>
                            <br></br>
                </Text>
                <Text>
                <h3 class='main-or-other-language' style={{color: 'aliceblue'}}> <b> <u> Others </u> </b> </h3>
                    <h4 class='main-or-other-language'><span style={{ color: '#e51f23', fontSize: '25px', background:'rgba(47, 47, 47, 0.408)'}}> <FontAwesomeIcon icon={faJava}/></span><span style={{ color: 'aliceblue', fontSize: '25px'}}> ... </span><span style={{color:'#4F0080'}} > Java </span></h4>
                        <p class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}> The thing I have enjoyed the most with Java has been debugging.
                        <br></br>
                        <br></br>
                        I have worked on Java projects mostly by myself building apps with <b>Spring.</b>
                        </p>
                    <h4 class='main-or-other-language'><span style={{color:'aliceblue', fontSize: '20px', background:'#7d3584'}} > C#  </span><span style={{ color: 'aliceblue', fontSize: '25px'}}> ... </span><span style={{color: '#4F0080'}} > C#</span></h4>
                        <p  class='main-or-other-language'style={{color: 'rgb(35, 29, 35)'}}> As a team of 4 we built a small game in C# with Unity engine for fun.</p>
                    <h4 class='main-or-other-language'><span style={{color:'black', fontSize: '25px', background: '#7377ae'}}> <FontAwesomeIcon icon={faPhp}/></span><span style={{ color: 'aliceblue', fontSize: '25px'}}> ... </span><span style={{color: '#4F0080'}} >PHP </span></h4>
                        <p  class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}> Currently working on a <u>paid project</u> with PHP, JS, HTML, CSS and Worpress to add a whislist <br></br>feature on an e-commerce website.
                        <br></br>
                        <br></br>
                    </p>
                </Text>
                </section>
            <h2 className='section-header'>Databases:</h2>
            <Text>
            <p style={{color: 'rgb(35, 29, 35)'}}> <b>SQL, MongoDB </b></p>
            </Text>
            
            <h2 className='section-header'>Testing tools:</h2>
            <Text>
            <p style={{color: 'rgb(35, 29, 35)'}}>Experience with unit testing, integration testing, and systems testing.
                <br></br>
                <b>Unittest, Pytest, Mocha, Cypress. </b>
            </p>
            </Text>

            
            <h2 className="section-header">Soft Skills:</h2>
            <section id='soft-skills-box'>
            <Text>
            <ul id='hobbies-list'>
                <li><b><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Highly adaptable</b></li>
                <li><b><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Resilient</b></li>
                <li><b><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Enthusiastic</b></li>
                <br></br>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Curious</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Self-driven</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Psychology</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Effective communication</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Understanding of team dynamics</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Used to tight deadlines & fast-paced environments</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Organising, Planning & Project Management</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Mentoring</li>
                <li><span id='chevron-icon'><FontAwesomeIcon icon={faChevronRight}/></span> Client relationships handling</li>
            </ul>
            </Text>
            </section>

            <h2 className='section-header'>Summary:</h2>
            <Text style={{color: 'rgb(35, 29, 35)'}}> I'm a junior software developer with an insatiable curiosity, hunger for learning and a positive attitude. <br></br>I enjoy working with a diversity of technologies - the more variety the better; and improving things for people. <br></br><br></br>I will contribute with relevant soft-skills I have actively developed during my career and the technical knowledge & experience I am constantly acquiring. I am committed, detail-oriented. And I like <br></br>to feel proud of my work.</Text> 
                
            <h2 className='section-header'>My mindset:</h2>
            <h3 id='i-love'>
            <span className="i-letter">I.</span>
            <span className="l-letter">L</span>
            <span className="o-letter">O</span>
            <span className="v-letter">V</span>
            <span className="e-letter">E.</span>
            <span className="c-letter">C</span>
            <span className="r-letter">R</span>
            <span className="e-letter">E</span>
            <span className="a-letter">A</span>
            <span className="t-letter">T</span>
            <span className="i-letter">I</span>
            <span className="n-letter">N</span>
            <span className="g-letter">G.</span>
            <span className="s-letter">S</span>
            <span className="t-letter">T</span>
            <span className="u-letter">U</span>
            <span className="f1-letter">F</span>
            <span className="f2-letter">F</span>
            </h3>

            <div id='mindset-box'>
                <h4 style={{color:'rgb(35, 29, 35)'}}>
                    
                I like to be the person saying "Yes, I can build it for you!" instead of the one saying "Yes, I will find someone to do it for you". <br></br><br></br>
                Luckily, programming allows me to do this. To create not only for myself but for a wider audience!
                Hopefuly, my contributions within the team will make our users happier.
                <br></br><br></br>
                Finally, I challenge myself everyday to get better than I was the day before.
                I feel good when I'm adding value and I see a real impact from my efforts. 
                <br></br><br></br>
                </h4>
            </div>
            </div>
        </div>

  
    </>
    );
}
    
export default Home;

