import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-[#FAF6F1] py-6 border-b border-[#46392d]/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-16">
          <Link to="/" className="text-[#46392d] text-lg font-medium hover:text-[#46392d]/70">
            Home
          </Link>
          <Link to="/collection" className="text-[#46392d] text-lg font-medium hover:text-[#46392d]/70">
            Collection
          </Link>
          <Link to="/about" className="text-[#46392d] text-lg font-medium hover:text-[#46392d]/70">
            About
          </Link>
          <Link to="/contact" className="text-[#46392d] text-lg font-medium hover:text-[#46392d]/70">
            Contact
          </Link>
          <Link to="/shop" className="text-[#46392d] text-lg font-medium hover:text-[#46392d]/70">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 