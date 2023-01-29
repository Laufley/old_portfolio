import {React, useState} from 'react'
import './Carousel.css';

const Carousel = ({listOfProjects}) => {

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleNext = () => {
        if (currentProjectIndex === listOfProjects.length -1) {
            setCurrentProjectIndex(0)
        }
        else {
            setCurrentProjectIndex(currentProjectIndex + 1)
        }
    }
    

    const handlePrevious = () => {
        if (currentProjectIndex === 0) {
            setCurrentProjectIndex(listOfProjects.length - 1)
        }
        else {
            setCurrentProjectIndex(currentProjectIndex -1)
        }
    }

    return (
    <>
        <div id='carousel-view'>
            <div className="arrow">
                <button className="arrow-top" onClick={handleNext}>Next</button>
                <button className="arrow-bottom" onClick={handlePrevious}>Previous</button>
            </div>
            <div id='first-item'>
                {listOfProjects[currentProjectIndex]}
            </div> 
            <div id='second-item'>
                {listOfProjects[currentProjectIndex + 1]}

            </div>
        </div>    
    </>   
    )

}


export default Carousel

