import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { contactInfo } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to discuss your marine and engineering needs?
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Reach out to us for quotes, inquiries, or partnership opportunities.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <div className="contact-label">Address</div>
                  <div className="contact-value">{contactInfo.address}</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <Phone className="contact-icon" size={24} />
                <div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">{contactInfo.phone}</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <Mail className="contact-icon" size={24} />
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">{contactInfo.email}</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <Clock className="contact-icon" size={24} />
                <div>
                  <div className="contact-label">Business Hours</div>
                  <div className="contact-value">{contactInfo.hours}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Service Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your project or inquiry..."
                  rows="5"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
