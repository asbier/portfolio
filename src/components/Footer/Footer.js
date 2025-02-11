import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Make sure to import Link
import './Footer.css';

function Footer(props) {
  return (
    <footer className={props.darkMode ? "footer dark" : "footer"}>
      <p>© 2025 My Portfolio</p>
      <ul> {/* ✅ Wrap li inside ul */}
        <li>
          <Link to="/Privacy">PRIVACY</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
