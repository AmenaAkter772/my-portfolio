import React from 'react';
import './ProjectBody.css';
import { Button, Card, Row } from 'react-bootstrap';
import creative from '../../../image/creative agency.png';
import volunteer from '../../../image/volunteer network.png';
import travel from '../../../image/travel1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import data from '../CarouselItem/CarouselItem';

const ProjectBody = () => {
    const settings ={
        dots:true,
        slidesToShow:3,
        slidesToScroll:3,
        centerMode:true,
        autoplay:true,
        autoPlaySpeed:3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    }
    return (
        <>
        <div>
            <section>
                <div className="text-center">
                    <h2 className="mb-3">Full Stack Web Application</h2>
                </div>
                <Row className="text-center m-2 justify-content-center text-white">
                    <Card className="m-2 card1" style={{width: '18rem'}}>
                        <Card.Img variant="top" src={creative}/>
                        <Card.Body className="text-style">
                            <Card.Title>Creative Agency</Card.Title>
                            <Card.Text>
                                <p>
                                    Creative Agency providing services. Customer can place order any services.Admin can add new services and Other admin. 
                                </p>
                            </Card.Text>
                            <Row className="text-center ml-2">
                                <Card className="m-2">
                                    <a href="https://github.com/AmenaAkter772/creative-agency-client" target="blank">
                                        <Button><FontAwesomeIcon className="mr-1" icon={faGithub} />Github</Button>
                                    </a>
                                </Card>
                                <Card className="m-2">
                                    <a href="https://creatives-agency-project.web.app/" target= "blank">
                                        <Button><FontAwesomeIcon className="mr-1" icon={faGlobe} />Website</Button>
                                    </a>
                                </Card>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="m-2 card2" style={{width: '18rem'}}>
                        <Card.Img variant="top" src={volunteer}/>
                        <Card.Body className="text-style">
                            <Card.Title>Volunteer Network</Card.Title>
                            <Card.Text>
                                <p>
                                   It's a full stack responsive web application. People can select and register any volunteer task and also see the task  
                                </p>
                            </Card.Text>
                            <Row className="text-center ml-2">
                                <Card className="m-2">
                                    <a href="https://github.com/AmenaAkter772/network-volunteer-website" target="blank">
                                        <Button><FontAwesomeIcon className="mr-1" icon={faGithub} />Github</Button>
                                    </a>
                                </Card>
                                <Card className="m-2">
                                    <a href="https://volunteer-network-website.web.app/" target= "blank">
                                        <Button><FontAwesomeIcon className="mr-1" icon={faGlobe} />Website</Button>
                                    </a>
                                </Card>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card className="m-2 card3 shadow" style={{width: '18rem'}}>
                        <Card.Img variant="top" src={travel}/>
                        <Card.Body className="text-style">
                            <Card.Title>Travel Guru</Card.Title>
                            <Card.Text>
                                <p>
                                   It's a hotel booking web application. you can select your favourite places. you will get hotel suggestion based on your select.  
                                </p>
                            </Card.Text>
                            <Row className="text-center ml-2">
                                <Card className="m-2">
                                    <a href="https://github.com/AmenaAkter772/travel-guru-awesome-project" target="blank">
                                        <Button><FontAwesomeIcon className="mr-1" icon={faGithub} />Github</Button>
                                    </a>
                                </Card>
                                <Card className="m-2">
                                    <a href="https://travel-guru-awesome-project.web.app/" target= "blank">
                                        <Button><FontAwesomeIcon className="mr-1" icon={faGlobe} />Website</Button>
                                    </a>
                                </Card>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </section>
            </div>
            <section className="container-fluid mt-5 mb-5 pb-5">
                 <div className="text-center mt-3 mb-5">
                     <h3>Some more responsive design</h3>
                 </div>
                <Slider className= 'mt-3 py-3 container-fluid'  {...settings}>
                     {
                         data.map(item => (
                             <Row className="container w-100 row">
                                 <Card className="text-center">
                                     <Card.Img className="img-fluid card-carousel" src={item.img} alt="" style={{height: '40vh'}}/>
                                     <h4 className="py-3 slide-style">{item.name}</h4>
                                 </Card>
                             </Row>
                         ))
                     }
                </Slider>
            </section>
            
        </>
    );
};

export default ProjectBody;