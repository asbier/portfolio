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
  }, [videoRefs]);

  return (
    <div className="modal-content-container">
      <Header />
      <RoleAndTeam />
      <GlobalFilterExperience />
      <ResearchAndInsights />
      <Outcome videoRefs={videoRefs} />
      <Takeaway />
      <Links />
    </div>
  );
};

const Header = () => (
  <>
    <h1>DAYONE</h1>
    <p><strong>DAYONE provides innovative consulting and design services for digital transformation. © DAYONE</strong></p>
    <p><strong>As Product Designer at DAYONE, </strong>
      I balanced design, leadership, and strategy, taking ownership with minimal oversight. I focused on a holistic approach, from UX to business strategy, integrating user research and product ownership into the design process. My main client was Volkswagen.
    </p>
  </>
);

const RoleAndTeam = () => (
  <div className="column">
    <h3><strong>My Role</strong></h3>
    <ul className="checklist">
      <li className="fontWeight"><b>UX</b></li>
      <li className="fontWeight"><b>UI</b></li>
      <li className="fontWeight"><b>Strategy</b></li>
    </ul>
    <h3><strong>Our Design Team for UX/UI</strong></h3>
    <ul className="list">
      <li className="checklist"><b>Digital Design Lead AccentureSong</b> Odair Faléco</li>
      <li className="fontWeight"><b>UX/UI Designer AccentureSong</b> Marina Meinhardt</li>
      <li className="fontWeight"><b>UX Product-Designer DAYONE</b> Annemarie Sauerbier</li>
      <li className="fontWeight"><b>UX/UI Product-Designer DAYONE</b> Skirmante Radvucuite</li>
      <p></p>
    </ul>
  </div>
);


const GlobalFilterExperience = () => (
  <section className="modal-section">
    <h2>Category Slider → led to a new Global Filter Experience</h2>
   <figure className="image-gallery">

      <img src={Image1} alt="Before" />
      <figcaption className="image-caption">VW.de 2022 Group Stock Locator "Before"</figcaption>
    </figure>
    <h3><strong>Context & Challenge</strong></h3>
    <p>At DAYONE, I joined a team formed in collaboration with Accenture, where we—bringing deep German domain expertise—worked closely with their global specialists. Together, we combined local insights with international best practices to shape Volkswagen's digital experience strategy.</p>
    <p>As a new team member, I navigated multiple stakeholder workflows (marketing, product, regional sales) to define a unifying vision.</p>
    <p><strong>Primary Question:</strong> How might we inform users about Volkswagen's full vehicle range in a clear, engaging way, while guiding them toward confident online purchase decisions?</p>
    <h3><strong>What is the Group Stock Locator at Volkswagen?</strong></h3>
    <p>The Group Stock Locator aggregates new and pre-owned Volkswagen inventory across regions, delivering a consistent digital brand experience that drives both online inquiries and offline sales.</p>
  </section>
);

const ResearchAndInsights = () => (
  <section className="modal-section">
    <h3><strong>Research & Insights</strong></h3>
    <p>To clarify Volkswagen's goals and user pain points, I led a mixed-methods research effort:</p>
    <p>User Interviews: Buyers struggled to find vehicles due to Volkswagen's offline sales legacy and preferred "shop by lifestyle" over complex filters.</p>
    <p>Heatmaps: Low engagement with search fields and high bounce rates when manual make/model input was required.</p>
    <p>Benchmarking: Top sites use simple, high-level filters like "SUV" or "Under €20k" before detailed options.</p>
    
    <figure className="image-gallery">
      <img src={Image5} alt="Research" />
      <figcaption className="image-caption">Input for the Concept from latest Userday</figcaption>
    </figure>
  </section>
);

const Outcome = ({ videoRefs }) => (
  <section className="modal-section">
    <h3><strong>Outcome</strong></h3>
    <p>With these insights, I proposed a simple yet effective solution: "The Category Slider." To simplify the buying decisions for certain user groups, a new personalized GSL Category Entry Slider was introduced on the GSL Content Page as well as on the Product List Page. These Category filters give users more guidance to find their desired type of vehicle, enabling a better purchase decision.</p>
    <div className="filter-chips-container">
      <div className="filter-chip">Electro & Hybrid</div>
      <div className="filter-chip">Models for Families</div>
      <div className="filter-chip">Economical Models & Under 20.000€</div>
      <div className="filter-chip">Sporty Models</div>
      <div className="filter-chip">Offroad Models</div>
    </div>

    <figure className="image-gallery">
      <img src={Image10} alt="Slider" />
      <figcaption className="image-caption">Wireframe of the category Slider</figcaption>
    </figure>
    <figure className="image-gallery">
      <img src={Image8} alt="Slider" />
      <img src={Image9} alt="Research" />
      <figcaption className="image-caption">Outcome of the Category Slider</figcaption>
    </figure>
    <div className="video-wrapper">
      <video ref={videoRefs[0]} src={video1} muted loop playsInline></video>
    </div>
    <div className="video-wrapper">
      <video ref={videoRefs[1]} src={video2} muted loop playsInline></video>
    </div>
  </section>
);

const Takeaway = () => (
  <section className="modal-section">
    <p>💡 My takeaway is that every idea can open up new opportunities that lead to a deeper understanding of what users truly need and ask for. This is a great example of how I like to work—transforming a small idea into a big change with a positive outcome for the user.</p>
    <figure className="image-gallery">
      <img src={Image2} alt="Filtercockpit Live" />
      <figcaption className="image-caption"> Next Task was building the Global Filter Concept -> This is the Live Version from June 2024</figcaption>
    </figure>
  </section>
);

const Links = () => (
  <section className="modal-section">
    <p>
      <a href="https://www.volkswagen.de/de/modelle/verfuegbare-fahrzeuge.html" target="_blank" rel="noopener noreferrer"> ➞ See the Product Live</a>
    </p>
    <p>
      <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer"> ➞ Learn more about DAYONE</a>
    </p>
  </section>
);

export default DayoneModalContent;
