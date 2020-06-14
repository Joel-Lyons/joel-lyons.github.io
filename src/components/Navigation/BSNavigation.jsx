import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BSNavigation.css';

class BSNavigation extends React.Component {
    render() {
        return (
            <div id="nav-wrapper">
                <Navbar collapseOnSelect expand="lg">
                    <div className="customNavBrand">
                        <Navbar.Brand href="/">Joel Lyons</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto customNav">
                            <Link to="/experience" className="nav-link">Experience</Link>
                            <Link to="/projects" className="nav-link">Projects</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default BSNavigation