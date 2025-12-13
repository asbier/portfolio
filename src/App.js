import React, { useState } from 'react';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import './styles/Global.css';
import Community from './pages/Community';

function App() {
  const [visibleContent, setVisibleContent] = useState({
    community: false,
    about: false,
    privacy: false,
  });
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleContentVisibility = (page) => {
    setVisibleContent((prevState) => ({
      ...prevState,
      [page]: !prevState[page],
    }));
  };

  const closeAllContent = () => {
    setVisibleContent({ community: false, about: false, privacy: false });
    setActiveFilter('all');
  };

  const hasVisibleContent = visibleContent.about || visibleContent.community || visibleContent.privacy;

  return (
    <div>
      <Nav 
        toggleContentVisibility={toggleContentVisibility} 
        closeAllContent={closeAllContent}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className={`container-page ${hasVisibleContent ? 'visible' : ''}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Community' element={<Community isVisible={visibleContent.community} />} />
        </Routes>
        {visibleContent.about && <About isVisible={visibleContent.about} toggleContentVisibility={toggleContentVisibility} />}

        {visibleContent.privacy && <Privacy isVisible={visibleContent.privacy} toggleContentVisibility={toggleContentVisibility} />}
      </div>
      <Main 
        hasVisibleContent={hasVisibleContent} 
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </div>
  );
}

export default App;
