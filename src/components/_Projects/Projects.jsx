import React from 'react';
import BSNavigation from '../Navigation/BSNavigation';
import Footer from '../Footer/Footer';
import { Card, Button } from 'react-bootstrap';
import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <div id="app">
                <BSNavigation />
                <div id="projects-wrapper">
                    <Card style={{width: '40rem' }}>
                        <Card.Body>
                            <Card.Img src="/workinprogress.png" alt="work in progress image" />
                        </Card.Body>
                    </Card>

                    <Card style={{width: '40rem' }}>
                        <Card.Img variant="top" src="/portfoliosite.jpg" alt="portfolio website screenshot" />
                        <Card.Body>
                            <Card.Title>Portfolio Website</Card.Title>
                            <Card.Text>
                                <div>A website I created to learn about React.js and provide additional information about my projects.</div>
                                <ul>
                                    <li>Designed a simple and modern user interface.</li>
                                    <li>Learned basic React.js concepts like components, states, and handling events.</li>
                                    <li>Deployed using ‘GitHub Pages’</li>
                                </ul>
                                <div><strong>Utilized:</strong> React.js, JavaScript, JSX, npm, React-Router, Git version control, and VSCode/Chrome Developer Tools for debugging.</div>
                            </Card.Text>
                            <Button variant="secondary" className="github-buttons mt-3"><a href="https://github.com/Joel-Lyons/Joel-Lyons.github.io">Github Repo</a></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{width: '40rem' }}>
                        <Card.Img variant="top" src="/pizzaemporium.jpg" alt="pizza emporium website screenshot" />
                        <Card.Body>
                            <Card.Title>Pizza Emporium</Card.Title>
                            <Card.Text>
                                <div>Pizza restaurant website created for a school assignment using C#.NET Core v2.2, Entity framework, and the Identity API for user authentication.</div>
                                <ul>
                                    <li>Gained experience using the MVC design pattern.</li>
                                    <li>Used the Identity API for user authentication. Custom IdentityUser class, login page, register page, and profile page.</li>
                                    <li>Learned basic Entity framework concepts like "code first" migrations (creating data model classes), updating the database, and querying data.</li>
                                </ul>
                                <div><strong>Utilized:</strong> C#, .NET Core v2.2, JavaScript/jQuery, Bootstrap, Git version control, and Visual Studio 2017.</div>
                            </Card.Text>
                            <Button variant="secondary" className="github-buttons mt-3"><a href="https://github.com/Joel-Lyons/pizza-emporium-v2">Github Repo</a></Button>
                        </Card.Body>
                    </Card>

                    <Card style={{width: '40rem' }}>
                        <Card.Img variant="top" src="/budgetapp.jpg" alt="budget app screenshot" />
                        <Card.Body>
                            <Card.Title>Budget App</Card.Title>
                            <Card.Text>
                                <div>Budget application created on a LAMP stack for my web server scripting class at Southeast Community College.</div>
                                <ul>
                                    <li>Learned about PHP and general web server scripting.</li>
                                    <li>Developed the database ensuring the budget data is normalized to improve data integrity.</li>
                                    <li>Gained experience using the MVC design pattern.</li>
                                </ul>
                                <div><strong>Utilized:</strong> Full Stack Web Development on a LAMP stack, JavaScript/jQuery/Bootstrap front-end, MySQL, Git version control, and VSCode/Chrome Developer Tools/XDebug for debugging.</div>
                            </Card.Text>
                            <Button variant="secondary" className="github-buttons mt-3"><a href="https://github.com/Joel-Lyons/budget-maker">Github Repo</a></Button>
                        </Card.Body>
                    </Card>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Projects;