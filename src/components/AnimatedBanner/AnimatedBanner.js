import React from 'react';
import './AnimatedBanner.css';

const AnimatedBanner = () => {
  const bannerMessages = [
  ' ✨ Need your brand to survive longer than five years? I don’t do backlog design. I build narratives that kill dusty agendas ✨', 
  ' 🎁 I help you stand out from the crowd 🎁',  '✨Need your brand to survive longer than five years? I don’t do backlog design. I build narratives that kill dusty agendas ✨',
  ' ✨ I help you stand out from the crowd ✨'

    
  ];

  return (
    <div className="animated-banner">
      <div className="banner-content">
        {bannerMessages.map((message, index) => (
          <span className="banner-text" key={index}>
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBanner; 