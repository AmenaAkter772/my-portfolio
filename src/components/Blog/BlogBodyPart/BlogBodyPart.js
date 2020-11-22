import React from 'react';
import { Card, Row } from 'react-bootstrap';
import javaScript from '../../../image/blog-img/javaScript.png';
import react from '../../../image/blog-img/React.png';
import es6 from '../../../image/blog-img/ES6.png';
import dom from '../../../image/blog-img/dom.png';
import node from '../../../image/blog-img/node.png';
import mongodb from '../../../image/blog-img/mongodb.png';
import './BlogBodyPart.css'

const BlogBodyPart = () => {
    return (
        <div>
            <Row md={6} sm={12} lg={3} xl={4} className="text-center m-3 justify-content-center text-white">
                <Card className="m-3">
                    <Card.Body className="text-style">
                        <Card.Title style={{color:'silver', fontSize:'35px'}}>JavaScript</Card.Title>
                        <Card.Text>
                        <p className="m-3">JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3">
                    <Card.Body className="text-style">
                        <Card.Title style={{color:'silver', fontSize:'35px'}}>React.js</Card.Title>
                        <Card.Text>
                            <p className="m-3">
                            React is a JavaScript library for building user interfaces. React.JS is an open-source, component-based front end library. It designs simple views for each state for any kind of application. A react application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be connected with other components to allow complex applications to be built easily.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3">
                    <Card.Body className="text-style">
                        <Card.Title style={{color:'silver', fontSize:'35px'}}>ES6</Card.Title>
                        <Card.Text>
                            <p className="m-3">
                            ECMAScript 6, also known as ES6 and ECMAScript 2015, was the second major revision to JavaScript.JavaScript ES6 brings new syntax and new awesome features to make your code more modern and more readable. It allows you to write less code and do more. ES6 introduces us to many great features like arrow functions, template strings, class destruction, Modules… and more.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3">
                    <Card.Body className="text-style">
                        <Card.Title style={{color:'silver', fontSize:'35px'}}>DOM</Card.Title>
                        <Card.Text>
                            <p className="m-3">
                            DOM, full meaning is Document Object Model. It is a World Wide Web Consortium standard logical representation of any webpage. In easier words, DOM is a tree-like structure that contains all the elements and it’s properties of a website as it’s nodes. It represents the page so that programs can change the document structure, style, and content.The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3">
                    <Card.Body className="text-style">
                        <Card.Title style={{color:'silver', fontSize:'35px'}}>Node.js</Card.Title>
                        <Card.Text>
                        <p className="m-3">Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. ... js is an open source, cross-platform runtime environment for developing server-side and networking applications.Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.</p>
                   
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-3">
                    <Card.Body className="text-style">
                        <Card.Title style={{color:'silver', fontSize:'35px'}}>Mongodb</Card.Title>
                        <Card.Text>
                            <p className="m-3">
                              MongoDB is a cross-platform document-oriented database program.MongoDB’s document model is simple for developers to learn and use, while still providing all the capabilities needed to meet the most complex requirements at any scale. MongoDB provide drivers for 10+ languages, and the community has built dozens more.MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time 
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

export default BlogBodyPart;