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
    border: 1px solid #555;
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
                    <LinkStyle to='/CV'> 🚀 Résumé </LinkStyle>
                    <LinkStyle to='https://github.com/Laufley' target="_blank"><i class="fa fa-github"> GitHub</i></LinkStyle>
                    <LinkStyle to='https://www.linkedin.com/in/indira-borras/' target="_blank"><i class="fa fa-linkedin"> LinkedIn</i></LinkStyle>
            </Details>
        </Aside>
        <Main>
            <Intro><h1>I'm a martial artist, a psychologist , and a bit of a goof.</h1></Intro>
            <Content>
            <h2>Life</h2>
            <p> lalala </p>
            <h2>Hobbies</h2>
            <p> have over a dozen</p>
            <h2>Would you like to know What I consider to be the most unique, irreplacable, and special thing in existence and no existence </h2>
            </Content>
        </Main>
        </div>}
        </div>
    
    );
}

export default Personal