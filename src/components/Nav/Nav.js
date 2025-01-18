import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is properly imported
import './Nav.css';
function Nav(props) {
    return (
        <nav className={props.darkMode ? "nav dark" : "nav"}> {/* Apply dark class based on darkMode */}
            <Link to="/" className="nav-logo">🔮</Link> {/* Add class for styling */}
            <ul>
                <li><Link to="/About">ABOUT ME</Link></li>
                <li><Link to="/Contact">CONTACT ME</Link></li>
                <li><Link to="/Privacy">PRIVACY</Link></li>
            </ul>
            <div className="toggler">
                <p className="toggler--light">🌞</p>
                <div
                    className={`toggler--slider ${props.darkMode ? "dark" : ""}`} // Apply dark class to slider
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">🌚</p>
            </div>
        </nav>
    );
}

export default Nav;
