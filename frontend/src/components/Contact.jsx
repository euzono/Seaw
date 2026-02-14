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

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6862474767877!2d7.019744!3d4.834167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd5d5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sShell%20Pipeline%20Rd%2C%20Rumuogba%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seaworks Nigeria Limited Location"
              ></iframe>
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
