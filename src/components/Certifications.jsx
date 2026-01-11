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
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">
              <Award className="cert-icon" size={32} />
              <div>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .cert-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: var(--transition-fast);
        }
        .cert-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-primary);
        }
        .cert-icon {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .cert-name {
          color: var(--text-primary);
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .cert-issuer {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
