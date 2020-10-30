import React from 'react';
import ProjectTopPart from './ProjectTopPart/ProjectTopPart';
import Footer from '../Footer/Footer';
import ProjectBody from './ProjectBody/ProjectBody';

const Projects = () => {
    return (
        <div>
            <ProjectTopPart></ProjectTopPart>
            <ProjectBody></ProjectBody>
            <Footer></Footer>
        </div>
    );
};

export default Projects;