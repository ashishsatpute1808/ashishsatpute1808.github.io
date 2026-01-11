import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: '/about', href: '#about' },
        { name: '/skills', href: '#skills' },
        { name: '/projects', href: '#projects' },
        { name: '/experience', href: '#experience' },
        { name: '/contact', href: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    <Terminal size={20} /> Ashish.Dev_
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          padding: 1rem 0;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent-primary);
          text-decoration: none;
        }

        .desktop-menu {
          display: none;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          transition: var(--transition-fast);
          font-size: 0.9rem;
        }

        .nav-link:hover {
          color: var(--text-primary);
          text-decoration: underline;
        }

        .mobile-toggle {
          background: none;
          border: none;
          color: var(--accent-primary);
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 60px;
          right: -100%;
          width: 100%;
          height: calc(100vh - 60px);
          background: var(--bg-primary);
          border-left: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 2rem;
          transition: 0.3s ease-in-out;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-link {
          color: var(--text-primary);
          font-size: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
          .mobile-menu {
             display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
