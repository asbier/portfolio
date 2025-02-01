import React from 'react';
import '../Modal/DayoneModalContent.css';
import Image1 from '../../Assets/Image_0_ dayone/mydealer.png';

const DayoneModalContent = () => (
  <div className="modal-content-container">
    <h1>DAYONE</h1>

    <p><strong>DAYONE provides innovative consulting and design services for digital transformation. © DAYONE</strong></p>
    <p><strong>As Product Designer at DAYONE,</strong> I balanced design, leadership, and strategy, taking ownership with minimal oversight. I focused on a holistic approach, from UX to business strategy, integrating user research and product ownership into the design process. My main client was Volkswagen.</p>

    <section className="modal-section">
      <h2>CASE 1 — Holistic Vehicle Search</h2>
      <p><strong>Time:</strong> 6 months</p>
      <p>My first challenge was working with Accenture Song on the International Volkswagen OneHub, a highly political environment. Collaborating with different teams, I had to navigate varying goals and workflows. Being new helped me approach challenges with fresh perspectives.</p>

      <h3>Process</h3>
      <p>To gain clarity, I focused on research and extensive questioning to understand Volkswagen’s objectives and user pain points. Through User Days, we discovered that users struggled to find specific cars due to Volkswagen’s offline sales legacy.</p>

      <h3>Outcome</h3>
      <p>With these insights, I proposed a simple yet effective solution: <strong>“The Category Slider.”</strong></p>

      <div className="dayone-image-gallery">
        <img src={Image1} alt="Category Slider" />
      </div>

      <p>💡 <strong>Learning:</strong> My ideas faced resistance initially. The guideline was clear: stick to square images, reuse existing widgets for consistency and ease of implementation. Ironically, no similar widget existed, so we had to create a new one!</p>
    </section>

    <p>
      <a href="https://www.dayone.de" target="_blank" rel="noopener noreferrer">🌐 Learn more about DAYONE</a>
    </p>
  </div>
);

export default DayoneModalContent;
