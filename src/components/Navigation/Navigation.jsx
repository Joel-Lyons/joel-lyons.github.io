import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const LINKS = [
    {id: 1, isBrand: true, to: "/", text: "Joel Lyons"},
    {id: 2, isBrand: false, to: "/experience", text: "Experience"},
    {id: 3, isBrand: false, to: "/projects", text: "Projects"},
    {id: 4, isBrand: false, to: "/contact", text: "Contact"}
]

class NavLink extends React.Component {
    render() {
        return (
            <li className={this.props.isBrand ? 'navBrand' : 'navLink'}><Link to={this.props.to}>{this.props.text}</Link></li>
        );
    }
}

class NavList extends React.Component {
    render() {
        const rows = [];
        this.props.links.forEach((link) => {
            rows.push(
                <NavLink key={link.id} isBrand={link.isBrand} to={link.to} text={link.text} />
            );
        });

        return (
            <ul>
                {rows}
            </ul>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div id="nav-wrapper">
                <nav>
                    <NavList links={LINKS} />
                </nav>
            </div>
        );
    }
}

export default Navigation