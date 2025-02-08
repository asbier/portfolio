import React, { useRef, useEffect } from 'react';
import '../Modal/DayoneModalContent.css';
import Image1 from '../../Assets/Image_0_dayone/before.png';
import Image2 from '../../Assets/Image_0_dayone/Release.png';
import Image3 from '../../Assets/Image_0_dayone/NewEntry-LP_GSL.png';
import Image4 from '../../Assets/Image_0_dayone/Insights User 4.png';
import Image5 from '../../Assets/Image_0_dayone/slider-final.png';
import Image6 from '../../Assets/Image_0_dayone/Insights User 3.png';
import Image7 from '../../Assets/Image_0_dayone/outcome.png';
import Image8 from '../../Assets/Image_0_dayone/Insight2.png';

import video1 from '../../Assets/Image_0_dayone/Demo New Filter Experience video.mp4';
import video2 from '../../Assets/Image_0_dayone/PDPvideo.mp4'; // Example path

const DayoneModalContent = () => {
  const videoRefs = [useRef(null), useRef(null)];

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="modal-content-container">
      <h1>DAYONE</h1>

      <p><strong>DAYONE provides innovative consulting and design services for digital transformation. © DAYONE</strong></p>
      <p><strong>As Product Designer at DAYONE, </strong>
        I balanced design, leadership, and strategy, taking ownership with minimal oversight.
        I focused on a holistic approach, from UX to business strategy, integrating user
        research and product ownership into the design process. My main client is Volkswagen.</p>

      <section className="modal-section">
        <h2>CASE 1 — From a Category-Slider to a Global Filter Experience </h2>
        
        <div className="responsive-columns">
  <div className="column">
    <h3><strong>Team Design of Group Stock Locator (Autosuche) </strong></h3>
    <ul>
    <li className="fontWeight"> Anja Gehrke PM ACC</li>
    <li className="fontWeight"> Max Moldovan PM DAYONE</li><p></p>
      <li className="fontWeight">Skirmante Rudaviciute UI DAYONE</li>
      <li className="fontWeight">Annemarie Sauerbier <br></br>UX DAYONE</li>
      <li className="fontWeight">Odair Faléco <br></br>Lead ACC </li>
      <li className="fontWeight">Marina Meinhard <br></br>UX/UI ACC</li>
      <li className="fontWeight">Anna Kutíková <br></br>UX/UI ACC</li>   
      
      <li className="fontWeight"></li>
    </ul>
  </div>

  <div className="column">
    <h3><strong>Deliverables</strong></h3>
    <ul>
      <li className="fontWeight">1. Concept Iteration, 
      <p></p>2. Folowed by: Workshopboards,
      <p></p>User tests, Ui Designs, <p></p>
      Presentations</li>
    </ul>
  </div>
 
</div>
<div className="column">
  <h3><strong>My Role</strong></h3>
    <ul>
      <li className="fontWeight">UX Research</li><p></p>
      <li className="fontWeight">UX Design</li><p></p>
      <li className="fontWeight">High-Level UI Design</li><p></p>
      </ul>
      </div>
        <h3><strong>Challenge</strong></h3><p></p> My first to do, was working with Accenture Song on the 
        International Group Stock Locator on Volkswage's OneHub (Central Content-Management- und Experience-System), 
        a highly political environment.
        Collaborating with different teams, I had to navigate varying goals and workflows.
        Being new helped me approach challenges with fresh perspectives.<p></p>

          <p><strong>What is the Group Stock Locator at Volskswagen?</strong></p>
          <p>The GroupStockLocator integrates new and pre-owned
stock-car offerings into every relevant micro-moment for the
customer to enable an engaging digital brand experience while
driving both online- and offline-sales.<p></p>
Instead of having separate StockCar platforms with less
connection to the digital VW ecosystem we create a seamless
onsite experience with all car buying options at hand - from
configurator-built new cars to local dealer-offers for used cars.<p></p>
</p>

        <h3><strong>Process</strong></h3>
        <p> To gain clarity, I focused on research and extensive questioning to understand Volkswagen’s
          objectives and user pain points. 
          Through User Days, we discovered that users struggled to 
          find specific cars due to Volkswagen’s offline sales legacy.</p>

        <figure className="dayone-image-gallery">
          <img src={Image1} alt="Before" />
          <figcaption className="image-caption">VW.de 2022 Group 
            Stock Locator "Before"</figcaption>
        </figure>

        <figure className="dayone-image-gallery">
          <img src={Image3} alt="Research" />
          <figcaption className="image-caption">Input for the Concept from latest Userday</figcaption>
        </figure>
        <h3><strong>Outcome 1</strong></h3>
        <p> With these insights,
          I proposed a simple yet effective solution <strong>“The Category Slider.”</strong><p></p>
          To simplify the buying decisions for certain user groups, a new personalized GSL Category 
          Entry Slider is introduced on the GSL Content Page as well as on the Product List Page.<p></p> 
          Those Category filter gives users more guidance to find their desired type of 
          vehicle so that they can make a better purchase decision.
          “Finding my dream car faster” by using the Lifestyle Categories which fits to each user needs is
           the overall goal of this new filter approach. <p></p>

<div className="filter-chips-container">
  <div className="filter-chip">Electro & Hybrid</div>
  <div className="filter-chip">Models for Families</div>
  <div className="filter-chip">Economical Models & Under 20.000€</div>
  <div className="filter-chip">Sporty Models</div>
  <div className="filter-chip">Offroad Models</div>
</div>
</p>
        <figure className="image-gallery">
        <img src={Image8} alt="Slider" />
          <img src={Image5} alt="Research" />
          <figcaption className="image-caption">Outcome of the Category Slider</figcaption>
        </figure>

        <p>During these discussions, I was sparking thoughts about a more holistic approach.
          This led to the birth of the Holistic Filter Initiative or later called Global Filter Experience. 
          As a result, our Design Team launched both quantitative
          research through heatmaps and qualitative research during a User Day, where, with the 
          support of Ipsos, we interviewed
          five car owners who were either about to purchase or had recently purchased a vehicle.
        </p>

        <figure className="dayone-image-gallery">
          <img src={Image4} alt="Research" />
          <figcaption className="image-caption">Examples of the Study Result</figcaption>
        </figure>

        <figure className="dayone-image-gallery">
          <img src={Image6} alt="Research" />
       
          <figcaption className="dayone-image-caption">Examples show possibilities of new Objektives</figcaption>
        </figure>

        <p>This lead then to a whole new Vision, which was to do a Holistic Search, where we created
        <ul class="checklist">
      <li className="fontWeight">New GSL Stage Feature App (simple entry into the search)</li>
      <li className="fontWeight">Category Filter Pre-sets on the GSL Content Page</li>
      <li className="fontWeight">Integration of the Filter-Cockpit</li>
      <li className="fontWeight">Smart “Filter Suggestion” for mobile</li>
      <li className="fontWeight">User-friendly Detail search</li>
      </ul>
      </p>

        <figure className="dayone-image-gallery">
         
          <img src={Image7} alt="Design Outcome" />
          <figcaption className="image-caption">Examples show the Prototype, Images belong to Volkswagen</figcaption>
        </figure>

  
        <div className="dayone-video-gallery">
          <video ref={videoRefs[0]} src={video1} muted loop playsInline></video>
          <video ref={videoRefs[1]} src={video2} muted loop playsInline></video>
        </div>

        <p>💡 Even though my idea wasn’t initially welcomed, it opened up new opportunities that led to a deeper understanding of what users truly need and ask for.
          This is a great example of how I like to work—transforming a small idea into a big change with a positive outcome for the user.</p>
     
          <figure className="dayone-image-gallery">
          <img src={Image2} alt="Filtercockpit Live" />
          <figcaption className="image-caption">This is the Live Version from June 2024, since Dec24, the Feature App 
            has Technical Problems.</figcaption> 
           
        </figure>

      </section>

    

      <p>
      <a href="https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html" target="_blank" rel="noopener noreferrer"> ➞ See the Product Live</a> 
        <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer"> ➞ Learn more about DAYONE</a>
      </p>
    </div>
  );
};

export default DayoneModalContent;
