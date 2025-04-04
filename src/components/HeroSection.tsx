
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1515592302748-6937af0215b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-antique-cream mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <span className="block">Discover the</span>
          <span className="text-antique-gold italic">Gilded Heritage</span>
        </h1>
        
        <div className="w-24 h-1 bg-antique-gold mx-auto my-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}></div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-antique-cream/90 mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
          Step into our exquisite emporium of timeless treasures, where each artifact 
          narrates a tale of India's royal splendor and artistic magnificence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <Button className="bg-antique-gold hover:bg-antique-burgundy text-white border border-antique-gold px-8 py-6">
            Explore Our Collection
          </Button>
          <Button variant="outline" className="border-antique-cream text-antique-cream hover:bg-antique-cream/10 px-8 py-6">
            Book a Private Viewing
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-antique-cream animate-bounce">
        <a href="#features" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
