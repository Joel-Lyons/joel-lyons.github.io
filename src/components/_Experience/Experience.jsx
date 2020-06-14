import React from 'react';
import './Experience.css';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BSNavigation from '../Navigation/BSNavigation';

class Experience extends React.Component {
    render() {
        return (
            <div className="app">
                <BSNavigation />
                <div id="experience-wrapper">
                    <VerticalTimeline>
                    <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="June 2020"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Began Software Developer position at Hotlines Inc.</h3>
                            <h4 className="vertical-timeline-element-subtitle">Software Developer - Council Bluffs, IA</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="June 2020"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Left Software Developer internship at FES</h3>
                            <h4 className="vertical-timeline-element-subtitle">Software Developer, Intern - Lincoln, NE</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--school"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="May 2020"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Graduated from Southeast Community College</h3>
                            <h4 className="vertical-timeline-element-subtitle">Associates of Applied Science (A.A.S) - Lincoln, NE</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="September 2019"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Began Software Developer internship at FES</h3>
                            <h4 className="vertical-timeline-element-subtitle">Software Developer, Intern - Lincoln, NE</h4>
                            <p>
                                Full Stack Web Development on a LAMP stack, JavaScript/jQuery/Bootstrap front-end, Git
                                version control, and VSCode/Chrome Developer Tools/XDebug for debugging.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="September 2018"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Left position at Inceptia to focus on school</h3>
                            <h4 className="vertical-timeline-element-subtitle">Financial Aid Specialist - Lincoln, NE</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="January 2018"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Started at Inceptia</h3>
                            <h4 className="vertical-timeline-element-subtitle">Financial Aid Specialist - Lincoln, NE</h4>
                            <p>
                                Worked with universities financial aid departments to coordinate verification of students FAFSA. Verify student/parent personally identifiable information (PII) and financial information on the FAFSA application.
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--school"
                            contentStyle={{ background: '#e0e0e0', color: '#000' }}
                            contentArrowStyle={{ borderRight: '10px solid  #e0e0e0' }}
                            date="January 2018"
                            iconStyle={{ background: '#e0e0e0', color: '#000' }}
                            icon={<FontAwesomeIcon icon={faGraduationCap} size="lg" />}
                            >
                            <h3 className="vertical-timeline-element-title">Began the Computer Information Technology program</h3>
                            <h4 className="vertical-timeline-element-subtitle">Southeast Community College - Lincoln, NE</h4>
                            <p>
                                <strong>Major:</strong> Information Technology
                                <br/>
                                <strong>Focus:</strong> PC & Web Applications
                                <br/>
                                <strong>Programming Coursework:</strong> Program Design, C#.NET, Java, JavaScript, Database Administration
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