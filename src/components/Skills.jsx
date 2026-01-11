import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Backend", items: ["C#", ".NET Core", "ASP.NET MVC", "Web API", "Entity Framework", "RESTful APIs"] },
    { category: "Frontend", items: ["Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { category: "Database", items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Oracle DB"] },
    { category: "DevOps_Tools", items: ["Git", "GitHub", "GitLab", "Jenkins", "JIRA", "Linux", "SSMS", "Kibana"] },
    { category: "Methodologies", items: ["Agile (Scrum)", "CI/CD", "Perf_Optimization", "Code_Review"] }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">&gt; Skills_Inventory</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>./{category.category}</h3>
              <div className="skill-tags">
                {category.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">&lt;{item}/&gt;</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .section {
          padding: 6rem 0;
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: 3rem;
          color: var(--accent-primary);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .skill-category {
          background: var(--bg-card);
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          position: relative;
        }
        .skill-category:hover {
          border-color: var(--accent-primary);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
        }
        .skill-category::before {
           content: '';
           position: absolute;
           top: 0; left: 0; width: 10px; height: 10px;
           border-top: 2px solid var(--accent-primary);
           border-left: 2px solid var(--accent-primary);
        }
        .skill-category::after {
           content: '';
           position: absolute;
           bottom: 0; right: 0; width: 10px; height: 10px;
           border-bottom: 2px solid var(--accent-primary);
           border-right: 2px solid var(--accent-primary);
        }

        .skill-category h3 {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          border-bottom: 1px dashed var(--border-color);
          padding-bottom: 0.5rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .skill-tag {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }
        .skill-tag:hover {
          color: var(--text-primary);
          text-shadow: 0 0 5px var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Skills;
