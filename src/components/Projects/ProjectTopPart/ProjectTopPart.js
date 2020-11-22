import React from 'react';
import NavbarSet from '../../Navbar/NavbarSet';
import './ProjectTopPart.css'

const ProjectTopPart = () => {
    return (
        <div className="project">
            <NavbarSet></NavbarSet>
            <div className="mb-5 pb-5">
            <h1 className="text-white text-center mt-5">My Projects</h1>
            <h3 className="text-white text-center mb-5 pb-5">For over 2 years I've been designing and<br/>developing websites. Below are some of my <br/>favourite projects</h3>
            </div>
        </div>
    );
};

export default ProjectTopPart;