import React, { useRef, useEffect, useState } from 'react';
import './modal-common.css';
import Image1 from '../../Assets/Image_0_dayone/before.png';
import Image2 from '../../Assets/Image_0_dayone/Release.png';
import Image4 from '../../Assets/Image_0_dayone/Insights User 4.png';
import Image5 from '../../Assets/Image_0_dayone/insight-UserDay.png';
import Image6 from '../../Assets/Image_0_dayone/Insights User 3.png';
import Image7 from '../../Assets/Image_0_dayone/outcome.png';
import Image8 from '../../Assets/Image_0_dayone/Insight2.png';
import Image9 from '../../Assets/Image_0_dayone/slider-final.png';
import Image10 from '../../Assets/Image_0_dayone/wireframe-slider.png';

import video1 from '../../Assets/Image_0_dayone/Demo New Filter Experience video.mp4';
import video2 from '../../Assets/Image_0_dayone/PDPvideo.mp4'; // Example path

const DayoneModalContent = () => {
  const [videoRefs] = useState([useRef(null), useRef(null)]);


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

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
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
    <div className="modal-content-container">
      <h1>DAYONE</h1>
      <p><strong>DAYONE provides innovative consulting and design services for digital transformation. © DAYONE</strong></p>
      <p><strong>As Product Designer at DAYONE, </strong>
        I balanced design, leadership, and strategy, taking ownership with minimal oversight. I focused on a holistic approach, from UX to business strategy, integrating user research and product ownership into the design process. My main client is Volkswagen.
      </p>
      <div className="column">

  <h3><strong>My Role</strong></h3>
  <ul className="list" >
    <li className="fontWeight">UX </li>
    <li className="fontWeight">UI </li>
    <li className="fontWeight">Strategy</li>

  </ul>
  <h3><strong>Our Design Team for UX/UI </strong></h3>
  <ul className="list" >
  <li className="list">Digital Design Lead AccentureSong, Odair Faléco </li><p></p>
  <li className="fontWeight"> UX/UI Designer AccentureSong, Marina Meinhardt</li>
    <li className="fontWeight"> UX Designer DAYONE, Annemarie Sauerbier </li>
    <li className="fontWeight"> UX/UI Designer DAYONE, Skirmante Radvucuite </li>
  </ul>
  <p></p>
</div>

      <section className="modal-section">
        <h2>Global Filter Experience</h2>


        <figure className="image-gallery">
          <img src={Image10} alt="Slider" />
          <figcaption className="image-caption">Wireframe of the catergory Slider - the first Task</figcaption>
        </figure>

        
        <div className="column">
          <h3><strong>My Role</strong></h3>
          <ul>
            <li className="fontWeight">UX Research</li>
            <li className="fontWeight">UX Design</li>
            <li className="fontWeight">High-Level UI Design</li>
          </ul>
        </div>


        <h3><strong>Challenge</strong></h3>
        <p>At DAYONE, I was working with Accenture Song on the International Group Stock Locator for Volkswagen’s OneHub (Central Content-Management- and Experience-System). Collaborating with different teams, I had to navigate varying goals and workflows. Being new helped me approach challenges with fresh perspectives.</p>


        <h3><strong>What is the Group Stock Locator at Volkswagen?</strong></h3>
        <p>The GroupStockLocator integrates new and pre-owned stock-car offerings for the customer to enable an engaging digital brand experience while driving both online and offline sales.</p>

        <h3><strong>Process</strong></h3>
        <p>To gain clarity, I focused on research and extensive questioning to understand Volkswagen’s objectives and user pain points. Through User Days, we discovered that users struggled to find specific cars due to Volkswagen’s offline sales legacy.</p>

        <figure className="image-gallery">
          <img src={Image1} alt="Before" />
          <figcaption className="image-caption">VW.de 2022 Group Stock Locator "Before"</figcaption>
        </figure>

        <figure className="image-gallery">
          <img src={Image5} alt="Research" />
          <figcaption className="image-caption">Input for the Concept from latest Userday</figcaption>
        </figure>

        <h3><strong>Outcome 1</strong></h3>
        <p>With these insights, I proposed a simple yet effective solution: <strong>"The Category Slider."</strong> To simplify the buying decisions for certain user groups, a new personalized GSL Category Entry Slider was introduced on the GSL Content Page as well as on the Product List Page. These Category filters give users more guidance to find their desired type of vehicle, enabling a better purchase decision. The overall goal was “finding my dream car faster” by using the Lifestyle Categories, which fit each user’s needs.</p>

        <div className="filter-chips-container">
          <div className="filter-chip">Electro & Hybrid</div>
          <div className="filter-chip">Models for Families</div>
          <div className="filter-chip">Economical Models & Under 20.000€</div>
          <div className="filter-chip">Sporty Models</div>
          <div className="filter-chip">Offroad Models</div>
        </div>

        <figure className="image-gallery">
          <img src={Image8} alt="Slider" />
          <img src={Image9} alt="Research" />
          <figcaption className="image-caption">Outcome of the Category Slider</figcaption>
        </figure>

        <p>During these discussions, I was sparking thoughts about a more holistic approach, leading to the birth of the Holistic Filter Initiative, later called the Global Filter Experience. As a result, our Design Team launched both quantitative research through heatmaps and qualitative research during a User Day, where, with the support of Ipsos, we interviewed five car owners who were either about to purchase or had recently purchased a vehicle.</p>

        <figure className="image-gallery">
          <img src={Image4} alt="Research" />
          <figcaption className="image-caption">Examples of the Study Result</figcaption>
        </figure>

        <figure className="image-gallery">
          <img src={Image6} alt="Research" />
          <figcaption className="image-caption">Examples show possibilities of new Objectives</figcaption>
        </figure>

        <p>This led to a whole new vision: a holistic search. We created the following:</p>
        <ul className="checklist">
          <li className="fontWeight">New GSL Stage Feature App (simple entry into the search)</li>
          <li className="fontWeight">Category Filter Pre-sets on the GSL Content Page</li>
          <li className="fontWeight">Integration of the Filter-Cockpit</li>
          <li className="fontWeight">Smart “Filter Suggestion” for mobile</li>
          <li className="fontWeight">User-friendly Detail search</li>
        </ul>

        <figure className="image-gallery">
          <img src={Image7} alt="Design Outcome" />
          <figcaption className="image-caption">Examples show the Prototype, Images belong to Volkswagen</figcaption>
        </figure>

        <div className="video-gallery">
          <video ref={videoRefs[0]} src={video1} muted loop playsInline></video>
          <video ref={videoRefs[1]} src={video2} muted loop playsInline></video>
        </div>

        <p>💡 My takeaway is that every idea can open up new opportunities that lead to a deeper understanding of what users truly need and ask for. This is a great example of how I like to work—transforming a small idea into a big change with a positive outcome for the user.</p>

        <figure className="image-gallery">
          <img src={Image2} alt="Filtercockpit Live" />
          <figcaption className="image-caption">This is the Live Version from June 2024</figcaption>
        </figure>
      </section>

      <p>
        <a href="https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html" target="_blank" rel="noopener noreferrer"> ➞ See the Product Live</a>
      </p>
      <p>
        <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer"> ➞ Learn more about DAYONE</a>
      </p>
    </div>
  );
};

export default DayoneModalContent;
