import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-text mb-4">Visit Our Store</h2>
              <p className="text-text/70 max-w-lg">
                Step into our world of timeless elegance. We're here to help you discover the perfect pieces for your collection.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-text mb-2">Location</h3>
                <p className="text-text/70">123 Heritage Lane</p>
                <p className="text-text/70">Vintage District, VD 12345</p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-text mb-2">Hours</h3>
                <p className="text-text/70">Monday - Saturday: 10:00 AM - 6:00 PM</p>
                <p className="text-text/70">Sunday: 12:00 PM - 5:00 PM</p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-text mb-2">Contact</h3>
                <p className="text-text/70">Phone: (555) 123-4567</p>
                <p className="text-text/70">Email: info@vintagecottage.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-serif text-text mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message"
                ></textarea>
              </div>

              <Button className="w-full bg-primary text-text-light hover:bg-primary-dark transition-colors duration-300">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
