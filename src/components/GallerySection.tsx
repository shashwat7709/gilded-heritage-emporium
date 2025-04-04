import React, { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Sarees', 'Jewelry', 'Home Decor', 'Handicrafts', 'Artifacts'];

const galleryItems = [
  {
    id: 1,
    category: 'Sarees',
    image: '/photos/2023-12-14.jpg',
    title: 'Banarasi Silk Saree',
    description: 'Handwoven with pure gold zari'
  },
  {
    id: 2,
    category: 'Jewelry',
    image: '/photos/2021-12-15.jpg',
    title: 'Temple Jewelry Set',
    description: 'Traditional South Indian design'
  },
  {
    id: 3,
    category: 'Home Decor',
    image: '/photos/2023-09-24.jpg',
    title: 'Brass Diyas Collection',
    description: 'Handcrafted in Moradabad'
  },
  {
    id: 4,
    category: 'Handicrafts',
    image: '/photos/2024-08-02.jpg',
    title: 'Rajasthani Puppets',
    description: 'Traditional string puppets'
  },
  {
    id: 5,
    category: 'Artifacts',
    image: '/photos/2023-12-14 (1).jpg',
    title: 'Vintage Tanjore Painting',
    description: 'Gold leaf work'
  },
  {
    id: 6,
    category: 'Home Decor',
    image: '/photos/2021-12-15 (1).jpg',
    title: 'Madhubani Wall Art',
    description: 'Hand-painted on silk'
  }
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="gallery">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-mandala-light opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-display text-text mb-4 relative">
              Our Heritage Collection
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20" />
            </h2>
          </div>
          <p className="text-text/70 max-w-2xl mx-auto font-body">
            Discover our carefully curated collection of authentic Indian treasures that bring the richness of our culture to your space
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-primary border-primary text-text-light'
                  : 'bg-transparent border-primary/20 text-text hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] border border-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-background/95 p-4 rounded-lg backdrop-blur-sm border border-primary/20">
                  <h3 className="text-lg font-display text-text">{item.title}</h3>
                  <p className="text-text/70 text-sm font-body">{item.description}</p>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-text-light transition-colors duration-300 rounded-full group relative overflow-hidden">
            <span className="relative z-10">Explore Full Collection</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
