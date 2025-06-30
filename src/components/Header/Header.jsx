import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Vivekanand College</h1>
         <nav className="nav">
          <Link to="/home" className='nav-link'>Home </Link>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/courses" className='nav-link'>Courses</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
          <Link to="/apply-button" className='nav-link'>Apply Now</Link>
        </nav>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        {/* <Link to="/HomePage" onClick={closeMenu} className="mobile-link">Home</Link>
        <Link to="/AboutPage" onClick={closeMenu} className="mobile-link">About</Link>
        <Link to="/CoursesPage" onClick={closeMenu} className="mobile-link">Courses</Link>
        <Link to="/ContactPage" onClick={closeMenu} className="mobile-link">Contact</Link>
        <Link to="/apply-button" onClick={closeMenu} className="mobile-apply">Apply Now!</Link> */}
      </div>
    </header>
  );
};

export default Header;