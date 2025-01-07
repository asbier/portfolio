import React from 'react';

function About(props) {
    return (
        <div className={props.darkMode ? "dark-background" : "light-background"}>
            <h2>ABOUT</h2>
            <p>
                I am a product designer with a background in editorial design and a passion for crafting user-centered solutions. Currently working at DAYONE as a UX Designer and Digital Transformation Consultant, I specialize in creating innovative, functional, and emotionally engaging designs for diverse sectors, including music and culture.
            </p>
            <p>
                From enhancing user experiences to developing impactful, non-intrusive advertising formats, I combine creativity, technology, and a deep understanding of user behavior to deliver meaningful results. Let’s create something exceptional together!
            </p>
        </div>
    );
}

export default About;

