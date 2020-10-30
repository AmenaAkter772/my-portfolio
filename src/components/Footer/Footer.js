import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';

const Footer = () => {
    const history = useHistory();
    const addHandler = () => {
        history.push("/contact")
    }
    return (
        <div className="footer">
            <div style={{height:'450px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1 className="text-white">Let's Work Together</h1>
                <h3 className="text-white">Have a project you'd like to discuss?</h3>
                <button onClick={addHandler} className="btn btn-primary btn-footer">Get in Touch</button>
            </div>
            <div className="icons col-md-5 mr-auto ml-5 pl-5">
                <ul >
                    <li className="mb-2">
                        <a className="text-white" href="https://www.linkedin.com/in/amena-akter-8597701a4/"><FontAwesomeIcon className="mr-3" icon={faLinkedin} />Linkedin</a>
                    </li>
                    <li className="mb-2">
                        <a className="text-white" href="https://github.com/AmenaAkter772"><FontAwesomeIcon className="mr-3" icon={faGithub} />Github</a>
                    </li>
                    <li className="mb-2">
                        <a className="text-white" href="https://www.facebook.com/profile.php?id=100014651687640"><FontAwesomeIcon className="mr-3" icon={faFacebook} />Facebook</a>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="text-white text-center">
           <p><FontAwesomeIcon icon={faCopyright} /> {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
        </div>
    );
};

export default Footer;