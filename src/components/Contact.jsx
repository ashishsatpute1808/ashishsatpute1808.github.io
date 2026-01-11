import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>

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
            <style>{`
        .contact-container {
          max-width: 600px;
          text-align: center;
        }
        .contact-subtitle {
          color: var(--text-secondary);
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
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
