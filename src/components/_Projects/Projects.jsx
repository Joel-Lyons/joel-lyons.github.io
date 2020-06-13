import React from 'react';
import './Projects.css';
import BSNavigation from '../Navigation/BSNavigation';
import Footer from '../Footer/Footer';

class Projects extends React.Component {
    render() {
        return (
            <div id="app">
                <BSNavigation />
                <div id="projects-wrapper">
                    <div className="project-thumbnail">
                        <img src="/workinprogress.png" alt="portfolio website screenshot" />
                    </div>

                    <div className="project-thumbnail">
                        <h1>Portfolio Website</h1>
                        <img src="/portfoliosite.jpg" alt="portfolio website screenshot" />
                        <div className="project-text-overlay">
                            <section>
                                <p>A website I created to learn about React.js and provide additional information about my projects.</p>
                                <ul>
                                    <li>Designed a simple and modern user interface.</li>
                                    <li>Learned basic React.js concepts like components, states, and handling events.</li>
                                    <li>Deployed using ‘GitHub Pages’</li>
                                </ul>
                                <p><strong>Utilized:</strong> React.js, JavaScript, JSX, npm, React-Router, Git version control, and VSCode/Chrome Developer Tools for debugging.</p>
                            </section>
                        </div>
                    </div>

                    <div className="project-thumbnail">
                        <h1>Pizza Emporium</h1>
                        <img src="/pizzaemporium.jpg" alt="pizza emporium website screenshot" />
                        <div className="project-text-overlay">
                            <section>
                                <p>This is filler text until I write a proper description of the project.</p>
                                <ul>
                                    <li>Donec porta semper nibh.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta semper nibh.</li>
                                    <li>Donec porta semper nibh. Donec porta semper nibh.</li>
                                </ul>
                                <p><strong>Utilized:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta semper nibh. Donec porta semper nibh. Donec porta semper nibh.</p>
                            </section>
                        </div>
                    </div>

                    <div className="project-thumbnail">
                        <h1>Budget App</h1>
                        <img src="/budgetapp.jpg" alt="pizza emporium website screenshot" />
                        <div className="project-text-overlay">
                            <section>
                                <p>This is filler text until I write a proper description of the project.</p>
                                <ul>
                                    <li>Donec porta semper nibh.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta semper nibh.</li>
                                    <li>Donec porta semper nibh. Donec porta semper nibh.</li>
                                </ul>
                                <p><strong>Utilized:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta semper nibh. Donec porta semper nibh. Donec porta semper nibh.</p>
                            </section>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Projects;