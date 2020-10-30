import React from 'react';
import webDesign from '../../../image/web design.png';
import webDevelopment from '../../../image/web-development.png';
import graphics from '../../../image/grapgics design.jpg'

const Service = () => {
    return (
           <div className="container">
               <h1 className="text-center">My Services</h1>
               <div className="row text-center m-5">
               <div style={{width:'320px'}} className="card shadow-sm m-2">
                <div className="text-center pt-3 pb-3">
                    <img src= {webDesign} alt="" width="370" />
                </div>
                <div className="card-body">
                    <h3 className="card-text text-center">Web Design</h3>
                    <h5 className="card-text text-center">User Focused</h5>
                    <p className="card-text text-center">A website should be designed for the people who will use it,so that's exactly what I do. User focused design should be the primary goal of any website.</p>
                </div>
            </div>

            <div style={{width:'320px'}} className="card shadow-sm m-2">
                <div className="text-center pt-3">
                    <img src= {webDevelopment} alt="" width="300" />
                </div>
                <div className="card-body">
                    <h3 className="card-text text-center">Web Development</h3>
                    <h5 className="card-text text-center">Responsive and Fast</h5>
                    <p className="card-text text-center">Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                </div>
            </div>
            <div style={{width:'320px'}} className="card shadow-sm m-2">
                <div className="text-center pt-3">
                    <img src= {graphics} alt="" width="300" />
                </div>
                <div className="card-body">
                    <h3 className="card-text text-center">Graphics Design</h3>
                    <h5 className="card-text text-center">Creative Design</h5>
                    <p className="card-text text-center">Graphics design is art with a purpose. Graphics design can use image-based designs involving photos, illustrations, symbols, type-based design.,</p>
                </div>
            </div>
               </div>
           </div>
    );
};

export default Service;