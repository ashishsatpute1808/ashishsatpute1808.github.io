import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      name: "GitHub Copilot Certified",
      issuer: "Microsoft",
      date: "Jan 2026 - Jan 2028"
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      date: "2025"
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">&gt; Cat certifications.txt</h2>
        <div className="certs-list">
          {certs.map((cert, index) => (
            <div key={index} className="cert-item">
              <span className="line-prefix">root@ashish:~/certs#</span>
              <span className="cert-text"> Verified: {cert.name} </span>
              <span className="cert-meta">({cert.issuer}, {cert.date})</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .certs-list {
          background: var(--bg-card);
          padding: 2rem;
          border: 1px solid var(--border-color);
          font-family: var(--font-main);
        }
        .cert-item {
          margin-bottom: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
        }
        .line-prefix {
          color: var(--accent-primary);
        }
        .cert-text {
          color: var(--text-primary);
          font-weight: 600;
        }
        .cert-meta {
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  );
};

export default Certifications;
