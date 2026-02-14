import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-image-container">
        <img 
          src="https://images.unsplash.com/photo-1629540946404-ebe133e99f49" 
          alt="Offshore oil rig at sunset"
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            Trusted Marine & Engineering Solutions for Nigeria's Oil & Gas Sector
          </h1>
          <p className="hero-subtitle">
            Delivering excellence in energy logistics, marine support, and engineering services since 2003.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToServices}>
              Explore Our Services
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={scrollToContact}>
              Get a Quote
              <Phone size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
