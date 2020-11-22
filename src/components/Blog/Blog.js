import React from 'react';
import BlogTopPart from './BlogTopPart/BlogTopPart';
import Footer from '../Footer/Footer';
import BlogBodyPart from './BlogBodyPart/BlogBodyPart';

const Blog = () => {
    return (
        <div>
            <BlogTopPart></BlogTopPart>
            <BlogBodyPart></BlogBodyPart>
            <Footer></Footer>
        </div>
    );
};

export default Blog;