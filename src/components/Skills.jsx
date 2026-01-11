import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Backend", items: ["C#", ".NET Core", "ASP.NET MVC", "Web API", "Entity Framework", "RESTful APIs"] },
    { category: "Frontend", items: ["Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { category: "Database", items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Oracle DB"] },
    { category: "DevOps & Tools", items: ["Git", "GitHub", "GitLab", "Jenkins", "JIRA", "Linux", "SSMS", "Kibana"] },
    { category: "Methodologies", items: ["Agile (Scrum)", "CI/CD", "Performance Optimization", "Code Review"] }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">{item}</span>
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
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          color: var(--text-primary);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .skill-category {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: var(--transition-normal);
        }
        .skill-category:hover {
          transform: translateY(-5px);
          border-color: var(--accent-primary);
        }
        .skill-category h3 {
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }
        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          border-color: var(--accent-primary);
        }
      `}</style>
    </section>
  );
};

export default Skills;
