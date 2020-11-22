import React from 'react';
import NavbarSet from '../../Navbar/NavbarSet';
import './BlogTopPart.css'


const BlogTopPart = () => {
    return (
        <div className="blog">
            <NavbarSet></NavbarSet>
            <div className="mb-5 pb-5">
            <h1 className="text-white text-center mt-5"> My Blog</h1>
            <h3 className="text-white text-center mb-5 pb-5">Behind the scenes of products I've build, projects I've <br/>worked on and more. </h3>
            </div>
        </div>
    );
};

export default BlogTopPart;