import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="nav-brand">
            The Vintage Cottage
          </a>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#collection" className="nav-link">
            Collection
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-ivory hover:text-gold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;