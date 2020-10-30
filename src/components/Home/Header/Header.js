import React from 'react';
import img from '../../../image/img2.png';
import Typical from 'react-typical';
import './Header.css';

const Header = () => {
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
                <button className="btn btn-primary btn-brand">About Me</button>
            </div>
            <div className="col-md-5 mr-auto ml-5 pl-5 love-pic">
                <img style={{width:'500px'}} src={img} alt="" className="img-fluid"/>
            </div>
        </main>
        </div>
    );
};

export default Header;