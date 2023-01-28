import styled from 'styled-components';
import Header from '../Components/Header';

const Aside = styled.div`
float: right;
position: sticky;
top: 0;
margin-right: 25%;
margin-top: -4%;
`
const Picture = styled.img`
    width: 80%;
    padding: 5px;
    border: 1px solid #555;
    width: 300px;
    height: 200px;
    background-color: white;
    vertical-align: middle;
`
const Details = styled.div`
display: flex;
list-style: none;
flex-direction: row;
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


const Home = () =>{
    

    return (
    <>
        <Header/>
        <Aside>
            <img src='src/profile_pic.jpeg'></img>
            <Details> 
                <ul>
                    <li>Résumé</li>
                    <li>GitHub</li>
                    <li>LinkedIn</li>   
                </ul>
            </Details>
            <Button>Projects</Button>
        </Aside>
        <Main>
            <Intro><h1>I am a software engineer with experience in this and this and that</h1></Intro>
            <Content>
            <h2>Web development</h2>
            <h4>JavaScript</h4>
            <p> have over a dozen years developing dynamic web applications in various languages and frameworks. I have built fully backend rendered applications, single-page applications, and many in between. In doing so I have gained deep experience in HTML, CSS, REST, and GraphQL.</p>
            <h4>Python</h4>
            <p> have over a dozen</p>
            <h2>Databases</h2>
            <h4>I have long experience with SQL databases (PostgreSQL, mySQL, and SQLite)
            I was one of the primary maintainers of the neo4j gem for many years and I worked as a developer advocate for Neo4j
            I have also worked with MongoDB, Elasticsearch, and Redis </h4>
            <h2>Soft Skills</h2>
            <h4>Though other roles</h4>
            </Content>
        </Main>
    </>
    );
}
    
export default Home;

