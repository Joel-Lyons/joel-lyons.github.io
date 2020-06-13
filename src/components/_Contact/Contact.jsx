import React from 'react';
import './Contact.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import {Form, Button} from 'react-bootstrap';

class Contact extends React.Component {
    render() {
        return (
            <div className="app">
                <Navigation />
                <div id="contact-wrapper">
                    <Form className="contact">
                        <h1>Contact</h1>

                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Joel Lyons" />

                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="email@example.com" />

                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="RE: something?" />

                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />

                        <Button type="submit" placeholder="Type your message here..." className="float-right">
                            Send
                        </Button>
                    </Form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;