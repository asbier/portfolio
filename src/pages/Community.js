import React from "react";
import "./about.css";

function Community({ isVisible }) {
    return (
        <div className="abstand">
            {isVisible && (
                <>
                    <h2>Community</h2>
                    <p>
                        I foster collaboration - please get in contact with these beautiful individuals to collaborate or book.
                    </p>
                </>
            )}
        </div>
    );
}

export default Community;
