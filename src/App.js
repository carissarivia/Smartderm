import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Link as ScrollLink, Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Analysis from './pages/Analysis';
import Article from './pages/Article';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Tailwind: flex flex-col min-h-screen */}
          <Navbar />
          <main className="flex-grow pt-16">
            {/* Tailwind: flex-grow pt-16 */}
            <Element name="home">
              <Home />
            </Element>
            <Element name="about">
              <About />
            </Element>
            <Element name="analysis">
              <Analysis />
            </Element>
            <Element name="article">
              <Article />
            </Element>
            <Element name="aboutus">
              <AboutUs />
            </Element>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
