import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import FilterTabs from '../components/FilterTabs/FilterTabs';
import CaseSlider from '../components/CaseSlider/CaseSlider';
import { cases } from '../data/cases';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const handleContact = () => {
    window.location.href = 'mailto:contact@example.com';
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-12">
            Creator & Art Director with focus on building holistic digital and spatial experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => handleFilterChange('commerce')}
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              Commerce
            </button>
            <button
              onClick={() => handleFilterChange('private')}
              className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              Private
            </button>
            <button
              onClick={handleContact}
              className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={handleAbout}
              className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
            >
              About Me
            </button>
          </div>

          {/* Filter Tabs */}
          <FilterTabs 
            activeFilter={activeFilter} 
            onFilterChange={handleFilterChange} 
          />

          {/* Case Slider */}
          <CaseSlider cases={cases} filter={activeFilter} />
        </section>
      </main>
    </div>
  );
};

export default Home;


