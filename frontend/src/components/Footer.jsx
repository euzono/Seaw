import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_offshore-support/artifacts/6yb1tekq_logo.jpg" 
                alt="Seaworks Nigeria Limited"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Delivering excellence in marine, energy, and engineering services to Nigeria's oil & gas sector since 2003.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Us</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
              <li><a href="#news" onClick={(e) => scrollToSection(e, '#news')}>News</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Energy Services</a></li>
              <li><a href="#services">Marine Services</a></li>
              <li><a href="#services">Engineering Services</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Get a Quote</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={16} />
                <span>10A Shell Pipeline Rd, Rumuogba Estate, Rivers 503101, Nigeria</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+234 1 234 5678</span>
              </li>
              <li>
                <Mail size={16} />
                <span>info@seaworksng.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Seaworks Nigeria Limited. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="footer-separator">|</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
