import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul>
                    <li><a href="https://www.linkedin.com/in/joel-lyons-89140b19b/" target="_blank" ><i className="fab fa-linkedin fa-2x"></i></a></li>
                    <li><a href="https://github.com/Joel-Lyons" target="_blank" ><i className="fab fa-github fa-2x"></i></a></li>
                    <li><a href="https://www.instagram.com/joellyons_/" target="_blank" ><i className="fab fa-instagram fa-2x"></i></a></li>
                    <li><a href="https://twitter.com/JoelLyons_" target="_blank" ><i className="fab fa-twitter fa-2x"></i></a></li>
                    <li><a href="https://www.facebook.com/joel.lyons.585/" target="_blank" ><i className="fab fa-facebook-square fa-2x"></i></a></li>
                </ul>
            </footer>
        );
    }
    
}

export default Footer