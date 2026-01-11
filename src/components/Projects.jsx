import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Appointment_Scheduler",
      description: "Designed and developed a full-stack CRUD application for managing appointment schedules. Implemented authentication, form validation, and optimized API response times.",
      tech: ["ASP.NET Core", "EF Core", "SQL Server", "Angular"],
      github: "https://github.com/ashishsatpute1808",
      live: "#",
    },
    {
      id: 2,
      title: "E-Commerce_Platform_Demo",
      description: "A full-featured online store architecture demonstrating microservices patterns and secure payment integration.",
      tech: ["C#", ".NET Core", "React", "Azure"],
      github: "https://github.com/ashishsatpute1808",
      live: "#",
    },
    {
      id: 3,
      title: "Task_Management_System",
      description: "Real-time task tracking application with team collaboration features and automated reporting.",
      tech: ["Node.js", "MongoDB", "Express", "React"],
      github: "https://github.com/ashishsatpute1808",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="section">
      <RevealOnScroll>
        <div className="container">
          <h2 className="section-title">&gt; ls ./projects<span className="cursor-blink"></span></h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <div className="card-actions">
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>

                <div className="card-body">
                  <p className="project-desc">{project.description}</p>

                  <div className="tech-stack">
                    <p className="label">Stack:</p>
                    <div className="tech-items">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-item">[{t}]</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <Github size={16} /> source_code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn">
                      <ExternalLink size={16} /> execute_demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
        }
        .project-card:hover {
          border-color: var(--accent-primary);
        }

        .card-header {
          background: var(--bg-secondary);
          padding: 0.75rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
        }
        .card-header h3 {
          font-size: 1rem;
          color: var(--text-primary);
        }
        .dot {
          width: 8px; height: 8px; background: var(--border-color); border-radius: 50%; display: inline-block; margin-left: 5px;
        }

        .card-body {
          padding: 1.5rem;
        }

        .project-desc {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .tech-stack {
          margin-bottom: 1.5rem;
        }
        .label {
          color: var(--accent-primary);
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        .tech-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-item {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
          border-top: 1px dashed var(--border-color);
          padding-top: 1rem;
        }
        .link-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        .link-btn:hover {
           text-decoration: underline;
           color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Projects;
