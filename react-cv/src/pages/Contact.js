import React from 'react';
import Navigation from '../components/Navigation';
// import { copyToClipboard }

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i></li>
                            <span>Paris</span>
                        </ul>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i></li>
                            <span>Paris</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;