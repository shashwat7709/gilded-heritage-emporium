import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from './ui/tilt';

const categories = ['All', 'Crystal & Glass', 'Porcelain', 'Vintage Decor', 'Collectibles'];

const galleryItems = [
  {
    id: 1,
    category: 'Crystal & Glass',
    image: '/photos/2023-12-14.jpg',
    title: 'Vintage Glassware',
    description: 'Elegant pink and ruby crystal collection'
  },
  {
    id: 2,
    category: 'Crystal & Glass',
    image: '/photos/2021-12-15.jpg',
    title: 'Floral Tapestry',
    description: 'Intricately woven vintage textile art'
  },
  {
    id: 3,
    category: 'Crystal & Glass',
    image: '/photos/2023-09-24.jpg',
    title: 'Classic Collections',
    description: 'Carefully curated vintage treasures'
  },
  {
    id: 4,
    category: 'Porcelain',
    image: '/photos/2024-08-02.jpg',
    title: 'Heritage Ceramics',
    description: 'Pieces with stories from heritage'
  },
  {
    id: 5,
    category: 'Collectibles',
    image: '/photos/2023-12-14 (1).jpg',
    title: 'Vintage Textiles',
    description: 'Hand-crafted textiles with timeless patterns'
  },
  {
    id: 6,
    category: 'Porcelain',
    image: '/photos/2021-12-15 (1).jpg',
    title: 'Heritage Blue Collection',
    description: 'Classic blue and white porcelain treasures'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-ivory relative overflow-hidden" id="gallery">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-filigree-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Curated Collections
          </h2>
          <p className="section-subtitle">
            Discover our carefully curated collection of timeless treasures, each piece telling its own unique story
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${
                activeCategory === category
                  ? 'category-button-active'
                  : 'category-button-inactive'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="product-grid"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Tilt
                className="w-full h-full"
                rotationFactor={4}
                isRevese
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              >
                <div className="product-image-container">
                  <motion.div
                    className="group relative overflow-hidden rounded-lg shadow-md"
                    variants={itemVariants}
                  >
                    <img
                      src={item.image}
                      alt={item.title || 'Gallery item'}
                      className="w-full h-[280px] md:h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.title && item.description && (
                      <div className="absolute inset-0 p-3 flex flex-col justify-end bg-gradient-to-t from-[#46392d]/80 to-transparent">
                        <h3 className="text-sm md:text-base font-display text-[#F5F1EA] mb-0.5">{item.title}</h3>
                        <p className="text-[#F5F1EA]/90 text-xs font-body leading-tight">{item.description}</p>
                      </div>
                    )}
                  </motion.div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="heritage-button">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
