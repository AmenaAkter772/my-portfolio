import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './AboutTopPart.css'

const AboutTopPart = () => {
    return (
        <div className="about">
            <Navbar></Navbar>
            <div className="mb-5 pb-5">
                <h1 className="text-center pt-5 text-white">About Me</h1>
                <h3 className="text-center text-white mb-5 pb-5">Find out who I am, where I'm from and what I'm<br/>all about</h3>
            </div>
        </div>
    );
};

export default AboutTopPart;