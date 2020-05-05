import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class AppRoute extends Component {
    render() {
        return (
            <Route path="/" component={Home}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Route>
        );
    }
}

export default AppRoute;