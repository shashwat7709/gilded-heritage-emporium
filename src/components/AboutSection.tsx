import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F5F1EA] relative" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif text-[#46392d] mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-[#46392d]/20 mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 text-[#46392d]/80">
              <p>
                Welcome to The Vintage Cottage, where every piece tells a story and every corner holds 
                a treasure waiting to be discovered. Our journey began with a passion for preserving 
                the elegance and craftsmanship of bygone eras.
              </p>
              <p>
                We carefully curate our collection, seeking out unique pieces that combine historical 
                significance with timeless beauty. From delicate crystal and vintage furniture to 
                rare books and garden antiquities, each item in our collection has been chosen for 
                its distinctive character and enduring appeal.
              </p>
              <p>
                Our mission is to help you create spaces that reflect both history and personal style. 
                We believe that antiques and vintage pieces add depth, character, and sophistication 
                to any environment, making your home truly unique.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src="/photos/products/2023-02-05(1).jpg"
                    alt="Vintage furniture display"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src="/photos/products/2021-12-15 (15).jpg"
                    alt="Crystal collection"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src="/photos/products/2023-09-24 (11).jpg"
                    alt="Vintage lighting"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src="/photos/products/2024-08-02 (22).jpg"
                    alt="Decorative accents"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-serif text-[#46392d] mb-4">
              Visit Our Shop
            </h3>
            <p className="text-[#46392d]/80 max-w-2xl mx-auto">
              Experience the charm of our carefully curated collection in person. Our knowledgeable 
              staff is here to help you find the perfect pieces to enhance your space and bring your 
              vision to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 