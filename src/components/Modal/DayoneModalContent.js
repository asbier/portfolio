import React, { useRef, useEffect } from 'react';
import '../Modal/DayoneModalContent.css';
import Image1 from '../../Assets/Image_0_ dayone/before.png';
import Image2 from '../../Assets/Image_0_ dayone/Release.png';
import Image3 from '../../Assets/Image_0_ dayone/insight-UserDay.png';
import Image4 from '../../Assets/Image_0_ dayone/Insights User 4.png';
import Image5 from '../../Assets/Image_0_ dayone/slider-final.png';
import Image6 from '../../Assets/Image_0_ dayone/Insights User 3.png';

import Video1 from '../../Assets/Image_0_ dayone/PDPvideo.mp4'; // Example path
import Video2 from '../../Assets/Image_0_ dayone/Demo New Filter Experience viedeo.mp4'; // Example path



const DayoneModalContent = () => {
  const videoRefs = [useRef(null), useRef(null)];

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          videoRefs[index].current.play();
        } else {
          videoRefs[index].current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    videoRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      videoRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (

  <div className="DayoneModalContent">
    <h1>DAYONE</h1>

    <p><strong>DAYONE provides innovative consulting and design services for digital transformation. © DAYONE</strong></p>
    <p><strong>As Product Designer at DAYONE,</strong> 
    I balanced design, leadership, and strategy, taking ownership with minimal oversight. 
    I focused on a holistic approach, from UX to business strategy, integrating user 
    research and product ownership into the design process. My main client was Volkswagen.</p>

 
<section className="modal-section">
  <h2>CASE 1 — Holistic Vehicle Search</h2>
   
   <h3><strong>Time</strong> 6 months</h3>
  <p>Team</p>
<ul>
  <li className="fontWeight">Max Moldovan<br />PM DAYONE</li>
  <li className="fontWeight">Skirmante<br />UI/UX DAYONE</li>
  <li className="fontWeight">Annemarie<br />UX</li>
  <li className="fontWeight">Marina<br />UX ACC</li>
  <li className="fontWeight">Odair<br />Lead ACC</li>
  <li className="fontWeight">Anja<br />PM ACC</li>
</ul>

<p><strong>Deliverables</strong></p>
<ul>
  <li className="fontWeight">Konzept Iteration</li>
</ul>

<p><strong>My Role</strong></p>
<ul>
  <li className="fontWeight"> UX research</li>
  <li className="fontWeight"> UX Design</li>
  <li className="fontWeight"> High Level UI Design</li>
</ul>

<p><h2>My first challenge was working with Accenture Song on the International Volkswagen OneHub, a highly political environment.
    Collaborating with different teams, I had to navigate varying goals and workflows.
    Being new helped me approach challenges with fresh perspectives.</h2></p>

  <h3><strong>Process</strong></h3>
  <p> To gain clarity, I focused on research and extensive questioning to understand Volkswagen’s 
    objectives and user pain points. Through User Days, we discovered that users struggled to find specific cars due to Volkswagen’s offline sales legacy.</p>

  <h3><strong>Outcome</strong></h3>
  <p> With these insights, 
    I proposed a simple yet effective solution <strong>
      “The Category Slider.”</strong></p>

     
<figure className="dayone-image-gallery">
  <img src={Image1} alt="Before" />
  <figcaption className="image-caption">VW.de 2022 "Before"</figcaption>
</figure>

<figure className="dayone-image-gallery">
  <img src={Image3} alt="Research" />
  <figcaption className="image-caption">Input for the Concept from latest Userday</figcaption>
</figure>



<figure className="dayone-image-gallery">
  <img src={Image5} alt="Research" />
  <figcaption className="image-caption">Outcome of the Category Slider</figcaption>
</figure>


<p>During these discussions, I opened Pandora's box, sparking thoughts about a more holistic approach. 
  This led to the birth of the Holistic Filter Initiative. As a result, we launched both quantitative 
  research through heatmaps and qualitative research during a User Day, where, with the support of Ipsos, we interviewed 
  five car owners who were either about to purchase or had recently purchased a vehicle.

</p>

<figure className="dayone-image-gallery">
  <img src={Image4} alt="Research" />
  <figcaption className="image-caption">Examples of the Study Result</figcaption>
</figure>

<figure className="dayone-image-gallery">
  <img src={Image6} alt="Research" />
  <figcaption className="image-caption">Examples show possibilities of new Objektives</figcaption>
</figure>

<figure className="dayone-image-gallery">
  <img src={Image2} alt="Filtercockpit" />
  <figcaption className="image-caption">Fast forward</figcaption>
</figure>

        <div className="dayone-video-gallery">
          <video ref={videoRefs[0]} src={Video1} muted loop playsInline></video>
          <video ref={videoRefs[1]} src={Video2} muted loop playsInline></video>
        </div>

      <p>💡 <strong>Learning</strong> Even though my idea wasn’t initially welcomed, it opened up new opportunities that led to a deeper understanding of what users truly need and ask for.
      This is a great example of how I like to work—transforming a small idea into a big change with a positive outcome for the user.</p>
    </section>

    <p>
      <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer">🌐 Learn more about DAYONE</a>
    </p>
  </div>

);
};
export default DayoneModalContent;
