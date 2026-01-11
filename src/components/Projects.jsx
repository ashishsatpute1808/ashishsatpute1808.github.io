import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Appointment Scheduler Project",
      description: "Designed and developed a full-stack CRUD application for managing appointment schedules. Implemented authentication, form validation, and optimized API response times.",
      tech: ["ASP.NET Core", "EF Core", "SQL Server", "Angular"],
      github: "https://github.com",
      live: "#",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "E-Commerce Platform (Demo)",
      description: "A full-featured online store architecture demonstrating microservices patterns and secure payment integration.",
      tech: ["C#", ".NET Core", "React", "Azure"],
      github: "https://github.com",
      live: "#",
      color: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Real-time task tracking application with team collaboration features and automated reporting.",
      tech: ["Node.js", "MongoDB", "Express", "React"],
      github: "https://github.com",
      live: "#",
      color: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div
                className="project-image"
                style={{ background: project.color }}
              >
                {/* Placeholder for project image */}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                    <Github size={20} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-btn">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          background: var(--bg-card);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: var(--transition-normal);
        }
        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-primary);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }
        .project-image {
          height: 200px;
          width: 100%;
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .project-desc {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-tag {
          font-size: 0.8rem;
          color: var(--accent-primary);
          background: rgba(59, 130, 246, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .link-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .link-btn:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Projects;
