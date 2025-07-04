import React from "react";
import "../pages/About.css"; // Import the styles

function Contact({ isVisible }) {
    return (
        <div className="abstand">
            <p>Looking for collaboration opportunities and exciting projects</p>
            
            <div className="cta-buttons">
                <a 
                    className="cta-button"
                    href="mailto:annemariesauerbier@googlemail.com"
                >
                    Let's Collaborate
                </a>
                <a 
                    className="cta-button"
                    href="https://linkedin.com/in/annemariesauerbier"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Connect on LinkedIn
                </a>
            </div>
            
            <div className="contact-details">
                <p><strong>Email:</strong> annemariesauerbier@googlemail.com</p>
                <p><strong>Location:</strong> Berlin, Germany</p>
                <p><strong>Available for:</strong> Freelance projects, consulting, full-time opportunities</p>
            </div>
        </div>
    );
}

export default Contact;
