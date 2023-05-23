import React from 'react'
import styled, { css } from "styled-components";
import { Link } from "react-router-dom"; 



const Main = styled.div`
display: grid;
grid-template-areas: 
'TopContent'
'ButtonsWrapper';
flex-direction:row;

`

const TopContent = styled.div`
grid-area: TopContent;
grid-template-columns: 1fr 1fr;
align-items: center;
background: linear-gradient(45deg, #ffffff,#f87171, #de3274, #ba5ee2, #4e9aec, #67e2b5, #40eeb7);
background-size: contain;
height: 100%;
`

const Title = styled.h1`
width: 50%;
margin-left: -2%;
font-size: 4em;
color: #fff; 
padding: 1em;
margin-top: 2%;

@media (max-width: 768px) {
  width: 20%;
  margin-bottom: 2%;
  margin-left: -3%;
}
`

const ButtonsWrapper = styled.div`
display:grid;
grid-area: ButtonsWrapper;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-content: center;
width: 60%;
margin-left: 7.5%;
margin-top: 2%;
width: 20%;
gap: 5px;

@media (max-width: 820px) {
  width: 20%;
  margin-bottom: 3%;
  margin-left: 13%;
}
`

const Button= styled.button`
display: flex;
align-items: center;
justify-content: center;
border-radius: 0%;
margin-bottom: 12%;
justify-content: center;
width: max-content;
height: 3rem;
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

@media (max-width: 768px) {
  width: 20%;
  margin-bottom: 2%;
  margin-left: 17%;
}
`

const Button1 = styled(Button)`
margin-bottom: 20%;
margin-left: 15%;

@media (max-width: 768px) {
    margin-bottom: 10%;
    margin-left: 30%;
  }

@media (max-width: 432px) {
  margin-bottom: 10%;
  margin-left: 30%;
}
`

const Button2 = styled(Button)`
margin-left: 30%;
margin-bottom: 25%;

@media (max-width: 768px) {
    margin-bottom: 12%;
    margin-left: 40%;
  }
`

const LinkStyled = styled(Link)`
text-decoration: none;
` 

const Header = ({ route, setRoute }) => {
        

    return (
    <Main>
        <TopContent>
        <Title>Indira Borras Gonzalez</Title>
        <ButtonsWrapper>
        <LinkStyled to="/portfolio"><Button1>Professional</Button1></LinkStyled>
        <LinkStyled to="/Personal"><Button2>Personal</Button2></LinkStyled>
        </ButtonsWrapper>
        </TopContent>
    </Main>
    )
    
}

export default Header

// const Button1= styled(Button)


