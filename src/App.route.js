import React from 'react';
import { Route } from 'react-router';
import Experience from './components/_Experience/Experience';
import Projects from './components/_Projects/Projects';
import Contact from './components/_Contact/Contact';

function App() {
  return (
    <Route path="/" component={Experience}>
        <Route exact path="/" component={Experience} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Route>
  );
}

export default App;
