import {React, useState} from 'react'
import Project from './Project';

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
        <div className="carousel">
            <button id="button-previous" onClick={handlePrevious}>Previous</button>
            <div>
                {listOfProjects[currentProjectIndex]}
            </div>
            <button id='button-next' onClick={handleNext}>Next</button>
            </div>
            
    )

}


export default Carousel