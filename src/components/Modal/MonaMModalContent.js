import React from 'react';
import './modal-common.css';

const MonaMModalContent = () => (
    <div className="modal-content-container">
        <h1>Mona M</h1>

        <section className="modal-section">
            <p>
                Mona M. is a Hamburg-based artist known for her unique blend of electronic, experimental, and alternative music. Drawing influences from ambient, techno, and industrial sounds, Mona M.’s music creates an atmospheric experience, merging abstract soundscapes with emotional depth.
            </p>
            <p>
                Her work often explores themes of identity, technology, and human connection, incorporating innovative production techniques alongside raw, organic elements. With her experimental approach, Mona M. has developed a distinctive voice in the German music scene, captivating listeners with tracks that are both thought-provoking and immersive. Her music continues to push boundaries, challenging traditional genres and offering a fresh perspective on contemporary electronic music.
            </p>
        </section>

        <section className="modal-section">
            <h2>Case 1 — Album Cover & Videos for Social Media</h2>
            <p>
                During the COVID-19 pandemic, we had the unique opportunity to experiment with minimal resources and break traditional creative boundaries. Mona M., the artist behind the project, needed a new album cover, and Mona Mandouri initiated this project. We wanted to create something that blurred the lines between analog and digital, as that's what we felt the music represents.
            </p>
            <p>
                As digital art and AI-generated visuals were gaining popularity, we decided to take a different approach: using an analog process with an old iPhone. The aim was to create an image where it’s difficult to tell if it was digitally manipulated or captured in the physical world. Though the final product was digital, the conceptual layers—built with analog patterns and textures—shone through, merging the two worlds.
            </p>
            <p>
                The result was a striking, experimental album cover, filled with broken art, abstract patterns, and a raw aesthetic that felt both nostalgic and forward-thinking. Unfortunately, this project never saw the light of day, as the vinyl was never printed or recorded. However, looking back, it feels incredibly relevant to today’s evolving landscape of art and digital media.
            </p>

            <h3>Roles & Contributions:</h3>
            <ul>
                <li><strong>Mona Mandouri:</strong> Responsible for analog masks, set design, and filming.</li>
                <li><strong>My Role:</strong> Assisted with set design and filming, editing, and graphic design.</li>
                <li><strong>Filming:</strong> Shot entirely on an iPhone for maximum flexibility.</li>
            </ul>
        </section>

        <section className="modal-section">
            <h2>Explore More</h2>
            <p>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">🌐 Learn more about Mona M's work</a>
            </p>
        </section>

        <div className="image-gallery">
            {/* Add images here if available */}
        </div>
    </div>
);

export default MonaMModalContent;
