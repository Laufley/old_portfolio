import React from 'react'
import CV_indira from './helpers/CV_indira.pdf';

const CV = () => {

    return (
        <embed src={CV_indira} width="100%" height="800px" />
    )
}

export default CV