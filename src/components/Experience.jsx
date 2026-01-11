import React from 'react';

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
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: var(--border-color);
        }
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 3rem;
        }
        .timeline-dot {
          position: absolute;
          left: -6px;
          top: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-glow);
        }
        .timeline-date {
          color: var(--accent-primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        .timeline-role {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .timeline-company {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .timeline-content p {
          color: var(--text-secondary);
        }
        
        @media (min-width: 768px) {
          .timeline::before {
             left: 50%;
             transform: translateX(-50%);
          }
           .timeline-item {
             width: 50%;
             padding-left: 0;
             margin-bottom: 4rem;
           }
           .timeline-item:nth-child(odd) {
             padding-right: 3rem;
             text-align: right;
           }
           .timeline-item:nth-child(even) {
             margin-left: 50%;
             padding-left: 3rem;
           }
           .timeline-item:nth-child(odd) .timeline-dot {
             left: auto;
             right: -7px;
           }
           .timeline-item:nth-child(even) .timeline-dot {
             left: -7px;
           }
        }
      `}</style>
    </section>
  );
};

export default Experience;
