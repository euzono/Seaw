import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { newsArticles } from '../data/mockData';

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">News & Insights</h2>
          <p className="section-subtitle">
            Latest updates from Seaworks and the marine industry
          </p>
        </div>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <div key={article.id} className="news-card">
              <div className="news-header">
                <span className="news-category">
                  <Tag size={14} />
                  {article.category}
                </span>
                <span className="news-date">
                  <Calendar size={14} />
                  {article.date}
                </span>
              </div>
              <h3 className="news-title">{article.title}</h3>
              <p className="news-excerpt">{article.excerpt}</p>
              <button className="news-read-more">
                Read More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
