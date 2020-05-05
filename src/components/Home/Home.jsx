import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navigation from '../Navigation';
import Footer from '../Footer';

class Home extends React.Component {


    render() {
        return (
            <div>
                <Navigation />
                <div className="home-wrapper">
                    <div className="intro-text">
                        <h1>Joel Lyons</h1>
                        <code className="intro-title">//Software Developer</code>
                        <p>
                            Hello, world! My name is Joel Lyons and I'm a software developer based in Lincoln, Nebraska. 
                            I have an interest in full-stack web development and design. Lately, I've been improving my front-end skills by learning about React.js!
                        </p>
                        <Link to="/contact"><button><span>Contact</span></button></Link>
                    </div>
                    <img src="/small-computer.png" />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;