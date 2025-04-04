
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
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
          ? 'bg-antique-cream/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="font-cormorant text-3xl font-bold text-antique-gold">
            Gilded Heritage
          </span>
          <span className="ml-2 text-xs uppercase tracking-widest text-antique-burgundy mt-1">
            EST. 1947
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Collection', 'Gallery', 'Our Story', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                'font-playfair text-lg transition-colors relative group',
                isScrolled ? 'text-antique-burgundy' : 'text-antique-cream'
              )}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-antique-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <Button 
          className="hidden md:block bg-antique-gold hover:bg-antique-burgundy text-white"
          variant="default"
        >
          Book Appointment
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn(isScrolled ? 'text-antique-burgundy' : 'text-antique-cream')} />
          ) : (
            <Menu className={cn(isScrolled ? 'text-antique-burgundy' : 'text-antique-cream')} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={cn(
          'md:hidden absolute w-full bg-antique-cream/95 backdrop-blur-sm shadow-md transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {['Home', 'Collection', 'Gallery', 'Our Story', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-playfair text-lg text-antique-burgundy py-2 border-b border-antique-gold/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-antique-gold hover:bg-antique-burgundy text-white mt-2"
            variant="default"
          >
            Book Appointment
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
