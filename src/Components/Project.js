import {React, useState} from 'react'
import './Project.css';
import ProjectByIdPage from './ProjectByIdPage';
import { Link } from 'react-router-dom';


const Project = ({image, title, stack, link, id, goal, solution, duration}) => {

    const [selectedProjectId, setSelectedProjectId] = useState(null)

    const handleClick = (evt) => {
        setSelectedProjectId(id)
    }

    return (
    <>
        <li id="wrapper">
            <img id="pic" src={image} />
            <div id="details">
                <div id="project-title"><i className="fa" style={{color: '#5999E8'}}>&#xf02b;</i> {title}</div>
                <p id="stack"><i className="fa fa-code" style={{color: '#5999E8'}}></i> {stack}</p> 
                <Link to={`/Projects/${id}`} onClick={handleClick}>Click to go to project page</Link>
                {/* <span id="info"> 
                    <a href={link} id="link-text"> <i className="fa fa-github" style={{color: '#5999E8'}}></i> Github Link</a>
                </span> */}
            </div>
        </li>  
    </>   
    )

};

export default Project;




