
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-antique-ivory">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 bg-antique-gold/10 p-8 rounded-sm">
            <h2 className="text-3xl font-playfair font-bold text-antique-burgundy mb-6">
              Visit Our Emporium
            </h2>
            
            <div className="w-20 h-1 bg-antique-gold mb-8"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-antique-gold shrink-0 mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    17, Heritage Lane, Lajpat Nagar
                    <br />
                    New Delhi, 110024
                    <br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-antique-gold shrink-0 mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Opening Hours</h3>
                  <p className="text-gray-600">
                    Tuesday to Sunday
                    <br />
                    10:00 AM - 7:00 PM
                    <br />
                    <span className="text-antique-burgundy italic">Closed on Mondays</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-antique-gold shrink-0 mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Contact</h3>
                  <p className="text-gray-600">
                    +91 98765 43210
                    <br />
                    +91 11 4567 8901
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-antique-gold shrink-0 mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    inquiries@gildedheritage.com
                    <br />
                    appointments@gildedheritage.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-antique-burgundy flex items-center justify-center text-white hover:bg-antique-gold transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-sm shadow-md">
            <h2 className="text-3xl font-playfair font-bold text-antique-burgundy mb-6">
              Inquire About Our Collection
            </h2>
            
            <div className="w-20 h-1 bg-antique-gold mb-8"></div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="border-antique-gold/30 focus:border-antique-gold focus:ring-antique-gold/20"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="border-antique-gold/30 focus:border-antique-gold focus:ring-antique-gold/20"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <Input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="border-antique-gold/30 focus:border-antique-gold focus:ring-antique-gold/20"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Subject of Inquiry</label>
                <select className="w-full rounded-md border border-antique-gold/30 focus:border-antique-gold focus:ring-antique-gold/20 py-2 px-3">
                  <option value="">Select an option</option>
                  <option value="purchase">Purchase Inquiry</option>
                  <option value="appointment">Private Viewing Appointment</option>
                  <option value="valuation">Antique Valuation</option>
                  <option value="selling">Selling to Us</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <Textarea 
                  placeholder="Please provide details about your inquiry..." 
                  className="border-antique-gold/30 focus:border-antique-gold focus:ring-antique-gold/20 h-32"
                />
              </div>
              
              <Button className="bg-antique-gold hover:bg-antique-burgundy text-white w-full py-6">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
