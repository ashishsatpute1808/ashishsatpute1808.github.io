import React from 'react';
import { FileText, Download } from 'lucide-react';

const ResumeButton = () => {
    // Placeholder file content is handled by link href="path" but here we might prompt user
    return (
        <>
            <a href="/resume.pdf" download className="resume-btn" aria-label="Download Resume">
                <FileText size={24} />
            </a>
            <style>{`
        .resume-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: var(--accent-primary);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 14px var(--accent-glow);
          z-index: 100;
          transition: var(--transition-normal);
          cursor: pointer;
        }
        .resume-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px var(--accent-glow);
        }
      `}</style>
        </>
    );
};

export default ResumeButton;
