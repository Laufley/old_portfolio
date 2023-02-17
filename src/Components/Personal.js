import {React, useState} from 'react'
import './Personal.css';
import styled from 'styled-components';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import goofy from './helpers/goofy.jpeg'

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
const Text = styled.p `
font-size:16px;
`

const Personal = () => {

    const [route, setRoute] = useState('/personal');
    
    return (
        <div>
        <Header route={route} setRoute={setRoute} />
        {route === '/personal' && <div>
        <Aside>
            <Picture src={personalImg}></Picture>
            <Details> 
                    <LinkStyle to='/CV'> <i className="fa">&#xf12e;</i> Résumé </LinkStyle>
                    <LinkStyle to='https://github.com/Laufley' target="_blank"><i className="fa fa-github"> GitHub</i></LinkStyle>
                    <LinkStyle to='https://www.linkedin.com/in/indira-borras/' target="_blank"><i className="fa fa-linkedin"> LinkedIn</i></LinkStyle>
            </Details>
        </Aside>
        <Main>
            <Intro><h1>I'm an explorer, a leader when needed <br></br>
                and a bit of a goof.</h1></Intro>
            <Content>
            <h2>Life</h2>
            <pre><Text> 
            life = list(range(1, 1001)) <br></br>
            print(life)<br></br><br></br>

            lemonade = 0<br></br>
            for lemons in life:<br></br>
            lemonade += lemons<br></br>
            print Lemonade</Text>
            </pre>
            <section>
                <h4>What is a Spaniard doing in Edinburgh, Indira?</h4>
                <Text>Good question. I sometimes wonder that myself. I moved here for love, leaving my previous career behind. And you know what? I don't regret it, if there is something out there to fight for, that is love - for cheesy as it sounds. Btw, in the end it didn't work out and we split up after 10y BUT! remember the lemons ;) </Text>

                <h4>What do you take from your previous work experiences?</h4>
                <Text>Well, everything! Because I'm a bit greedy haha <br></br><br></br>
                I'm very grateful for all the experiences I've had the opportunity to have and the amazing people I've crossed paths with. I've kept so many of these connections...<br></br>
                Never a dull moment, always moving when I got too comfortable so that I could keep improving myself. <br></br><br></br>
                When I moved countries from Spain leaving behind my career as a psychologyst in the hospital, my main priority (beyond having a basic income) was to learn English, that's why I happily started from sratch on a <b>waitress role</b> and then braved it into <b>customer service.</b><br></br><br></br>
                Once I started feeling comfortable talking with people all day in English, and my performance at work improved, I didn't hesitate to accept the promotion to the <b>Social Media</b> team which would allow me to work on my English writing skills. <br></br>
                It was fantastic! A brilliant cooperation among our small team to take care of different social media accounts for our clients. Eventually, it started to feel too predictible (well, as predictible as social media can be) so I focused more on taking on some learning courses, jumping into our processes to improve them, and eventually earning more autonomy on a more leading role within the team where I got to deliver training to the new members and have my first face-to-face interactions with one of our clients. <br></br><br></br>
                But once I did all of that... What was next for me? There was not much to look up for, really. So I decided to change careers. If I had done it once I could do it again, right?<br></br><br></br>
                By then, I believed that I couldn't access any good working opportunity because of my trajectory, so I got myself into recruitment/sales. "BUT" - I told myself - "I'll only do it under one self-imposed condition"; if I was to take that crazy jump, at least I wanted to make sure it was on an area I would enjoy, <i>so I chose <b>IT</b> recruitment.</i> There are a few reasons for WHY tech, but that would be a tangent.<br></br><br></br>
                <b>I've been an IT recruiter for almost 4 years now.</b> From junior to senior. From shy calls to delivering influencial market insights to my clients. And from being anxious at networking events to represent our company on a big tech event sponsored by one of our clients in Stockholm.<br></br>
                I have really enjoyed my path in IT recruitment, and I still can hardly believe how lucky I've been for having been trusted with the freedom of do things my way. I remember I was the only IT recruiter in <i>Stafffinders</i> by then, yet my manager and the CEO believed in me and supported me into growing a whole new IT department. I had only 6 months of experience by then! But that pressure brought the best of me and I started feeling more comfortable on the role and speaking with clients.<br></br>
                <i>Smart Hire IT recruitment Nordics</i> has been, however, my growing pot and free canvass. I joined the startup when we were only 4 in the team and I joined because we shared the same vision about recruiters<i>"I don't like recruiters, they are so cold. No wonder developers feel the same. I want to change the recruitment market! I want to work on a company that nurtures connections and spends the right amount of time on each different profile! I want our company to be different!" - Indira 2021. </i><br></br>My boss had the same vision, everyone on the team, really. And that's how we drove success while wholeheartedly enjoying what we did and how we did it. There are so many things I can say about this team... but that would take pages.<br></br> So yes, I became a senior recruiter in this company, and I took more responsabilities than were expected because I believed in what we were doing and I wanted to improve the way we did it. so I:<br></br>
                - Led a Social Media audit with the CEO - Which they had never done before. <br></br>
                - Joined forces with the CEO and together we created a new logo, rebranded the whole company, and created the most flashy website (thanks to the help of a developer): We are very proud of it and the reactions were fantastic.<br></br>
                - Became account manager of multiple accounts in EU: Succesful partnerships based on care and brutal-yet-carefuly-delivered-honesty when needed.<br></br>
                - Improved operations within the comany: Writing guides and templates for everyone to use.<br></br>
                - Brought in new techniques and approaches that are still in use because they work!<br></br>
                - Training, leading, mentoring new people... I love powerpoint and creating stuff for others.<br></br>
                <b>I was about to be promoted to <i>"Head of the creative deparment"</i></b> but I had reached a plateu already. I had achieved everything I expected from myself, and the promotion would only imply a change on salary and job title but my work would have been the same, in essence, of what I was already doing. And here is when the tilting moment comes.<br></br><br></br>
                I had already been in touch with developers daily for 4 years. Sourcing, interviewing, socialising... and what they did trully amazed me. It sounded so exciting! So strage! So full of possibilities! An endless ocean of knowledge-beads. Slowly, over the years, I was getting more and more into the idea of programming but I would never take a jump without planning it well. It never seemed to be the right moment and then... <b>BOOM!! codeBEAM conference 2022, Stockholm.</b><br></br>
                Basically, a succesful partnership with one of my clients led to the invitation to a BIG tech event they sponsor every year. And when I arrived, and spoke with everyone about their projects, about their goals, and attended all the conferences and panels I was left astounded. So. Many. Interesting. Topics! So much innovation going on. So many bright ideas, so many minds buzzing... and I felt part of it. I really felt comfortable in that environment. WHY DID IT TAKE ME SO MANY YEARS TO FIND THIS OUT?<br></br><br></br>

                So here I am. Yet again, changing careers. But this time, with endless learning opportunities.<br></br>
                And here is where I belong.

                </Text>
            </section>
            <section>
                <h2>Hobbies</h2>
                <Text>
                Life is too short and has too much to offer. <br></br>
                It's quite humbling to think about all the things awaiting for us to discover.<br></br>
                And I want to learn as much as I can. Maybe that's why I have so many hobbies! 
                </Text>
                <ul>
                    <Text>
                    <li><b>Writing:</b> I've been writing collaboratively with people all over the globe for years!</li>
                    <li><b>Reading:</b> Hard sci-fi and Hard fantasy prefered</li>
                    <li><b>Miniature painting:</b> We use them in our team's D&D camapigns</li>
                    <li><b>Roleplaying like D&D or GURPS</b>: You would be amazed of how much you can grow and learn from it. Very collaborative too ;)</li>
                    <li><b>Boardgames and videogames:</b> Platform eclectic</li>
                    <li><b>Piano</b> just starting but one of my songs made it into an indie game!</li>
                    <li><b>Video editing:</b> Blender for modelling is so complex!</li>
                    <li><b>Documentaries:</b> About science, nature and space</li>
                    <li><b>Hiking:</b> I belong to nature. I'm a mountain goat</li>
                    <li><b>Travelling:</b> Discovering about the world and other cultures enrichens your soul</li>
                    <li><b>Improving and fixing things:</b> I can't help it.</li>
                    </Text>
                </ul>
            </section> 
            <section>
                <h2>Causes I care about</h2>
                <ul><Text>
                    <li>
                        <b>Sustainability:</b> 
                        I've currently adopted turtles in the Antartic, corals in Oceania, trees, and bee hives.<br></br> 
                        Some links for the curious: 
                        <a className='sustainability-links' href='https://coralgardeners.org/?gclid=Cj0KCQiAorKfBhC0ARIsAHDzsltT9yk3irj3A4zYIL7wTQ23F5pQOGthgfFGkn8cTWUnBSO2gzywKuQaAp7SEALw_wcB'> CoralGardeners</a>, <a className='sustainability-links' href='https://support.wwf.org.uk/adopt-an-animal'> WWF animals</a>
                    </li>
                    <li><b>Children in need</b></li>
                    <li><b>Education and equality of ressources across the globe</b> A big ongoing project of mine is to get more involved in the future in initiatives that help communities get better access to education</li>
                    </Text>
                </ul>
            </section>
            <section>
            <h3>And...</h3>
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
            </Content>
        </Main>
        </div>}
        </div>
    
    );
}

export default Personal