import {React, useState} from 'react'
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
        {route === 'personal' && <div>This is the personal page</div>}
        <Aside>
            <Picture src='src/personal_pic.jpeg'></Picture>
            <Details> 
                <ul>
                    <li>Résumé</li>
                    <li>GitHub</li>
                    <li>LinkedIn</li>   
                </ul>
            </Details>
        </Aside>
    </div>
    );
}

export default Personal