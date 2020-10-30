
import React from 'react';
import { Button } from 'react-bootstrap';
import resume from '../../../image/resume.png';
import './ResumeBody.css'

const ResumeBody = () => {
    return (
        <div className="text-center">
             <a href='https://drive.google.com/file/d/1HcB_w4M-TxBBuOaNVlb1vlv09VvkhOpR/view?usp=sharing' target='blank'> <Button style={{width:'1000px'}} className="btn btn-primary btn-resume">Download Resume</Button></a>
             <img style={{width:'1000px'}} src={resume} alt=""/>
        </div>
    );
};

export default ResumeBody;