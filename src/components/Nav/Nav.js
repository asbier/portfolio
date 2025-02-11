import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is properly imported
import './Nav.css';


import Logo from '../../Assets/neues Logo.svg';
import Image1 from '../../Assets/Modal Images/heart.png';
import Image2 from '../../Assets/Modal Images/Contact.png';
import Image3 from '../../Assets/Modal Images/open.png';

function Nav() {
    return (
        <nav className="nav">
            {/* Logo */}
            <Link to="/" className="nav-logo">
                <img src={Image1} alt="Home Logo" className="logo" />
            </Link>
            
            <ul>
                {/* About Link with Image */}
                <li>
                    <Link to="/About" className="about-link">
                        <img src={Image3} alt="About Us" className="nav-image" />
                    </Link>
                </li>

                {/* Contact Link with Image */}
                <li>
                    <Link to="/Contact" className="contact-link">
                        <img src={Image2} alt="Contact Us" className="nav-image" />
                    </Link>
                </li>

                
                
            </ul>
        </nav>
    );
}

export default Nav;