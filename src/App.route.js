import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import App from './App';

class AppRoute extends Component {
    render() {
        return (
            <Route path="/" component={Home}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={Home} />
                <Route path="/skills" component={Home} />
                <Route path="/projects" component={Home} />
                <Route path="/contact" component={Home} />
            </Route>
        );
    }
}

export default AppRoute;