import React from "react";
import "../pages/About.css"; // Import the styles

function About({ isVisible }) {
    return (
        <div className="abstand">
            {isVisible && (
                <>
                    <h2>About Me</h2>
                    <p>
                        I’m Annemarie, a product designer and creative mind based in Berlin. 
                        I love blending editorial storytelling, UX, and brand experience to craft 
                        meaningful products and services – both digital and physical. My work 
                        is driven by curiosity and a human-centered mindset, always aiming to 
                        create solutions that are functional, emotionally engaging, and leave a positive impact.
                    </p>

                    {/* CTA Button */}
                    <button className="cta-button">
                        Read More About My Journey
                    </button>

                    {/* Collapsible Section */}
                    <div className="collapsible-section expanded">
                        <p><strong>💭 From Silos to Synergy: The New Era of Design, Tech, and Human-Centered Innovation </strong></p>  
                        <p>I didn’t fully grasp the significance of emerging roles in creating products...</p>
                        {/* More paragraphs as needed */}
                    </div>
                </>
            )}
        </div>
    );
}

export default About;
