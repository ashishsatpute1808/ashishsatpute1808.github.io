import React from 'react';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <RevealOnScroll>
        <div className="container contact-wrapper">
          <h2 className="section-title">&gt; sudo ./send_message<span className="cursor-blink"></span></h2>
          <p className="contact-subtitle">
            # Establishing secure connection...
            <br />
            # Ready to receive transmission.
          </p>

          <div className="contact-content">
            {/* Contact Info Cards */}
            <div className="contact-info">
              <div className="info-card">
                <span className="card-bracket">[</span>
                <Mail className="info-icon" size={20} />
                <div>
                  <h3>Email:</h3>
                  <a href="mailto:ashishsatpute1808@gmail.com">ashishsatpute1808@gmail.com</a>
                </div>
                <span className="card-bracket">]</span>
              </div>

              <div className="info-card">
                <span className="card-bracket">[</span>
                <Phone className="info-icon" size={20} />
                <div>
                  <h3>Phone:</h3>
                  <a href="tel:+919284315037">+91 9284315037</a>
                </div>
                <span className="card-bracket">]</span>
              </div>

              <div className="info-card">
                <span className="card-bracket">[</span>
                <MapPin className="info-icon" size={20} />
                <div>
                  <h3>Location:</h3>
                  <p>Pune, Maharashtra</p>
                </div>
                <span className="card-bracket">]</span>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <span className="input-prompt">&gt;</span>
                <input type="text" placeholder="Enter_Name" />
              </div>
              <div className="form-group">
                <span className="input-prompt">&gt;</span>
                <input type="email" placeholder="Enter_Email_Address" />
              </div>
              <div className="form-group">
                <span className="input-prompt">&gt;</span>
                <textarea rows="5" placeholder="Enter_Message_Content..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                EXECUTE_SEND <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>

      <style>{`
        .contact-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 4rem;
          font-family: var(--font-main);
          opacity: 0.8;
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
           color: var(--text-primary);
        }
        
        .card-bracket {
           color: var(--accent-primary);
           font-size: 1.5rem;
           font-weight: 300;
        }

        .info-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .info-card h3 {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .info-card a, .info-card p {
          color: var(--text-primary);
          font-size: 1rem;
          text-decoration: none;
        }

        .info-card a:hover {
          text-decoration: underline;
          color: var(--accent-primary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-group {
           position: relative;
           display: flex;
           align-items: flex-start;
           gap: 0.5rem;
        }
        
        .input-prompt {
           color: var(--accent-primary);
           padding-top: 1rem;
           font-weight: bold;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 0;
          color: var(--text-primary);
          font-family: var(--font-main);
          transition: var(--transition-fast);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(0, 255, 65, 0.05);
        }
        button[type="submit"] {
          border: 1px solid var(--accent-primary);
          background: transparent;
          color: var(--accent-primary);
          padding: 1rem 2rem;
          font-family: var(--font-main);
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition-fast);
        }
        button[type="submit"]:hover {
           background: var(--accent-primary);
           color: var(--bg-primary);
        }
      `}</style>
    </section>
  );
};

export default Contact;
