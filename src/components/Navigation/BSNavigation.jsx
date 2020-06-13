import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
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
                            <Nav.Link href="/experience">Experience</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default BSNavigation