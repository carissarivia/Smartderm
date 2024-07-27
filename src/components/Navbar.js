import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import Logo from '../assets/logo.png'; 
import HomeIcon from '../assets/home.png'; 
import AboutIcon from '../assets/about.png'; 
import AnalysisIcon from '../assets/analysis.png';
import ArticleIcon from '../assets/article.png'; 
import AboutUsIcon from '../assets/aboutus.png'; 

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <nav className="navbar">
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        onSetActive={() => setActiveSection('home')}
        offset={-70}
        className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
      >
        <img src={Logo} alt="logo.png" className="h-8" />
      </ScrollLink>
      <div className="flex items-center space-x-6">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => setActiveSection('home')}
          offset={-70}
          className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
        >
          <img src={HomeIcon} alt="Home" className="h-5 inline-block mr-2" /> Dashboard
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => setActiveSection('about')}
          offset={-63}
          className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          <img src={AboutIcon} alt="About" className="h-5 inline-block mr-2" /> Mengenai
        </ScrollLink>
        <ScrollLink
          to="analysis"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => setActiveSection('analysis')}
          offset={-50}
          className={`navbar-link ${activeSection === 'analysis' ? 'active' : ''}`}
        >
          <img src={AnalysisIcon} alt="Analysis" className="h-5 inline-block mr-2" /> Analisis
        </ScrollLink>
        <ScrollLink
          to="article"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => setActiveSection('article')}
          offset={-45}
          className={`navbar-link ${activeSection === 'article' ? 'active' : ''}`}
        >
          <img src={ArticleIcon} alt="Article" className="h-5 inline-block mr-2" /> Artikel
        </ScrollLink>
        <ScrollLink
          to="aboutus"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onSetActive={() => setActiveSection('aboutus')}
          offset={-40}
          className={`navbar-link ${activeSection === 'aboutus' ? 'active' : ''}`}
        >
          <img src={AboutUsIcon} alt="Aboutus" className="h-5 inline-block mr-2" /> Tentang Kami
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
