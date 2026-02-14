import React from 'react';
import { Fuel, Ship, Wrench } from 'lucide-react';
import { services } from '../data/mockData';

const iconMap = {
  Fuel: Fuel,
  Ship: Ship,
  Wrench: Wrench
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for marine, energy, and engineering needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay"></div>
                </div>
                <div className="service-content">
                  <div className="service-icon-wrapper">
                    {IconComponent && <IconComponent size={32} className="service-icon" />}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  {service.fullDescription && (
                    <p className="service-full-description">{service.fullDescription}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
