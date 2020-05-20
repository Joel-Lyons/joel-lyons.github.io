import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer-wrapper">
                <footer>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/joel-lyons-89140b19b/"><i className="fab fa-linkedin fa-2x"></i></a></li>
                        <li><a href="https://github.com/Joel-Lyons"><i className="fab fa-github fa-2x"></i></a></li>
                        <li><a href="https://www.instagram.com/joellyons_/"><i className="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="https://twitter.com/JoelLyons_"><i className="fab fa-twitter fa-2x"></i></a></li>
                        <li><a href="https://www.facebook.com/joel.lyons.585/"><i className="fab fa-facebook-square fa-2x"></i></a></li>
                    </ul>
                </footer>
            </div>
        );
    }
    
}

export default Footer