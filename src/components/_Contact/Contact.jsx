import React from 'react';
import './Contact.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

class Contact extends React.Component {
    render() {
        return (
            <div className="app">
                <Navigation />
                <h1>Contact</h1>
                <Footer />
            </div>
        );
    }
}

export default Contact;