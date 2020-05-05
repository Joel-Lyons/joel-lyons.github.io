import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/"><img src="/home-link.png" /></Link></li>
                        <li><Link to="/about"><img src="/about-link.png" /></Link></li>
                        <li><Link to="/skills"><img src="/skills-link.png" /></Link></li>
                        <li><Link to="/projects"><img src="/projects-link.png" /></Link></li>
                        <li><Link to="/contact"><img src="/contact-link.png" /></Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
    
}

export default Navigation