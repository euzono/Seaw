import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projects Showcase</h2>
          <p className="section-subtitle">
            Delivering excellence across Nigeria's oil & gas sector
          </p>
        </div>

        <div className="projects-carousel">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevProject}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-year-badge">{project.year}</div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextProject}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
