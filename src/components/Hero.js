import React, { useState, useEffect } from 'react';

function Hero(props) {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set greeting based on the time of day
    const hours = currentTime.getHours();
    if (hours < 12) {
      setGreeting('Good morning!');
    } else if (hours < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good evening!');
    }

    // Update the current time every second
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <section className={`hero ${props.darkMode ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <h1>{greeting}</h1>
        I am a product designer and brand creator based in Berlin, currently learning React 🖤.         
      </div>
    </section>
  );
}

export default Hero;
