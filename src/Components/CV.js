import React from 'react'
import CV_indira from './CV_indira.pdf';


const resume = CV_indira

const CV = () => {

    return (
        <embed src={CV_indira} width="100%" height="800px" />
    )
}

export default CV