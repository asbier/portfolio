import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Creator & Art Director with focus on building holistic digital and spatial experiences.
            </p>
            <p className="text-gray-600 mb-6">
              Never stopped playing and being curious: for 12 years, I've designed 
              holistic, humanity-first experiences that elevate how people connect—with 
              each other and with how they consume.
            </p>
            <p className="text-gray-600">
              Rooted in visual communication and guided by curiosity, my practice blends 
              branding, user interaction, and creative direction to explore where emotion, 
              narrative, and systems thinking intersect.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;




