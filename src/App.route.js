import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import App from './App';

class AppRoute extends Component {
    render() {
        return (
            <Route path="/" component={Home}>
                <Route exact path="/" component={Home} />
                <Route path="/projects" render = {()=> (<p> this is projects </p>)} />
                <Route path="/contact" render = {()=> (<p> this is contact </p>)} />
            </Route>
        );
    }
}

export default AppRoute;