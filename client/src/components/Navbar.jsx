import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseMenu();
  };

  return (
    <nav className="navbar">
      <div
        id="hamburger"
        className="hamburger"
        onClick={handleToggleMenu}
        aria-label="Open menu"
      >
        ☰
      </div>

      <div
        id="nav-overlay"
        className={`nav-overlay ${menuOpen ? 'show' : ''}`}
      >
        <div
          id="close-btn"
          className="close-btn"
          onClick={handleCloseMenu}
          aria-label="Close menu"
        >
          ×
        </div>
        <ul className="nav-links">
          <li><a onClick={() => handleLinkClick('hero')}>Home</a></li>
          <li><a onClick={() => handleLinkClick('about')}>About</a></li>
          <li><a onClick={() => handleLinkClick('featured-project')}>Projects</a></li>
          <li><a onClick={() => handleLinkClick('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
