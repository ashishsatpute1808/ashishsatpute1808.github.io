import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p>
                        I am a results-driven .NET Developer with 3+ years of experience in building, maintaining, and deploying scalable web applications and APIs.
                        I have extensive expertise in C#, ASP.NET Core, MVC, Web API, and modern front-end frameworks like Angular.
                    </p>
                    <p>
                        My skillset includes full-stack development, database design, and integrating DevOps practices.
                        I am adept at building clean, maintainable code and solving complex problems.
                        Currently, I am leveraging cloud technologies and real-time monitoring tools like the ELK stack to deliver robust enterprise solutions.
                    </p>
                </div>
            </div>
            <style>{`
        .about-container {
          max-width: 800px;
          text-align: center;
        }
        .about-content p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }
      `}</style>
        </section>
    );
};

export default About;
