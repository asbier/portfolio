import React from 'react';

function Footer(props) {
  return (
    <footer className={props.darkMode ? "footer dark" : "footer"}>
      <p>© 2025 My Portfolio</p>
    </footer>
  );
}

export default Footer;
