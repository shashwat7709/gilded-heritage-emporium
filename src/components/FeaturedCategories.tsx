
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Vintage Furniture',
    description: 'Beautifully crafted pieces with stories to tell',
    image: 'https://images.unsplash.com/photo-1557367184-663fba4b8b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 2,
    title: 'Porcelain & Ceramic',
    description: 'Delicate pieces from around the world',
    image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
  },
  {
    id: 3,
    title: 'Lighting & Chandeliers',
    description: 'Elegant fixtures that bring warmth to any space',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
  },
  {
    id: 4,
    title: 'Collectibles & Curios',
    description: 'Unique treasures and conversation pieces',
    image: 'https://images.unsplash.com/photo-1584283367830-7875dd39f6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  }
];

const FeaturedCategories = () => {
  return (
    <section id="collection" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-mahogany mb-4">
            Our Curated Collection
          </h2>
          <div className="decorative-divider">
            <span>✦</span>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-dark-wood">
            Each item in our shop has been carefully selected for its craftsmanship, 
            history, and unique character, bringing the charm of yesteryear to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-w-3 aspect-h-4 h-[400px] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shadow/80 via-shadow/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:bottom-4">
                <h3 className="text-xl font-playfair font-bold text-white">
                  {category.title}
                </h3>
                <p className="text-white/80 mt-2 text-sm max-w-[250px]">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-brass text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore Collection</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
