import React, { useState } from "react";
import "../pages/About.css";

function Shop(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="abstand">
            <h2 onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
                Community_
            </h2>

            <div className={`collapsible-section ${isExpanded ? "expanded" : ""}`}>
                <p>
                    I foster Collaboration - please get in contact with these beautiful individuums to collaborate or book as a package.
                </p>
            </div>
        </div>
    );
}

export default Shop;