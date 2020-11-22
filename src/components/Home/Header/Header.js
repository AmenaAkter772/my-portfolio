import React from 'react';
import img from '../../../image/img2.png';
import Typical from 'react-typical';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import resume from '../../../image/resume/Amena Akter Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => { 
    const history= useHistory();
    const addHandler = () => {
        history.push('/resume')
    }
    return (
        <div className="header">
            <main className="row d-flex align-items-center topPart">
            <div className="col-md-5 offset-md-1 header-text">
                <h1 className="text-white ani-mation">Hey, I'm Amena</h1>
                <Typical className="text-white"
                    steps={['A Front-End Web Developer', 1000, 'And Graphics Designer', 1000]}
                    loop={Infinity}
                    wrapper="p"
                />
                <p className="text-white">I'm a front-end web developer from <br/> Narayanganj, Dhaka, Bangladesh.I create<br/> responsive web application and make user friendly.</p>
                <div>
                    <Link to={resume} target="_blank" download className="btn btn-primary btn-brand text-white" >
                    <FontAwesomeIcon className="mr-3" icon={faDownload} />
                        My Resume</Link>
                </div>
            </div>
            <div className="col-md-5 mr-auto ml-5 pl-5 love-pic">
                <img style={{width:'500px'}} src={img} alt="" className="img-fluid"/>
            </div>
        </main>
        </div>
    );
};

export default Header;