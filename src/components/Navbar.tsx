
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-shadow/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#" className="font-playfair text-2xl font-bold text-porcelain flex items-center gap-2">
            <span className="text-brass">☕</span> THE VINTAGE COTTAGE
          </a>
        </div>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden md:flex items-center justify-end flex-1">
          <div className="flex items-center gap-8">
            {[
              { name: 'HOME', href: '#' },
              { name: 'MENU', href: '#collection' },
              { name: 'ABOUT', href: '#our-story' },
              { name: 'CONTACT', href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'font-lora text-sm uppercase tracking-wider transition-colors relative group',
                  isScrolled ? 'text-porcelain' : 'text-porcelain'
                )}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brass transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#shop" 
              className="inline-flex items-center justify-center gap-2 text-porcelain"
            >
              <ShoppingBag size={18} />
              <span className="uppercase tracking-wider text-sm">SHOP</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-porcelain" />
          ) : (
            <Menu className="text-porcelain" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={cn(
          'md:hidden absolute w-full bg-shadow/95 backdrop-blur-sm shadow-md transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {['HOME', 'MENU', 'ABOUT', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-lora text-lg text-porcelain py-2 border-b border-brass/20 uppercase tracking-wider"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#shop" 
            className="font-lora text-lg text-porcelain py-2 border-b border-brass/20 uppercase tracking-wider flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShoppingBag size={18} />
            <span>SHOP</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
