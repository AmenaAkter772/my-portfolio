
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../../../image/myResume.png';
import './ResumeBody.css'
import myResume from '../../../image/resume/Amena Akter Resume.pdf'

const ResumeBody = () => {
    return (
        <div className="text-center">
            <Link to={myResume} target= '_blank' download>
              <Button style={{width:'1000px'}} className="btn btn-primary btn-resume">Download Resume</Button>
            </Link>
             <img style={{width:'1000px'}} src={resume} alt=""/>
        </div>
    );
};

export default ResumeBody;