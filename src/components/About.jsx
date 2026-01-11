import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
    return (
        <section id="about" className="section">
            <RevealOnScroll>
                <div className="container about-container">
                    <h2 className="section-title">&gt; About_Me<span className="cursor-blink"></span></h2>
                    <div className="terminal-card">
                        <div className="terminal-header">
                            <div className="terminal-button red"></div>
                            <div className="terminal-button yellow"></div>
                            <div className="terminal-button green"></div>
                            <span className="terminal-title">user_profile.txt</span>
                        </div>
                        <div className="about-content">
                            <p className="comment"># Summary</p>
                            <p>
                                I am a results-driven .NET Developer with 3+ years of experience in building, maintaining, and deploying scalable web applications and APIs.
                                Proficient in C#, ASP.NET Core, MVC, Web API, and modern front-end frameworks like Angular.
                            </p>
                            <br />
                            <p className="comment"># Expertise</p>
                            <p>
                                My skillset includes full-stack development, database design, and integrating DevOps practices.
                                I am adept at building clean, maintainable code and solving complex problems.
                                Currently, I am leveraging cloud technologies and real-time monitoring tools like the ELK stack to deliver robust enterprise solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            <style>{`
        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: var(--accent-primary);
        }
        .about-container {
          max-width: 900px;
        }
        .terminal-card {
           background: var(--bg-card);
           border: 1px solid var(--border-color);
           margin: 0 auto;
        }
        .terminal-header {
           background: var(--bg-secondary);
           padding: 0.5rem 1rem;
           border-bottom: 1px solid var(--border-color);
           display: flex;
           align-items: center;
           gap: 0.5rem;
        }
        .terminal-button {
           width: 12px;
           height: 12px;
           border-radius: 50%;
        }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        
        .terminal-title {
           margin-left: 1rem;
           color: var(--text-secondary);
           font-size: 0.8rem;
        }

        .about-content {
           padding: 2rem;
        }
        
        .about-content p {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .comment {
           color: var(--text-secondary);
           font-style: italic;
        }
      `}</style>
        </section>
    );
};

export default About;
