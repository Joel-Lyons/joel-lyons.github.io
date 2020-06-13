import React from 'react';
import './Contact.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class Contact extends React.Component {
    render() {
        return (
            <div className="app">
                <Navigation />
                <div id="contact-wrapper">
                    <div className="contact">
                        <h1>Contact</h1>
                        <hr/>
                        <div className="name">
                            <label for="name">Name</label><br/>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="subject">
                            <label for="subject">Subject</label><br/>
                            <input type="text" name="subject" id="subject" />
                        </div>
                        <div className="body">
                            <label for="body">Message</label><br/>
                            <textarea rows="10" cols="50" name="body" id="body"></textarea>
                        </div>
                        <div className="submit">
                            <button id="submit" name="submit">Send</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;