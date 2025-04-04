import React from 'react';
import { motion } from 'framer-motion';

const FeaturedCollection = () => {
  const collections = [
    {
      id: 1,
      title: "Vintage Furniture",
      image: "/photos/2023-12-14.jpg",
      description: "Timeless pieces that tell stories of the past"
    },
    {
      id: 2,
      title: "Antique Decor",
      image: "/photos/2021-12-15.jpg",
      description: "Elegant accessories for your home"
    },
    {
      id: 3,
      title: "Classic Collections",
      image: "/photos/2023-09-24.jpg",
      description: "Carefully curated vintage treasures"
    },
    {
      id: 4,
      title: "Heritage Items",
      image: "/photos/2024-08-02.jpg",
      description: "Pieces with historical significance"
    }
  ];

  return (
    <section id="collection" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-text mb-4">Featured Collection</h2>
          <p className="text-text/70 max-w-2xl mx-auto">
            Discover our carefully curated selection of timeless pieces that bring elegance and history to your space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-serif text-text-light mb-2">{item.title}</h3>
                  <p className="text-text-light/90 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-text-light transition-colors duration-300 uppercase tracking-wider text-sm">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection; 