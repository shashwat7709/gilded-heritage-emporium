import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-paisley-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-saffron/10 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indianRed/10 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-display text-text relative">
              Join Our Heritage Circle
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20" />
            </h2>
          </div>
          <p className="text-text/70 mb-8 max-w-2xl mx-auto font-body">
            Subscribe to receive updates about new arrivals, exclusive invitations to cultural events, and insights into Indian heritage
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full border-2 border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background/80 backdrop-blur-sm font-body"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-text-light rounded-full hover:bg-primary-dark transition-colors duration-300 whitespace-nowrap font-display group relative overflow-hidden"
            >
              <span className="relative z-10">Subscribe Now</span>
              <div className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </form>

          <p className="text-text/50 text-sm mt-4 font-body">
            By subscribing, you agree to receive our newsletter. Your privacy is important to us.
          </p>

          {/* Social Proof with Indian Context */}
          <div className="mt-16 pt-12 border-t border-primary/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-display text-text mb-2">5000+</h3>
                <p className="text-text/70 font-body">Artisanal Products</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-display text-text mb-2">1000+</h3>
                <p className="text-text/70 font-body">Happy Families</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-display text-text mb-2">25+</h3>
                <p className="text-text/70 font-body">Indian States</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-display text-text mb-2">100%</h3>
                <p className="text-text/70 font-body">Authentic Heritage</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-4 top-1/4 w-24 h-24 border-2 border-primary/20 rounded-full opacity-20" />
          <div className="absolute -right-4 bottom-1/4 w-32 h-32 border-2 border-primary/20 rounded-full opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter; 