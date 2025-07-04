import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Image1 from '../../Assets/Modal Images/heart.png';
import Image2 from '../../Assets/Modal Images/Contact.png';
import Image3 from '../../Assets/Modal Images/open.png';

function Nav({ toggleContentVisibility }) {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src={Image1} alt="Home" className="logo" />
      </Link>
      
      <ul>
        <li>
          <button onClick={() => toggleContentVisibility('about')} className="about-link nav-button">
            <img src={Image3} alt="About Me" className="nav-image" />
          </button>
        </li>

        <li>
          <button onClick={() => toggleContentVisibility('contact')} className="contact-link nav-button">
            <img src={Image2} alt="Contact Me" className="nav-image" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
