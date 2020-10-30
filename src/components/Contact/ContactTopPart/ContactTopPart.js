import React from 'react';
import './ContractTopPart.css';
import Navbar from '../../Navbar/Navbar';

const ContactTopPart = () => {
    return (
        <div className="contact">
            <Navbar></Navbar>
            <div className="mb-5 pb-5">
                <h1 className="text-white text-center mt-5">Contact Me</h1>
                <h3 className="text-white text-center mb-5 pb-5">If you'd like to chat about a project please fill in the from <br/>below and I'll get back within 1-2 days</h3>
            </div>
        </div>
    );
};

export default ContactTopPart;