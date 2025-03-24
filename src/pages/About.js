import React, { useState } from "react";
import "../pages/About.css"; // Import the styles


function About(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
            <div className="abstand">
                Hello!
                <p>
                I’m Annemarie, a product designer and creative mind based in Berlin. 
                I love blending editorial storytelling, UX, and brand experience to craft 
                meaningful products and services – both digital and physical. My work 
                is driven by curiosity and a human-centered mindset, always aiming to 
                create solutions that are functional, emotionally engaging, and leave a positive impact.


            </p>

                {/* CTA Button */}
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="cta-button"
                >
                    {isExpanded ? "Read Less" : "Read More About My Journey"}
                </button>

                {/* Collapsible Section */}
                <div className={`collapsible-section ${isExpanded ? "expanded" : ""}`}>
                    <p><strong>💭 From Silos to Synergy: The New Era of Design, Tech, and Human-Centered Innovation </strong></p>  
                    <p>I didn’t fully grasp the significance of emerging roles in creating products, 
                            building culture, and generating awareness—elements crucial to connecting with people. Roles like UX, UI, 
                            product strategy, service design, analytics, and engineering fit into broader concepts such as Product, 
                            Service, and Machine Design, all of which ultimately fall under the umbrella of Design.
                        </p>
                        <p>The evolution of these roles is striking. What was once a UX designer’s skill set—research, strategy, 
                            wireframing, and prototyping with tools like Illustrator, Figma, and Photoshop—has expanded to include frontend 
                            development skills such as HTML, CSS, and JavaScript. While specifics vary by location and company, a UX designer is 
                            not necessarily expected to handle backend development or full-stack frontend work. However, depending on their learning 
                            and experience, they might be capable of it. The truth is, there’s no direct, predefined path in times of a revolution. 
                        </p>
                        <p>We are in a time where the convergence of design, technology, and human-centered practices is reshaping industries, 
                            economies, and the very nature of work. This transition requires individuals and organizations to adapt quickly to new skill sets 
                            and new ways of thinking—similar to previous revolutions in history.
                        </p>
                        <p>Some areas of expertise, such as advanced chemistry or physics, require deep, specialized learning and take longer to grasp. But in fields 
                            like design, where passion and continuous learning drive progress, the timeline to mastery is more flexible. Someone passionate about learning 
                            can often overcome challenges more quickly, regardless of their starting point.
                        </p>
                        <p>This flexibility makes hiring increasingly complex. With coding bootcamps, UX bootcamps, sales bootcamps, computer science degrees, 
                            design degrees, analytics mastery, and more, defining roles and finding the right candidates requires understanding each person’s 
                            unique skill set and experience.
                        </p>
                        <p>Equally crucial is domain knowledge. Without understanding the industry you work in—whether it’s automotive, AI, or another sector—you 
                            risk making uninformed decisions. For instance, a designer transitioning from a computer science background to a UX bootcamp may lack deep 
                            knowledge of typography, color theory, and design principles that influence consumer behavior. However, they can quickly learn these fundamentals, 
                            while other areas—like advanced math or physics—might take longer to grasp or may never be fully mastered.
                        </p>
                        <p>As a leader, it’s essential to either learn or trust experts in areas like analytics and AI to avoid potentially costly mistakes.</p>
                        <p>Today’s design demands strong logical thinking, similar to engineering. Designers need to create structures and flows that optimize user 
                            interactions, requiring an understanding of both user behavior and technical feasibility. A well-rounded designer—whether called Product, 
                            UX, UI, Digital Designer, or Graphic Designer—must also understand either the backend structures in the digital realm or the physical space 
                            (e.g., how APIs work, how data is processed, and which methods or materials to use) to ensure design aligns with execution, creating seamless 
                            user experiences.
                        </p>
                        <p>Ultimately, roles in design, marketing, and engineering aren’t isolated; they form a unified process to deliver experiences that meet both 
                            user needs and business goals. While the mediums—digital, physical, virtual, etc.—evolve, the core objective remains the same: designing solutions 
                            that resonate with humans.
                        </p>
                        <p>Unfortunately, the industry often isolates these roles into silos, preventing effective integration. The result is often a fragmented product that 
                            doesn’t succeed. 
                            In my Opinion, to create truly effective, human-centered solutions, design, marketing, analytics, and technical execution must collaborate. 
                            Each skill set must be deeply understood, placing the right people into the right positions within the "machine" of the company.
                        </p>
                </div>
            </div>
    
    );
}



export default About;
