import React from 'react';
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Andrew Lewis. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://github.com/andrewpjlewis"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/andrewlewis357/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.behance.net/andrewlewis54"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance"
        >
          <FaBehance />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
