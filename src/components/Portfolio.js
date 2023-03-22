import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../index.css';

export default function Portfolio() {
  const [currentP, setCurrentP] = useState('Home');

//  Render page components depending on current page user is on
  const renderPage = () => {
    if (currentP === 'Home') {
      return <Home />;
    }
    if (currentP === 'About') {
      return <About />;
    }
    if (currentP === 'Projects') {
      return <Projects />;
    }
    if (currentP === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePChange = (page) => setCurrentP(page);

  return (
    <div className='react-container'>
      <Nav currentP={currentP} handlePChange={handlePChange} />
      {renderPage()}
     <Footer />
    </div>
  );
}
