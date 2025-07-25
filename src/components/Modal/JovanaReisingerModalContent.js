import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/jovanapostersmall.jpg';
import image2 from '../../Assets/Jovana 2 Entwurf.png';

const JovanaReisingerModalContent = () => (
    <div className="modal-content-container">
        <h1>Jovana Reisinger Film-Poster Berlinale</h1>
        <p>
            <strong>Author, Filmmaker and Visual Artist</strong> - Jovana Reisinger is an author, filmmaker and visual artist. With her book "Spitzenreiterinnen" she was nominated for the Bavarian Book Prize in 2021. In 2022, her essayistic novel "Enjoy Schatz" was published and in 2024 "Pleasure". Since 2020, she has been writing the menstruation column "Bleeding Love" for VOGUE.
        </p>

        <section className="modal-section">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img src={image1} alt="Jovana Reisinger Design Work 1" style={{ width: '100%', height: 'auto', marginBottom: '2rem' }} />
                    <h3>Collaboration</h3>
                    <p>
                        I met Jovana in Vienna. Since then, we have supported each other from time to time and collaborated on various creative projects. This collaboration is reflected in the works presented here, which showcase our shared vision and creative synergy.
                    </p>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img src={image2} alt="Jovana Reisinger Design Work 2" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </section>
    </div>
);

export default JovanaReisingerModalContent; 