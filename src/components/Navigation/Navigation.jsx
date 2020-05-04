import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <div>
                <img src="menu_hamburger.png" alt="hamburger navigation icon" id="nav-hamburger" onClick={() => this.setState({isOpen: !this.state.isOpen})} />
                <nav className={this.state.isOpen ? "show" : "hidden"}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
    
}

export default Navigation