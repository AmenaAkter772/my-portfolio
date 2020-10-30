import React from 'react';
import './ResumiTopPart.css'
import Navbar from '../../Navbar/Navbar';

const ResumeTopPart = () => {
    return (
        <div className="resume">
            <Navbar></Navbar>
            <div className="mb-5 pb-5">
                <h1 className="text-white text-center mt-5">My Resume</h1>
                <h3 className="text-white text-center mb-5 pb-5">It's my resume.In this resume clearly show my<br/> work, skills, technology.</h3>
            </div>
            
        </div>
    );
};

export default ResumeTopPart;