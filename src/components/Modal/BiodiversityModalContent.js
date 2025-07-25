import React from 'react';
import './modal-common.css';
import personImage from '../../Assets/person1.png';

const BiodiversityModalContent = () => (
    <div className="modal-content-container">
        <h1>More Biodiversity in Cities</h1>
        <p>
            <strong>An experimental branding system for ecological participation in urban spaces.</strong>
        </p>
        <p className="role-description">
            How can design help communicate ecological topics emotionally and accessibly? This project emerged as a free conceptual work – with the goal of making urban biodiversity more visible and closer to people.
        </p>

        <div className="column">
          <div>
            <h3><strong>My Role</strong></h3>
            <ul className="checklist">
              <li>Brand Strategy</li>
              <li>Visual Identity Design</li>
              <li>Art Direction</li>
              <li>Environmental Communication</li>
            </ul>
          </div>
          <div>
            <h3><strong>Project Focus</strong></h3>
            <ul className="list">
              <li><strong>Urban Biodiversity</strong> Making nature visible in cities</li>
              <li><strong>Ecological Communication</strong> Emotional and accessible design</li>
              <li><strong>Community Participation</strong> Engaging urban communities</li>
              <li><strong>Experimental Branding</strong> Innovative visual systems</li>
            </ul>
          </div>
        </div>

        <section className="modal-section">
            <h2>Background & Idea</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <p>
                        Cities are dense, loud, and sealed – yet they are also habitats for plants, animals, and us humans. This free project explores how visual communication can contribute to promoting urban biodiversity and motivating people to become part of it.
                    </p>
                    <p>
                        Whether through tree sponsorships, wildflower care, plastic avoidance, or simply through attention: design can build bridges between knowledge and action, nature and city, feeling and responsibility.
                    </p>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img src={personImage} alt="Urban Biodiversity Branding System" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </section>

        <section className="modal-section">
            <h2>Goal</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <p>
                        To develop a visual communication system that:
                    </p>
                    <ul className="checklist">
                        <li>Makes urban biodiversity visible and tangible</li>
                        <li>Emotionally appeals to people and activates them with low barriers</li>
                        <li>Mediates between analog and digital environmental communication</li>
                    </ul>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    {/* Space for additional content or image */}
                </div>
            </div>
        </section>

        <section className="modal-section">
            <h2>Concept</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <p>
                        The project is based on the idea that design not only informs but values, sensitizes, and connects. Instead of relying on panic or morality, the system uses joy, beauty, and stories to promote participation.
                    </p>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <p>
                        The visual language plays with growth, layering, and materiality – and leaves room for interaction, imperfection, and change. Analog meets digital, systems meet emotion.
                    </p>
                </div>
            </div>
        </section>
    </div>
);

export default BiodiversityModalContent; 