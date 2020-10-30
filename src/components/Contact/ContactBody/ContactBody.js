import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ContactBody.css'

const ContactBody = () => {
    return (
           <div className="text-center justify-content-center align-items-center mb-5 pb-5">
               <div className="container w-50">
                <div>
                    <h2>Get in touch</h2>
                </div>
                <div>
                    <Form action="https://submit-form.com/2kAoz9h1">
                        <Form.Group>
                            <Form.Control className="text" type="text" name="name" placeholder="Your Name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className="text" type="email" name="email" placeholder="Your Email"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className="text" type="textarea" as="textarea" rows={4} placeholder=""/>
                        </Form.Group>
                        <Button type="submit" className="btn btn-primary btn-brand w-100">Send</Button>
                    </Form>
                </div>
               </div>
           </div>
    );
};

export default ContactBody;