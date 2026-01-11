import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Ashish.Dev</h3>
                    <p>Building digital experiences with passion and precision.</p>
                </div>

                <div className="footer-section">
                    <h4>Socials</h4>
                    <div className="footer-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                        <a href="mailto:contact@ashish.dev"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ashish.Dev. All rights reserved.</p>
            </div>

            <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
          border-top: 1px solid var(--border-color);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .footer-section p {
          color: var(--text-secondary);
        }

        .footer-socials {
          display: flex;
          gap: 1rem;
        }

        .footer-socials a {
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .footer-socials a:hover {
          color: var(--accent-primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
