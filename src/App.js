import React, { useState } from 'react';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import './styles/Global.css'; // Import global styles
import Community from './pages/Community';

function App() {
  const [visibleContent, setVisibleContent] = useState({
    community: false,
    about: false,
    contact: false,
    privacy: false,
  });

  // Toggle content visibility for each page
  const toggleContentVisibility = (page) => {
    setVisibleContent((prevState) => ({
      ...prevState,
      [page]: !prevState[page],
    }));
  };

  const hasVisibleContent = visibleContent.about || visibleContent.contact || visibleContent.community || visibleContent.privacy;

  return (
    <div>
      <Nav toggleContentVisibility={toggleContentVisibility} />
      <div className={`container-page ${hasVisibleContent ? 'visible' : ''}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact isVisible={visibleContent.contact} />} />
          <Route path='/Community' element={<Community isVisible={visibleContent.community} />} />
        </Routes>

        {visibleContent.about && <About isVisible={visibleContent.about} toggleContentVisibility={toggleContentVisibility} />}
        {visibleContent.privacy && <Privacy isVisible={visibleContent.privacy} toggleContentVisibility={toggleContentVisibility} />}
      </div>
      <Main hasVisibleContent={hasVisibleContent} />
      <Footer toggleContentVisibility={toggleContentVisibility} />
    </div>
  );
}

export default App;
