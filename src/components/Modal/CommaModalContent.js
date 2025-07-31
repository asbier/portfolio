import React from 'react';
import './modal-common.css';
import image1 from '../../Assets/Image_8_Comma/1.png';
import image2 from '../../Assets/Image_8_Comma/2.png';
import image3 from '../../Assets/Image_8_Comma/Image 1.png';
import image4 from '../../Assets/Image_8_Comma/Image 2.png';
import image5 from '../../Assets/Image_8_Comma/Image 3.png';
import image6 from '../../Assets/Image_8_Comma/Image-4.png';
import image7 from '../../Assets/Image_8_Comma/Image-5.png';
import image8 from '../../Assets/Image_8_Comma/Image-6.png';
import image9 from '../../Assets/Image_8_Comma/Image-7.png';

const CommaModalContent = () => (
    <div className="modal-content-container">
        <h1>Comma Style Magazine</h1>
        
        <p>
            <strong>Comma is a fashion brand that blends modern trends with timeless design, offering high-quality, versatile pieces for those seeking sophistication and comfort.</strong>
        </p>

        <p className="role-description">
            As Art Director, I transformed Comma's traditional catalog into dynamic style magazines, creating a modern brand experience that bridges print and digital while attracting younger audiences.
        </p>

        <div className="column">
            <div>
                <h3><strong>My Role</strong></h3>
                <ul className="checklist">
                    <li>Freelance Art Director</li>
                </ul>
            </div>
            <div>
                <h3><strong>Design Team</strong></h3>
                <ul className="list">
                    <li><strong>Creative Direction & Management</strong> SuperReal</li>
                    <li><strong>Freelance Art Director</strong> Annemarie Sauerbier</li>
                </ul>
            </div>
        </div>

        <section className="modal-section">
            <div className="image-gallery">
                <img src={image1} alt="Comma 1" />
                <img src={image2} alt="Comma 2" />
                <img src={image6} alt="Comma 4" />
                <img src={image7} alt="Comma 5" />
                <img src={image8} alt="Comma 6" />
                <img src={image5} alt="Comma 3" />
                <img src={image3} alt="Comma 1" />
                <img src={image4} alt="Comma 2" />
                <img src={image9} alt="Comma 7" />
            </div>
        </section>

        <section className="modal-section">
            <h2>The Challenge</h2>
            <p>
                Comma needed a fresh approach to attract a younger audience while maintaining its classic appeal.
                Their catalog, previously a simple brochure, required a redesign to elevate the brand's image and create a seamless
                e-commerce experience.
            </p>

            <h2>The Solution</h2>
            <p>
                I created a dynamic, zine-style lookbook called "Comma CI". During this process,
                we identified the need for two distinct target pieces: a
                classic design and a youthful "Stylemagazine". The latter
                embraced bold typography, collage elements, and modern aesthetics.
                This visual identity was seamlessly translated into a digital
                experience through parallax scrolling and interactive visuals,
                ensuring a cohesive transition from print to web.
            </p>

            <h2>The Outcome</h2>
            <p>
                The redesign successfully resonated with both younger and older audiences, creating a unified brand experience.
                The innovative web concept won an award for its unique collage style and immersive user experience.
            </p>
        </section>

        <section className="modal-section">
            <h2>Key Takeaways</h2>
            <ul className="checklist">
                <li>Successfully bridged traditional and modern design approaches</li>
                <li>Created award-winning digital experience with parallax scrolling</li>
                <li>Established cohesive brand identity across print and digital platforms</li>
                <li>Attracted younger audience while maintaining classic appeal</li>
            </ul>
        </section>

        <p>
            <a href="https://www.deptagency.com/de-dach/" target="_blank" rel="noopener noreferrer">
                ➞ Learn more about former SuperReal now Dept.-Agency
            </a>
        </p>
    </div>
);

export default CommaModalContent;