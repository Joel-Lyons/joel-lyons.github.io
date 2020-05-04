import React from 'react';
import './Home.css';
import Navigation from '../Navigation';

class Home extends React.Component {


    render() {
        return (
            <div>
                <Navigation />
                <h1>Joel Lyons - This is my Home Component!</h1>
                
            </div>
        );
    }
}

export default Home;