import React from "react";
import Section from "../Shared/Section";
import './style.scss';
import ContactInfo from '../../Components/Contact/Contact-info'
import Form from '../../Components/Contact/Form';
const Contact = () => {
    return (
        <Section
            id='contact'
            title={`Any Questions? Feel free to Contact`} background='light' >
            <div className="contact-content-wrapper">
                <ContactInfo />
                <Form />
            </div>
        </Section >

    );
}

export default Contact;