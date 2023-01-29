import './Project.css';


const Project = ({image, title, stack, link}) => {

    return (
        <li id="wrapper">
            <img id="pic" src={image}/>
            <div id="details">
                <div id="project-title"><i className="fa" style={{color: '#5999E8'}}>&#xf02b;</i> {title}</div>
                <p id="stack"><i className="fa fa-code" style={{color: '#5999E8'}}></i> {stack}</p> 
                <span id="info">
                    <a href={link} id="link-text"> <i className="fa fa-github" style={{color: '#5999E8'}}></i> Github Link</a>
                </span>
            </div>
        </li>
    )

};



export default Project;

