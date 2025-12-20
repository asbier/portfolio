import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import GrainOverlay from '../components/GrainOverlay/GrainOverlay';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F1F2E5] text-black font-neue">
      <GrainOverlay />
      <Navbar />
      
      <main className="pt-[110px] lg:pt-[120px] pb-32 px-5 lg:px-12 max-w-4xl mx-auto">
        <div className="bg-[#E2DED3] p-8 lg:p-12 space-y-6">
          <h1 className="text-[32px] lg:text-[48px] font-neue-semibold uppercase tracking-normal leading-tight text-black mb-8">
            Privacy & Image Usage
          </h1>
          
          <div className="space-y-6 text-base lg:text-lg font-neue-book-semi leading-relaxed text-black">
            <section>
              <h2 className="text-xl lg:text-2xl font-neue-semibold uppercase mb-4">Image Usage Policy</h2>
              <p>
                The images displayed in this portfolio are based on projects I have worked on. All images are used for portfolio and professional presentation purposes to showcase my design work and contributions to these projects.
              </p>
            </section>

            <section>
              <h2 className="text-xl lg:text-2xl font-neue-semibold uppercase mb-4">Removal Requests</h2>
              <p>
                If you are the owner or representative of a company whose images appear in this portfolio and you do not wish for them to be displayed, please contact me via <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">LinkedIn</a>. I will promptly remove the requested images upon verification of ownership.
              </p>
            </section>

            <section>
              <h2 className="text-xl lg:text-2xl font-neue-semibold uppercase mb-4">Contact</h2>
              <p>
                For any questions or concerns regarding image usage or privacy, please reach out to me via <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">LinkedIn</a>.
              </p>
            </section>
          </div>

          <div className="pt-8 mt-8 border-t border-black/10">
            <button
              onClick={() => navigate('/')}
              className="text-sm font-black font-neue uppercase min-h-[44px] touch-manipulation leading-none relative inline-block"
              style={{
                borderBottom: '1px solid black',
                paddingBottom: '2px',
                lineHeight: '1'
              }}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
