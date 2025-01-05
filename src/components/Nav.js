import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is properly imported
import { useResolvedPath, useMatch } from 'react-router-dom';

function Nav(props) {
    const path = window.location.pathname; // Not used in this code, but valid for debugging

    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <Link to="/" className="nav-p">🔮</Link>
            <ul>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Privacy">PRIVACY</Link></li>
                <li><Link to="/Contact">C☺NTACT</Link></li>
            </ul>
            <div className="toggler">
                <p className="toggler--light">🌞</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">🌚</p>
            </div>
        </nav>
    );
}





function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}




export default Nav;
