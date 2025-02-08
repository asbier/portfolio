import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is properly imported
import './Nav.css';

function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-logo">🔮</Link> {/* Add class for styling */}
            <ul>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
                <li><Link to="/Privacy">PRIVACY</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;