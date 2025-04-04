
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const StorySection = () => {
  return (
    <section id="our-story" className="py-20 bg-antique-burgundy/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#D4AF37">
          <path d="M50,0 L100,50 L50,100 L0,50 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#D4AF37">
          <path d="M50,0 L100,50 L50,100 L0,50 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 ornate-border p-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617419086540-172402d8b6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Our Heritage" 
                className="w-full rounded-sm shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-antique-ivory p-4 shadow-lg rounded-sm w-32 h-32 flex items-center justify-center">
                <span className="font-playfair text-antique-gold text-center font-bold">
                  <span className="block text-3xl">75</span>
                  <span className="text-sm text-antique-burgundy">Years of Heritage</span>
                </span>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-antique-burgundy mb-6">
              Our Storied Legacy
            </h2>
            
            <div className="w-20 h-1 bg-antique-gold mb-8"></div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 1947 by the visionary collector Maharaj Singh Rathore, Gilded Heritage 
              began as a small haven for royal artifacts during India's transition to independence. 
              As princely states dissolved, we became custodians of their artistic heritage.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Three generations later, we continue our founder's mission of preserving India's 
              magnificent craftsmanship while bringing these treasures to discerning collectors worldwide. 
              Each piece in our collection is authenticated by our panel of experts and comes with 
              documented provenance.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center">
                <span className="block text-4xl font-playfair font-bold text-antique-gold">5000+</span>
                <span className="text-sm text-gray-600">Authentic Pieces</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-playfair font-bold text-antique-gold">35</span>
                <span className="text-sm text-gray-600">Royal Estates</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-playfair font-bold text-antique-gold">120+</span>
                <span className="text-sm text-gray-600">Years of History</span>
              </div>
            </div>
            
            <Button className="bg-antique-gold hover:bg-antique-burgundy text-white border border-antique-gold">
              Read Our Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
