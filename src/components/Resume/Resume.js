import React from 'react';
import ResumeBody from './ResumeBody/ResumeBody';
import ResumeTopPart from './ResumeTopPart/ResumeTopPart';
import Footer from '../Footer/Footer'

const Resume = () => {
    return (
        <div>
            <ResumeTopPart></ResumeTopPart>
            <ResumeBody></ResumeBody>
            <Footer></Footer>
        </div>
    );
};

export default Resume;