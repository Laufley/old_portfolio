import './Project.css';


const Project = ({image, title, stack}) => {

    return (
        <li id="wrapper">
            <img id="pic" src={image}/>
            <div id="details">
                <div id="project-title">{title}</div>
                <p id="stack">{stack}</p> 
                <span id="info">
                    <a href="" >Like</a> &#8226;  <a href="">Reply</a>
                </span>
            </div>
        </li>
    )

};



export default Project;