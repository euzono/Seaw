import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'News', path: '#news' },
    { name: 'Contact', path: '#contact' },
    { name: 'Mail', path: 'https://seaworksng.com/webmail', external: true }
  ];

  const scrollToSection = (e, path, external) => {
    if (external) {
      return; // Let the default link behavior handle external links
    }
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className={`dark-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img 
            src="https://customer-assets.emergentagent.com/job_offshore-support/artifacts/6yb1tekq_logo.jpg" 
            alt="Seaworks Nigeria Limited"
            className="header-logo"
          />
        </Link>

        <nav className="dark-nav desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path, link.external)}
              className={`dark-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path, link.external)}
              className="mobile-nav-link"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
