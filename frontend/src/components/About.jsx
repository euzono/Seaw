import React from 'react';
import { Anchor, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About Seaworks Nigeria Limited</h2>
            <p className="about-text">
              Seaworks Nigeria Limited is a fully indigenous company providing integrated marine, energy, and engineering services to the oil, gas, and construction industries.
            </p>
            <p className="about-text">
              Our commitment to safety, innovation, and reliability has made us a trusted partner for over two decades. We deliver world-class solutions tailored to the unique challenges of Nigeria's offshore and onshore operations.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <Anchor className="stat-icon" size={32} />
                <div className="stat-content">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
              <div className="stat-item">
                <TrendingUp className="stat-icon" size={32} />
                <div className="stat-content">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </div>
              <div className="stat-item">
                <Shield className="stat-icon" size={32} />
                <div className="stat-content">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Safety Record</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1690508313456-bf8c851e8319" 
              alt="Offshore platform operations"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
