import React from 'react';
import { FileText } from 'lucide-react';

const ResumeButton = () => {
  return (
    <>
      <a href="/resume.pdf" download className="resume-btn" aria-label="Download Resume" title="Download CV">
        <span className="btn-text">GET_CV</span> <FileText size={20} />
      </a>
      <style>{`
        .resume-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: var(--bg-primary);
          color: var(--accent-primary);
          border: 1px solid var(--accent-primary);
          padding: 0.75rem 1rem;
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          align-items: center;
          box-shadow: 4px 4px 0px var(--text-secondary);
          z-index: 100;
          transition: var(--transition-fast);
          cursor: pointer;
          text-decoration: none;
          font-weight: bold;
        }
        .resume-btn:hover {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px var(--text-secondary);
        }
        .resume-btn:active {
           transform: translate(4px, 4px);
           box-shadow: none;
        }
      `}</style>
    </>
  );
};

export default ResumeButton;
