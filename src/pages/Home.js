import React from 'react';

function Home({ darkMode }) {
  return (
    <div className={darkMode ? "body-dark" : "body-light"}>
      {/* You can add more content here */}
 
    </div>
  );
}

export default Home;

