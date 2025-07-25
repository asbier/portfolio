import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Image1 from '../../Assets/Modal Images/heart.png';
import Image2 from '../../Assets/Modal Images/Contact.png';
import Image3 from '../../Assets/Modal Images/open.png';
import { trackContactClick, trackPageSection } from '../../utils/analytics';

function Nav({ toggleContentVisibility, closeAllContent }) {
  const handleAboutClick = () => {
    toggleContentVisibility('about');
    trackPageSection('about', 'opened');
  };

  const handleContactClick = () => {
    trackContactClick('nav');
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={closeAllContent}>
        <img src={Image1} alt="Home" className="logo" />
      </Link>
      
      <ul>
        <li>
          <button onClick={handleAboutClick} className="about-link nav-button">
            <img src={Image3} alt="About Me" className="nav-image" />
          </button>
        </li>

        <li>
          <a 
            href="mailto:annemariesauerbier@googlemail.com" 
            className="contact-link"
            onClick={handleContactClick}
          >
            <img src={Image2} alt="Contact Me" className="nav-image" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
