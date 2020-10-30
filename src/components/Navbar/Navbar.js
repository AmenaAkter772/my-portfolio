import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo3.png'

const Navbar = () => {
    return (
        <nav style={{cursor:'pointer'}} className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" aria-label="Toggle navigation" id="navbarSupportedContent">
                <Link to="/" className="">
                  <a className="nav-link mr-auto" to="/"><img style={{width:'40px'}} src={logo} alt=""/> </a>
                </Link>
                 
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/" className="">
                            <a className="nav-link mr-5 text-white">Home </a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/projects" className="">
                            <a className="nav-link mr-5 text-white">Project</a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/about" className="">
                            <a className="nav-link mr-5 text-white">About</a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/blog" className="">
                            <a className="nav-link mr-5 text-white">Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/contact" className="">
                            <a className="nav-link mr-5 text-white">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;