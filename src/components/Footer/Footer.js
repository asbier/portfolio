import React from 'react';
import './Footer.css';

function Footer({ darkMode, toggleContentVisibility }) {
  return (
    <footer className={darkMode ? "footer dark" : "footer"}>
      <p>© 2025 My Portfolio</p>
      <ul> {/* ✅ Wrap li inside ul */}
        <li>
          <button onClick={() => toggleContentVisibility('privacy')} className="footer-privacy-btn">
            PRIVACY
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
