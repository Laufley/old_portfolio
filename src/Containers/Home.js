import React from 'react'
import './Home.css';
import styled from 'styled-components';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import headshoot from '../Components/helpers/headshoot.jpg';


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
                <h3 class='main-or-other-language'style={{color: 'rgb(175,217,195)'}}> <b> <u> Main ones </u> </b> </h3>
                    <h4 class='main-or-other-language'><b> 1. JavaScript </b></h4>
                            <p class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}>I have worked alone and in a team over several projects, both in front-end and back-end using 
                            <br></br>
                            <b>React, Node.js, HTML, and CSS.</b>
                            <br></br>
                            <br></br>
                            All throughout my career I've always been focused on my end users; focused on tailoring their experience with eye-catching and meaningful material.<br></br> 
                            This may be why — even when I appreciate back-end logic — I do prefer event driven development more than any other kind. I can't get enough of it!
                            </p>
                        <h4 class='main-or-other-language'>2. Python</h4>
                            <p class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}> Great and versatile language, no wonder it's so widely used.
                            <br></br>
                            <br></br>
                            I do enjoy Python as well, And I have worked alone and collaborated with others to create webapps using 
                            <br></br>
                            <b>Flask, SQL, HTML, CSS.</b>
                            </p>
                <h3 class='main-or-other-language' style={{color: 'rgb(175,217,195)'}}> <b> <u> Others </u> </b> </h3>
                    <h4 class='main-or-other-language'>1. Java</h4>
                        <p class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}> The thing I have enjoyed the most with Java has been debugging.
                        <br></br>
                        <br></br>
                        I have worked on Java projects mostly by myself building apps with <b>Spring.</b>
                        </p>
                    <h4 class='main-or-other-language'>2. C#</h4>
                        <p  class='main-or-other-language'style={{color: 'rgb(35, 29, 35)'}}> As a team of 4 we built a small game in C# with Unity engine for fun.</p>
                    <h4 class='main-or-other-language'>3. PHP</h4>
                        <p  class='main-or-other-language' style={{color: 'rgb(35, 29, 35)'}}> Currently working on a <u>paid project</u> with PHP, JS, HTML, CSS and Worpress to add a whislist feature on an e-commerce website.
                        <br></br>
                        <br></br>
                        
                    </p>
            <h2 className='section-header'>Databases:</h2>
            <p style={{color: 'rgb(35, 29, 35)'}}> SQL, MongoDB</p>
            
            
            <h2 className='section-header'>Testing tools:</h2>
            <p style={{color: 'rgb(35, 29, 35)'}}>Experience with unit testing, integration testing, and systems testing.
                <br></br>
                Unittest, Pytest, Mocha, Cypress.
            </p>

            
          
                <h2 className="section-header">Soft Skills:</h2>
                <ul>
                    <li><b>Highly adaptable</b></li>
                    <li><b>Resilient</b></li>
                    <li><b>Enthusiastic</b></li>
                    <br></br>
                    <li>Curious</li>
                    <li>Self-driven</li>
                    <li>Psychology</li>
                    <li>Effective communication</li>
                    <li>Understanding of team dynamics</li>
                    <li>Used to tight deadlines & fast-paced environments</li>
                    <li>Organising, Planning & Project Management</li>
                    <li>Mentoring</li>
                    <li>Client relationships handling</li>
                </ul>

            <h2 className='section-header'>Summary:</h2>
            <p style={{color: 'rgb(35, 29, 35)'}}>I'm a junior software developer with an insatiable curiosity & hunger for learning, a positive attitude, and a keen interest in Front-end. 
            <br></br><br></br>I've always found the most value in knowledge-sharing, and I enjoy solving problems collaboratibly to bring out the best from everyone & deliver outstanding results with a twist.
            <br></br><br></br>I'm quite detail-oriented and I like to feel proud of my craft. I will rely on my diverse skillset and recently acquired knowledge in software development to help my team achieve our  goals.</p>

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

            <h4 style={{color:'rgb(35, 29, 35)'}}>
                I'm driven by improving things, finding creative & innovative solutions, and keeping my clients excited about our partnership. 
                Fortunately, programming allows me to do this! To create not only for myself but for a wider audience! 
                Hopefuly, my small actions within the bigger team picture will make our users happier.
                <br></br><br></br><br></br>
                Every day, I challenge myself to get better than I was the day before.
                I feel good when I'm adding value and I see a real impact from my efforts. 
                <br></br><br></br><br></br>
                My software developer career is just starting - what an incredible learning curve awaits!

            </h4>
            </div>
        </div>

  
    </>
    );
}
    
export default Home;

