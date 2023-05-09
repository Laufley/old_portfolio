import {React, useState} from 'react'
import './Personal.css';
import styled from 'styled-components';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import goofy from './helpers/goofy.jpeg'

const personalImg = goofy

const Text = styled.p`
  font-size: 16px;
  color: rgb(35, 29, 35);
`;

const PersonalContainer = styled.div `
position: relative;
`
const Life = styled.h2 `
position: absolute;
top: 100%;
padding-top: 2rem;
`
const Pre = styled.pre`
position: relative;
padding-top: 13%;
`

const Personal = () => {

    const [route, setRoute] = useState('/personal');
    
    return (
        <div>
        <Header route={route} setRoute={setRoute} />
        {route === '/personal' && <div>
        <div id='Aside'>
            <img id='personal-picture' src={personalImg}></img>
            <div id='personal-details'> 
                    <Link className='personal-linkStyle' to='/CV'> <i className="fa">&#xf12e;</i> Résumé </Link>
                    <Link className='personal-linkStyle' to='https://github.com/Laufley' target="_blank"><i className="fa fa-github"> GitHub</i></Link>
                    <Link className='personal-linkStyle' to='https://www.linkedin.com/in/indira-borras/' target="_blank"><i className="fa fa-linkedin"> LinkedIn</i></Link>
            </div>
        </div>
        <div id='personal-main'>
            <PersonalContainer>
                <div id='personal-intro'><h1>I'm an explorer, a geek, and a bit of a goof</h1></div>
                <Life className='psection-header'>Life</Life>
            </PersonalContainer>
            <Pre><Text> 
            life = list(range(1, 1001)) <br></br>
            print(life)<br></br><br></br>

            lemonade = 0<br></br>
            for lemons in life:<br></br>
            lemonade += lemons<br></br>
            print Lemonade</Text>
            </Pre>
            <section>
                <h4>From Spain to Edinburgh</h4>
                <Text>I moved to Edinburgh for love leaving my career in psychology and my work in the hospital behind. 
                    <br></br>The relationship didn't work out in the end but you know what? I don't regret it, if there is something out there to fight for, that is love. Also, remember the lemons ;) </Text>

                <h4>Accumulative career</h4>
                <Text>
                I feel very grateful for the palette of experiences I've had, and the amazing people I've met.<br></br> 
                Never a dull moment for me. I've always moved when I got too comfortable in a role to keep growing. <br></br><br></br>

                When I arrived to Edinburgh my main priority was to learn English, that's why I happily started from sratch on a <b>waitress</b> role and then I braved it into <b>customer service.</b><br></br><br></br>
                Just when I started feeling comfortable as English speaker I got promoted to the <b>Social Media</b> team which allowed me to also improve my writing. And it was fantastic! We were a tight-knit team and the projects were always a success. However, the job started to feel repetitive so I: took some learning courses, improved our processes, got into a more leading role within the team where I delivered training and had my first face-to-face interactions with clients. <br></br><br></br>
               
                But once I did all of that... What was next for me? There was nothing to look up for. And now feeling capable to interact in English, I decided to change careers on an area I would enjoy. <b> IT recruitment! </b> People + tech. Two areas I thoroughly enjoy :)<br></br><br></br>
                
                After 4 years of exposure to all kind of challenges in different companies, I became a <b>senior IT recruiter</b> at <i> Smart Hire IT Nordics</i>.<br></br>

                <p style={{ fontStyle: 'italic', color: '#6fdfad', textAlign: 'center'}}>"I want a company that nurtures connections, is quirky, and spends the right amount of time on each individual profile. I want our company to be different!" - <b>Indira 2021.</b></p>
                Since everyone on the startup had the same vision we drove success while wholeheartedly enjoying what we did, and almost without noticing, I kept taking more responsabilities than what was expected of me because I believed in the difference we were making and I wanted to improve the way we did it. So, over the years, I have: <p style={{fontStyle : 'italic', color: 'rgba(26, 34, 71)'}} > Studied the IT market, delivered influencial market insights to my clients, became account manager of multiple accounts in EU, coached candidates, helped people to take their next career step, improved operations and innovated in the company with new approaches that are still being used, led projects, delivered trainings, delivered a social media audit to the CEO, joined forces with the CEO and together we created: a new logo, rebranded the whole company, and created the most flashy website (thanks to the help of a developer); and represented our company on big tech events in Stockholm</p>
            
                Undoubtedly, <i>Smart Hire IT Nordics</i> has been my growing pot and free canvass. And I couldn't be more grateful for that. They noticed I really craved something yet I didn't know what it was, and they gave me the freedom to pursue it. In the back of my mind, for almost those entire 4 years, I kept toying with the idea of becoming a programmer and unravel all that "magic" my candidates amazed me with, dreaming about being able to create websites and all kinds of stuff. It sounded so exciting! So strage! So full of possibilities!<br></br>An endless ocean of knowledge-beads! <br></br><br></br>
                
                And right when I was about to be promoted to <i>"Head of the creative deparment"</i> I felt I had reached a plateu already. I had achieved everything I expected from myself, and this promotion would only imply a change on salary and job title but my work would remain the same. And here is when I made the biggest and most daring decision of all.<br></br><br></br>
                
               <b>BOOM!! codeBEAM conference 2022, Stockholm.</b><br></br>
               The catalyzer.
               A succesful partnership with one of my clients led to the invitation to a big tech event they sponsor every year, and it blew my mind. So. Many. Interesting. People!  So. Many. Interesting. Topics! So much innovation! Bright ideas! So many minds buzzing... and I felt comfortable being part of it. WHY DID IT TAKE ME SO MANY YEARS TO FIND THIS OUT?<br></br><br></br>

                So here I am. Yet again, changing careers. But this time, with endless learning opportunities.<br></br>
                Which is where I belong.
                <p style= {{fontStyle: 'italic', textAlign: 'center', color: '#6fdfad'}} >"Some people struggle their whole life to find their meaningful career; luckily, it has taken me only a few tries"</p>

                </Text>
            </section>
            <section>
                <h2 className='psection-header'>Hobbies</h2>
                <Text>
                Life is too short and it's quite humbling to think about all the things awaiting for us to discover.<br></br>
                I want to learn as much as I can while I'm this planet. That's why I have so many hobbies! 
                </Text>
                <ul>
                    <Text>
                    <li><b>Coding challenges</b></li>
                    <li><b>Reading</b></li>
                    <li><b>Collaborative writing with people all over the globe</b></li>
                    <li><b>Miniature painting</b></li>
                    <li><b>Tabletop RPGs</b>: Dungeons & Dragons, GURPS</li>
                    <li><b>Boardgames and videogames</b></li>
                    <li><b>Piano playing:</b> beginner</li>
                    <li><b>Blender:</b> beginner</li>
                    <li><b>Documentaries</b></li>
                    <li><b>Hiking</b></li>
                    <li><b>Travelling:</b> Discovering about the world and other cultures is soul-enriching</li>
                    <li><b>foodie</b></li>
                    <li><b>Improving and fixing stuff:</b> I can't help it.</li>
                    </Text>
                </ul>
            </section> 
            <section>
                <h2 className='psection-header'>Causes I care about</h2>
                <ul><Text>
                    <li>
                        <b>Sustainability: </b> 
                        I have helped turtles in the Antartic, corals in the French Polynesia, trees around the world, and local bee hives.<br></br> 
                        Explore more: <a className='sustainability-links' href='https://coralgardeners.org/?gclid=Cj0KCQiAorKfBhC0ARIsAHDzsltT9yk3irj3A4zYIL7wTQ23F5pQOGthgfFGkn8cTWUnBSO2gzywKuQaAp7SEALw_wcB'> CoralGardeners</a>, <a className='sustainability-links' href='https://support.wwf.org.uk/adopt-an-animal'> WWF animals</a>
                    </li>
                    <li><b>Children in impoverished environments</b></li>
                    <li><b>Education and distribution of ressources across the globe</b> </li>
                    </Text>
                </ul>
            </section>
            <section>
            <h2 className='psection-header'>And...</h2>
                <p className='duck-name'>
                    <span className="i-letter">I </span>
                    <span className="l-letter">L</span>
                    <span className="o-letter">O</span>
                    <span className="v-letter">V</span>
                    <span className="e-letter">E </span>
                    <span className="d-letter">D</span>
                    <span className="u-letter">U</span>
                    <span className="c-letter">C</span>
                    <span className="k-letter">K</span>
                    <span className="s-letter">S</span>
                </p>
            </section>
            </div>
        </div>}
        </div>
    
    );
}

export default Personal