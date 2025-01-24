import React from 'react';

function About(props) {
    return (
        <div className={props.darkMode ? "dark-background" : "light-background"}>
               <div className="abstand">
                 <h2>ABOUT</h2>
            <p>
            I am a product designer and humanity-centered thinker. 
            Collaborating within a network of creative minds,interdisciplinary practice bridges design, technology, 
            research, and user advocacy to craft thoughtful, inclusive solutions that shape meaningful experiences.
Currently working at DAYONE as a UX Designer and Digital Transformation Consultant, I focus 
on creating user-centric systems, seamless interfaces, 
and innovative tools that empower diverse industries, including culture and beyond. T
Their work balances the needs of the present with forward-looking visions, 
emphasizing ethical, impactful, and sustainable design.
By consulting, and facilitating I contribute to fostering inclusive spaces and 
exploring how humanity-centered design can shape better presents and futures.
            </p>
        </div>
        </div>
    );
}

export default About;

