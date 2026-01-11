import React from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-wrapper">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info">
            <div className="info-card">
              <Mail className="info-icon" size={24} />
              <div>
                <h3>Email</h3>
                <a href="mailto:ashishsatpute1808@gmail.com">ashishsatpute1808@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <Phone className="info-icon" size={24} />
              <div>
                <h3>Phone</h3>
                <a href="tel:+919284315037">+91 9284315037</a>
              </div>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" size={24} />
              <div>
                <h3>Location</h3>
                <p>Pune, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <textarea rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 4rem;
          font-size: 1.1rem;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        
        @media (min-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
          }
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }

        .info-card:hover {
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .info-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .info-card h3 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .info-card a, .info-card p {
          color: var(--text-primary);
          font-size: 1rem;
          text-decoration: none;
          font-weight: 500;
        }

        .info-card a:hover {
          color: var(--accent-primary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: inherit;
          transition: var(--transition-fast);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.08);
        }
        button[type="submit"] {
          border: none;
          align-self: flex-start;
          cursor: pointer;
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
