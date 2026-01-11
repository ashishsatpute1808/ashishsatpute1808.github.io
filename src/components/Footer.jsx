import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Ashish.Dev_</h3>
                    <p>-- End of Line --</p>
                </div>

                <div className="footer-section">
                    <h4>Connect:</h4>
                    <div className="footer-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                        <a href="mailto:ashishsatpute1808@gmail.com"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>System.out.println("&copy; {new Date().getFullYear()} Ashish.Dev");</p>
            </div>

            <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 3rem 0 1.5rem;
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
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .footer-section h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .footer-section p {
          color: var(--text-secondary);
          font-family: monospace;
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
          padding-top: 1.5rem;
          border-top: 1px dashed var(--border-color);
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
