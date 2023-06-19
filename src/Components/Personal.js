import { React, useState } from 'react'
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

const PersonalContainer = styled.div`
position: relative;
`
const Life = styled.h2`
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
    <>
        <Header route={route} setRoute={setRoute} />
        {route === '/personal' && <div>
                    <div id='personal-aside'>
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

                        <div id='personal-life-grid'>
                            <section id='career-history'>
                                <h4>2017 - From Barcelona to Edinburgh</h4>
                                <Text>From working as a clinical psychologyst in Bellvitge's hospital (Spain), love drove me to the UK in 2017.
                                    <br></br>All new beginings are hard, and I didn't speak any English, but when life gives you lemons... haha!
                                </Text>

                                <br></br><br></br>
                                <h4> 2017 to 2022 - Accumulative UK career</h4>
                                <Text>
                                    Never with a dull moment. I've always moved upwards when I got too comfortable in a role to make sure I would keep growing. <br></br><br></br>
                                    When I arrived to Edinburgh my main priority was to learn English, and that's why I started as a <u>waitress</u>.
                                    <br></br>
                                    When I felt confident enough, I braved it into <u>customer service.</u><br></br>
                                    Within 3 months I got promoted to the <u>Social Media</u> team which allowed me to also improve my writing skills. I had a lot of fun, but soon enough I had reached a plateau. So I moved into something new... <br></br><br></br>
                                    <u>IT recruitment!</u> Why not? I like tech and I enjoy interacting with people :)<br></br><br></br>
                                    After 4 years of exposure to all kind of challenges in different companies, I became a <u>senior IT recruiter</u> at <i> Smart Hire IT Nordics</i>.
                                    Since everyone in the startup had the same vision, we drove success fast while wholeheartedly enjoying what we did. And almost without noticing, I started taking more responsabilities than what was expected because I believed in the difference we were making.
                                    <br></br>
                                    Here is a summary of my achievements as Senior IT Recruiter which when I first arrived to this country I could have never imagined ever doing:
                                    <br></br><p id='summary-rec_skills'> Studied the IT market, delivered influencial market insights to my clients, became account manager of multiple accounts in EU, coached candidates towards their next career move, improved operations in the company and innovated with new approaches that are still being used. I owned and led projects, delivered trainings, delivered a social media audit to the CEO, joined forces with the CEO to rebranded the company, and helped to shape our flashy website (thanks to the help of a developer). I also represented our company on big tech events in Stockholm!</p>
                                    After all of this, and as you can imagine, I have developed a solid bundle of client and customer based soft-skills which I am already leveraging as a software developer.<br></br>

                                    <br></br><br></br><br></br>
                                    <h4> 2022 - Big decision! Sofware Development</h4>
                                    In the back of my mind, for almost those entire 4 years, I kept toying with the idea of becoming a programmer and unraveling all that "magic" my candidates amazed me with, dreaming about being the one telling to my customers "Yes, I can build it for you!" instead of "Yes, I will find someone to do it for you". <br></br>
                                    <br></br>
                                    <i>Smart Hire IT Nordics</i> has been my growing pot. And I couldn't be more grateful for that. They noticed I really craved something yet I didn't know what it was, and they supported me on my pursuit.
                                    And right when I was about to be promoted to <i>"Head of the creative deparment"</i> I had yet again reached a plateu (because it was a change in title and salary, but I would keep the extended responsibilities I already had) which, added to the next event would become the catalyst to my new career in Software Development.
                                    <br></br> <br></br>
                                    <b>BOOM!!</b><i> codeBEAM conference 2022, Stockholm.</i><br></br>
                                    A succesful partnership with one of my clients led to the invitation to a big tech event they sponsor every year, and it blew my mind. So. Many. Interesting. Topics! So many minds buzzing! So much innovation!... and I felt comfortable being part of it. WHY DID IT TAKE ME SO MANY YEARS TO FIND THIS OUT?<br></br><br></br>
                                    So here I am. After few years and a solid bundle of skills developed, I have finally found my right path.
                                    Who know where will it lead...


                                    <br></br><br></br><br></br><br></br>
                                    <h4> 2022 - 2023 - My Software development journey so far</h4>
                                    <ul>
                                        (studies)
                                        <li>CodeClan studies in Fullstack software development - Certificate obtained</li>
                                        <li>SQA Software development SQCF level 8 - Certificate obtained </li>
                                        <li>Harvard edX CS50's introduction to computer science - ongoing, remote </li>
                                        <li>Skyscanner Forage course - ongoing, remote</li><br></br>
                                        (side projects)
                                        <li>4 big projects completed in different languages (Python, JS, C#)</li> <br></br>
                                        (paid projects)
                                        <li>1st paid job as independed consultant - contract finishes on 1st July 2023 (loving the feeling of being a consultant) </li><br></br>
                                        <li><u>Current state:</u> Looking for a permanent position in the right company.</li>
                                    </ul>

                                    <br></br><hr></hr>
                                </Text>
                            </section>


                            <section id='hobbies'>
                                <h2 className='psection-header'>Hobbies</h2>
                                <Text>
                                    Life is too short and there is so much to discover.<br></br>
                                    I want to learn as much as I can while I'm alive. That's why I have so many hobbies!
                                </Text>
                                <ol>
                                        <li><b>Code challenges</b></li>
                                        <li><b>Miniature painting</b></li>
                                        <li><b>Tabletop RPGs</b>: Dungeons & Dragons, GURPS</li>
                                        <li><b>Boardgames and videogames</b></li>
                                        <li><b>Reading</b></li>
                                        <li><b>Writing collaboratively with people around the world</b></li>
                                        <li><b>Piano:</b> beginner</li>
                                        <li><b>video editing:</b> beginner</li>
                                        <li><b>Watching documentaries</b></li>
                                        <li><b>Hiking</b></li>
                                        <li><b>Travelling:</b> Discovering about the world and other cultures is soul-enriching</li>
                                        <li><b>Foodie</b></li>
                                        <li><b>Improving and fixing stuff:</b> I can't help it.</li>
                                </ol>
                            </section>

                            <section id='volunteering'>
                                <h2 className='psection-header'>Causes I care about</h2>
                                <ul><Text>
                                    <li>
                                        <b>Sustainability: </b>
                                        I have helped turtles in the Antartic, corals in the French Polynesia, trees around the world, and local bee hives. Explore more here: <a className='sustainability-links' href='https://coralgardeners.org/?gclid=Cj0KCQiAorKfBhC0ARIsAHDzsltT9yk3irj3A4zYIL7wTQ23F5pQOGthgfFGkn8cTWUnBSO2gzywKuQaAp7SEALw_wcB'> CoralGardeners</a>, <a className='sustainability-links' href='https://support.wwf.org.uk/adopt-an-animal'> WWF animals</a>
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
                    </div>
        </div>
        } 
    </>
    )
}

    
        



export default Personal