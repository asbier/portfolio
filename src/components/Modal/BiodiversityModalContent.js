import React from 'react';
import './modal-common.css';
import personImage from '../../Assets/person1.png';

const BiodiversityModalContent = () => (
    <div className="modal-content-container">
        <h1>More Biodiversity in Cities </h1>
        <p>
            <strong>Ein innovatives Branding-Projekt für nachhaltige Stadtentwicklung. Für die Förderung der Biodiversität durch intelligentes Regenwasser-Management und die Sensibilisierung für ökologische Asphaltalternativen in urbanen Räumen.</strong>
        </p>
        <p className="role-description">
            Als Art Director entwickelte ich eine ganzheitliche Markenidentität, die Umweltbewusstsein mit moderner Designsprache verbindet und komplexe ökologische Themen zugänglich macht.
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
              <li><strong>Biodiversität</strong> Förderung der Artenvielfalt</li>
              <li><strong>Regenwasser-Management</strong> Nachhaltige Wasserwirtschaft</li>
              <li><strong>Asphalt-Alternativen</strong> Umweltfreundliche Bodenversiegelung</li>
              <li><strong>Urban Ecology</strong> Grüne Stadtentwicklung</li>
            </ul>
          </div>
        </div>

        <section className="modal-section">
            <h2>Brand Vision</h2>
            <p>
                Die Marke verkörpert die Balance zwischen urbaner Entwicklung und ökologischer Verantwortung. 
                Durch die Fokussierung auf Regenwasser-Management und Biodiversitätsförderung schafft die Agentur 
                Bewusstsein für nachhaltige Alternativen zu konventionellen Stadtplanungsansätzen.
            </p>

            <h3>Designphilosophie</h3>
            <p>
                Das visuelle System basiert auf der Verbindung zwischen natürlichen Formen und urbanen Strukturen. 
                Organische Linien treffen auf geometrische Elemente, um die Harmonie zwischen Natur und Stadt zu symbolisieren.
            </p>

            <div className="image-gallery">
                <img src={personImage} alt="Biodiversität & Regenwasser Management Branding" />
            </div>
        </section>

        <section className="modal-section">
            <h2>Umwelt-Impact</h2>
            <p>
                Das Projekt adressiert kritische Umweltthemen der Stadtentwicklung: 
                Versiegelung von Böden, Regenwasser-Abfluss und den Verlust städtischer Biodiversität.
            </p>

            <h3>Lösungsansätze</h3>
            <ul className="checklist">
                <li>Entwicklung durchlässiger Bodenbeläge</li>
                <li>Integration von Grünflächen in Stadtplanung</li>
                <li>Regenwasser-Rückhaltesysteme</li>
                <li>Förderung einheimischer Pflanzenarten</li>
                <li>Bewusstseinsbildung für ökologische Alternativen</li>
            </ul>

            <div className="image-gallery">
                <div style={{
                    width: '100%',
                    height: '250px',
                    backgroundColor: '#e8f5e8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    color: '#2d5f2d',
                    border: '1px solid #a8d4a8'
                }}>
                    Platzhalter für weitere Projekt-Visuals
                </div>
            </div>
        </section>

        <section className="modal-section">
            <h2>Brand Applications</h2>
            <p>
                Die Markenidentität erstreckt sich über verschiedene Touchpoints: 
                von Corporate Design über digitale Präsenz bis hin zu Informationsmaterialien 
                für Stadtplaner und Umweltbehörden.
            </p>

            <div className="image-gallery">
                <div style={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#f0f8ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    color: '#1e4d72',
                    border: '1px solid #b3d9ff'
                }}>
                    Brand Applications Showcase
                </div>
            </div>
        </section>
    </div>
);

export default BiodiversityModalContent; 