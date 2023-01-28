import React from 'react'
import styled from "styled-components";
import App from '../App';

const Main = styled.div`
    display: grid;
    grid-template-areas: 
    'TopContent'
    'ButtonsWrapper'
    'Intro';
    flex-direction:row;
    `

const TopContent = styled.div`
    grid-area: TopContent;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background: linear-gradient(45deg, #ffffff,#f87171, #de3274, #ba5ee2, #4e9aec, #67e2b5, #40eeb7);
    background-size: contain;
`

const Title = styled.h1`
    width: 50%;
    margin-left: -2%;
    font-size: 5em;
    color: #fff; 
    padding: 1em;
    margin-top: 2%;
    `

const ButtonsWrapper = styled.div`
    display:grid;
    grid-area: ButtonsWrapper;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-left: 7.5%;
    margin-top: -6%;
    width: 20%;
    gap: 5px;
`

const Button1= styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0%;
    margin-bottom: 12%;
    justify-content: center;
    width: max-content;
    height: 3em;
    border-radius: 30em;
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
    }
    &:active {
    transform: translateY(-1px);
    }
`
const Button2= styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0%;
    margin-bottom: 15%;
    justify-content: center;
    width: max-content;
    height: 3em;
    border-radius: 30em;
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
    }
    &:active {
    transform: translateY(-1px);
    }
`




const Intro = styled.div`
display: flex;
grid-area: Intro;
`

const Professional = () => {

    return ( 
        <Main>
        <TopContent>
            <Title>Indira Borras Gonzalez</Title>
            <ButtonsWrapper>
                <Button1 id='Button' >Professional</Button1>
                <Button2 id='Button' >Personal</Button2>
            </ButtonsWrapper>
            <Intro>
            </Intro>
        </TopContent>
    </Main>
    
    )
}

export default Professional