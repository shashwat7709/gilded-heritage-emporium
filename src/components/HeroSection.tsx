
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/c0545fd9-2f31-4ca6-92f1-1959793c7ae1.png')",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-shadow/90 to-shadow/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-start justify-center h-full">
        <div className="max-w-2xl">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-porcelain mb-6 leading-tight">
            <span className="block">THE</span>
            <span className="block">VINTAGE</span>
            <span className="block">COTTAGE</span>
          </h1>
          
          <p className="text-xl text-porcelain/90 mb-10 max-w-lg">
            Experience the perfect blend of tradition and timeless elegance
          </p>
          
          <div className="flex gap-6">
            <Button 
              variant="outline"
              className="border-porcelain text-porcelain hover:bg-porcelain/10 px-8 py-6 uppercase tracking-wider"
              onClick={() => window.location.href = "#collection"}
            >
              Explore Menu
            </Button>
            
            <Button 
              variant="outline"
              className="border-porcelain text-porcelain hover:bg-porcelain/10 px-8 py-6 uppercase tracking-wider"
              onClick={() => window.location.href = "#our-story"}
            >
              About Us
            </Button>
          </div>
        </div>

        {/* Coffee Cup Image */}
        <div className="absolute right-20 bottom-1/3 hidden lg:block">
          <img src="/vintage-cup.png" alt="Coffee Cup" className="w-64 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
