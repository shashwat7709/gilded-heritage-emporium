import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from './ui/tilt';
import { useProducts } from '../context/ProductContext';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const GallerySection = () => {
  const { products, categories } = useProducts();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? products 
    : products.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-[#F5F1EA] relative overflow-hidden" id="gallery">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#46392d] mb-4">
            Curated Collections
          </h2>
          <p className="text-[#46392d]/70 max-w-2xl mx-auto">
            Discover our carefully curated collection of timeless treasures, each piece telling its own unique story of elegance and history.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-[#46392d] text-[#F5F1EA]'
                  : 'bg-white text-[#46392d] hover:bg-[#46392d]/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Tilt key={item.id}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#46392d] mb-2">{item.title}</h3>
                  <p className="text-[#46392d]/70">{item.description}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
