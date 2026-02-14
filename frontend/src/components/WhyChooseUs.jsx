import React from 'react';
import { Award, Users, Shield, Target } from 'lucide-react';
import { whyChooseUs } from '../data/mockData';

const iconMap = {
  Award: Award,
  Users: Users,
  Shield: Shield,
  Target: Target
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Seaworks</h2>
          <p className="section-subtitle">
            Your trusted partner in marine and engineering excellence
          </p>
        </div>

        <div className="why-choose-grid">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={item.id} className="why-choose-card">
                <div className="why-icon-container">
                  {IconComponent && <IconComponent size={40} className="why-icon" />}
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
