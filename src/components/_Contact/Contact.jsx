import React from 'react';
import './Contact.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import {Form, Button} from 'react-bootstrap';

class Contact extends React.Component {
    handleFormChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    }

    sendMail = (e) => {
        e.preventDefault();
        window.open("mailto:joel.lyons@outlook.com?cc=" + this.state.email + "&subject=" + this.state.subject + "&body=" + this.state.message);
    }

    render() {
        return (
            <div className="app">
                <Navigation />
                <div id="contact-wrapper">
                    <Form className="contact">
                        <h1>Contact</h1>
                        <hr/>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={this.handleFormChange} name="email" type="email" placeholder="email@example.com" />

                        <Form.Label>Subject</Form.Label>
                        <Form.Control onChange={this.handleFormChange} name="subject" type="text" placeholder="RE: something" />

                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange={this.handleFormChange} as="textarea" rows="3" name="message" />

                        <Button onClick={this.sendMail} type="submit" className="float-right">
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