import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Image1 from '../../Assets/Modal Images/heart.png';
import Image2 from '../../Assets/Modal Images/Contact.png';
import Image3 from '../../Assets/Modal Images/open.png';

function Nav({ toggleContentVisibility, closeAllContent }) {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={closeAllContent}>
        <img src={Image1} alt="Home" className="logo" />
      </Link>
      
      <ul>
        <li>
          <button onClick={() => toggleContentVisibility('about')} className="about-link nav-button">
            <img src={Image3} alt="About Me" className="nav-image" />
          </button>
        </li>

        <li>
          <a href="mailto:annemariesauerbier@googlemail.com" className="contact-link">
            <img src={Image2} alt="Contact Me" className="nav-image" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
