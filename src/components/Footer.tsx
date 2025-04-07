
import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-antique-burgundy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="font-cormorant text-3xl font-bold text-antique-gold">
                Gilded Heritage
              </span>
              <span className="block text-xs uppercase tracking-widest text-antique-cream mt-1">
                EST. 1947
              </span>
            </div>
            <p className="text-white/80 mb-6">
              An exquisite emporium of timeless treasures, where each artifact 
              narrates a tale of India's royal splendor.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-antique-gold/80 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Collection', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/80 hover:text-antique-gold transition-colors flex items-center"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">Collections</h3>
            <ul className="space-y-3">
              {['Royal Furniture', 'Vintage Jewelry', 'Paintings & Art', 'Rare Artifacts', 'Textiles & Carpets', 'Books & Manuscripts'].map((category) => (
                <li key={category}>
                  <a 
                    href="#"
                    className="text-white/80 hover:text-antique-gold transition-colors flex items-center"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">Subscribe</h3>
            <p className="text-white/80 mb-4">
              Join our newsletter to receive updates on new acquisitions, 
              private viewings, and exclusive events.
            </p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-l-sm py-2 px-3 w-full focus:outline-none focus:ring-1 focus:ring-antique-gold/50"
              />
              <button 
                type="submit"
                className="bg-antique-gold hover:bg-antique-gold/80 text-white rounded-r-sm px-4"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
            <p className="text-white/60 text-xs">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gilded Heritage. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
