
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Maharaja Throne Chair',
    period: '19th Century',
    price: '₹3,45,000'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1633165404679-870c0c70fba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    title: 'Antique Gold Necklace',
    period: 'Early 20th Century',
    price: '₹1,25,000'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542638972-9ffc46f38523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Decorative Brass Lamp',
    period: 'Mid 19th Century',
    price: '₹72,000'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1614686473573-8ba75af3b8b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    title: 'Mughal Miniature Painting',
    period: '18th Century',
    price: '₹2,10,000'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Carved Teak Wood Door',
    period: 'Late 19th Century',
    price: '₹4,95,000'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1543245223-1247dcb9ef9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Silver Filigree Box',
    period: 'Early 20th Century',
    price: '₹58,000'
  }
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-[#f8f5f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-antique-burgundy mb-4">
            Featured Treasures
          </h2>
          <div className="decorative-divider">
            <span>✦</span>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Each artifact tells a story of opulence, craftsmanship, and historical significance,
            carefully preserved for generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-sm shadow-lg transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-w-1 aspect-h-1 h-[300px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-playfair font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-antique-gold mt-1">{item.period}</p>
                <p className="text-white/90 mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center font-medium text-antique-burgundy hover:text-antique-gold transition-colors">
            <span className="mr-2">View Full Collection</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
