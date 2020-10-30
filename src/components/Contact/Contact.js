import React from 'react';
import ContactBody from './ContactBody/ContactBody';
import ContactTopPart from './ContactTopPart/ContactTopPart';

const Contact = () => {
    return (
        <div>
            <ContactTopPart></ContactTopPart>
            <ContactBody></ContactBody>
        </div>
    );
};

export default Contact;