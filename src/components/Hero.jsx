import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">Ashish Satpute</h1>
                <h3 className="role">.NET Developer | Full Stack Engineer</h3>
                <p className="description">
                    Results-driven developer with 3+ years of experience in building scalable web applications.
                    Proficient in C#, ASP.NET Core, Angular, and modern cloud technologies.
                </p>

                <div className="cta-group">
                    <a href="#projects" className="btn btn-primary">
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        <Mail size={20} /> Contact Me
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>

            <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* offset for navbar */
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .blob {
          position: absolute;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 10s infinite ease-in-out;
        }

        .blob-1 {
          top: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: purple;
          animation-delay: 0s;
        }

        .blob-2 {
          bottom: -10%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: blue;
          animation-delay: 5s;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .greeting {
          color: var(--accent-primary);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .name {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #fff, #aaa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .role {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 2.5rem;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-primary {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 14px var(--accent-glow);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--accent-glow);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
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
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .name {
            font-size: 3rem;
          }
          .role {
            font-size: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
