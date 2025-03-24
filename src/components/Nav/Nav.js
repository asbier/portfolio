import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is properly imported
import './Nav.css';


import Image1 from '../../Assets/Modal Images/heart.png';
import Image2 from '../../Assets/Modal Images/Contact.png';
import Image3 from '../../Assets/Modal Images/open.png';
import Image4 from '../../Assets/Modal Images/hands.png';


function Nav() {
    return (
        <nav className="nav">
        
            {/* Logo */}
            <Link to="/" className="nav-logo">
                <img src={Image1} alt="Home" className="logo" />
            </Link>
            
            <ul>
                {/* About Link with Image */}
                <li>
                    <Link to="/About" className="about-link">
                        <img src={Image3} alt="About Me" className="nav-image" />
                    </Link>
                </li>

                {/* Contact Link with Image */}
                <li>
                    <Link to="/Contact" className="contact-link">
                        <img src={Image2} alt="Contact Me" className="nav-image" />
                    </Link>
                </li>
                <li>
                    <Link to="/Shop" className="about-link">
                        <img src={Image4} alt="Community" className="nav-image" />
                    </Link>
                </li>

                
                
            </ul>
        </nav>
    );
}

export default Nav; 