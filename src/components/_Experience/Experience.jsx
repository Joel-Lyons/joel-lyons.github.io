import React from 'react';
import './Experience.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Experience extends React.Component {
    render() {
        return (
            <div className="app">
                <Navigation />
                <div id="experience-wrapper">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="2019 - Present"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Software Developer, Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">FES - Lincoln, NE</h4>
                            <p>
                                Full Stack Web Development on a LAMP stack, JavaScript/jQuery/Bootstrap front-end, Git
                                version control, and VSCode/Chrome Developer Tools for debugging.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--school"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="May 2020"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Associates of Applied Science (A.A.S)</h3>
                            <h4 className="vertical-timeline-element-subtitle">Southeast Community College - Lincoln, NE</h4>
                            <p>
                                <strong>Major:</strong> Information Technology
                                <br/>
                                <strong>Focus:</strong> PC & Web Applications
                                <br/>
                                <strong>Programming Coursework:</strong> Program Design, C#.NET, Java, JavaScript, Database Administration
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="2018 - 2019"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Financial Aid Specialist</h3>
                            <h4 className="vertical-timeline-element-subtitle">Inceptia - Lincoln, NE</h4>
                            <p>
                                Work with universities financial aid departments to coordinate verification of students FAFSA. Verify student/parent personally identifiable information (PII) and financial information on the FAFSA application.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Experience;