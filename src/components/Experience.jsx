import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Experience = () => {
  const experiences = [
    {
      role: "System Engineer",
      company: "Infosys",
      period: "Apr 2025 - Present",
      description: "Developed and maintained enterprise web applications using ASP.NET Core and SQL Server. Enhanced performance by 30% through code optimization and efficient database queries."
    },
    {
      role: "Senior System Associate",
      company: "Infosys",
      period: "Oct 2023 - Jun 2025",
      description: "Contributed to full-stack development using Angular and modern backend technologies. Participated in daily Agile stand-ups and sprint planning."
    },
    {
      role: "Operations Executive",
      company: "Infosys",
      period: "Oct 2021 - Oct 2023",
      description: "Started career in operations, ensuring smooth delivery of services and supporting critical business processes."
    }
  ];

  return (
    <section id="experience" className="section">
      <RevealOnScroll>
        <div className="container">
          <h2 className="section-title">&gt; Execute_History_Log<span className="cursor-blink"></span></h2>
          <div className="terminal-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="log-entry">
                <div className="log-marker">&gt;</div>
                <div className="log-content">
                  <div className="log-header">
                    <span className="log-time">[{exp.period}]</span>
                    <h3 className="log-role">{exp.role} @ {exp.company}</h3>
                  </div>
                  <p className="log-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <style>{`
        .terminal-timeline {
          border-left: 2px dashed var(--border-color);
          margin-left: 1rem;
          padding-top: 1rem;
        }

        .log-entry {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 4rem;
        }
        
        .log-marker {
          position: absolute;
          left: -0.65rem;
          top: 0;
          background: var(--bg-primary);
          color: var(--accent-primary);
          font-weight: bold;
        }

        .log-header {
          margin-bottom: 0.5rem;
        }

        .log-time {
          color: var(--text-secondary);
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.25rem;
        }

        .log-role {
          color: var(--text-primary);
          font-size: 1.25rem;
        }

        .log-desc {
          color: var(--text-secondary);
          max-width: 700px;
        }
      `}</style>
    </section>
  );
};

export default Experience;
