import {React, useState} from 'react'
import './Carousel.css';

const Carousel = ({listOfProjects}) => {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNext = () => {
        if (currentProjectIndex === listOfProjects.length -1) {
        return
        }
        else {
            setCurrentProjectIndex(currentProjectIndex + 1)
        }
    }

    const handlePrevious = () => {
        if (currentProjectIndex === 0) {
            return
        }
        else {
            setCurrentProjectIndex(currentProjectIndex -1)
        }
    }

    return (
    <>
        <div id='carousel-view'>
            <div id='first-item'>
                {listOfProjects[currentProjectIndex]}
            </div> 
            <div id='second-item'>
                {listOfProjects[currentProjectIndex + 1]}
            </div> 
            <div>
                <button className="button" id="button-previous" onClick={handlePrevious}> <i className="fa">&#xf100;</i></button>
                <button className="button" id="button-next" onClick={handleNext}><i className="fa">&#xf101;</i> </button>
            </div>    
        </div>    
    </>   
    )

}



export default Carousel

