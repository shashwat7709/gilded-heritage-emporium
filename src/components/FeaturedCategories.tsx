
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Jewelry',
    image: '/photos/products/2021-06-21.jpg',
    description: 'Timeless pieces with unique character and history',
  },
  {
    id: 2,
    name: 'Furniture',
    image: '/photos/products/2022-02-13.jpg',
    description: 'Classic furniture that brings vintage charm to your space',
  },
  {
    id: 3,
    name: 'Antiques',
    image: '/photos/products/2023-09-24.jpg',
    description: 'Rare finds with stories to tell',
  },
  {
    id: 4,
    name: 'Paintings',
    image: '/photos/products/2021-12-15.jpg',
    description: 'Artistic expressions from various eras',
  },
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF6F1]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-[#46392d] mb-12">
          Our Collection Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#46392d] mb-2">{category.name}</h3>
                <p className="text-[#665e56] mb-4">{category.description}</p>
                <Link 
                  to="/shop" 
                  className="inline-block px-6 py-2 bg-[#d9c5b0] text-[#46392d] rounded hover:bg-[#c4af98] transition-colors"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
