import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Ashish Satpute";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <p className="prompt"><span className="path">C:\Users\Visitor&gt;</span> whoami</p>

                <div className="response-block">
                    <h2 className="greeting">&gt; Hello, I'm</h2>
                    <h1 className="name">
                        {text}<span className="cursor">_</span>
                    </h1>

                    <div className="role-box">
                        <span className="bracket">[</span>
                        <span className="role-text">.NET Developer | Full Stack Engineer</span>
                        <span className="bracket">]</span>
                    </div>

                    <p className="description">
                        &gt; Results-driven developer with 3+ years of experience in building scalable web applications.
                        &gt; Proficient in C#, ASP.NET Core, Angular, and modern cloud technologies.
                    </p>
                </div>

                <div className="cta-group">
                    <a href="#projects" className="btn btn-primary">
                        ./view_projects.exe
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        ./contact_me.sh
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>

            <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 60px;
        }

        .prompt {
          font-family: var(--font-main);
          color: var(--text-primary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .path {
          color: var(--text-secondary);
        }

        .response-block {
          border-left: 2px solid var(--border-color);
          padding-left: 1.5rem;
          margin-bottom: 2rem;
        }

        .greeting {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        .name {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -2px;
          text-transform: uppercase;
        }

        .cursor {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .role-box {
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .bracket {
          color: var(--text-secondary);
          margin: 0 0.5rem;
        }

        .description {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.8;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          font-family: var(--font-main);
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-fast);
          border: 1px solid var(--accent-primary);
          background: transparent;
          color: var(--accent-primary);
        }

        .btn:hover {
          background: var(--accent-primary);
          color: var(--bg-primary);
          box-shadow: 0 0 15px var(--accent-glow);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .social-icon:hover {
          color: var(--accent-primary);
        }

        @media (max-width: 768px) {
          .name {
            font-size: 2.5rem;
          }
          .btn {
            width: 100%;
            text-align: center;
          }
          .cta-group {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
