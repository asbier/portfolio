import React from "react";
import "../pages/About.css"; // Import the styles

function Contact({ isVisible }) {
    return (
        <div className="pages">
            {isVisible && (
                <a className="cta-button" href="mailto:annemariesauerbier@googlemail.com">
                    Let's Collaborate
                </a>
            )}
        </div>
    );
}

export default Contact;
