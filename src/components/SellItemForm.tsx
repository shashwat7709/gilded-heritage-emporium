import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';

interface SellItemFormProps {
  onSubmit: (formData: FormData) => void;
}

const SellItemForm: React.FC<SellItemFormProps> = ({ onSubmit }) => {
  const { categories } = useProducts();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: null as File | null,
  });
  const [phoneCode, setPhoneCode] = useState('+1'); // Default to US code

  const countryCodes = [
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+91', country: 'India' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    // Add more country codes as needed
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phoneNumber = `${phoneCode}${formData.get('phone')}`;
    formData.set('phone', phoneNumber);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-[#46392d] mb-1">
          Item Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-[#46392d]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d] bg-white"
          placeholder="Enter the title of your antique item"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-[#46392d] mb-1">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 border border-[#46392d]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d] bg-white"
          placeholder="Describe your item's history, condition, and unique features"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[#46392d] mb-1">
          Contact Phone Number
        </label>
        <div className="flex gap-2">
          <select
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
            className="px-3 py-2 rounded-md border border-[#46392d]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#46392d]/50"
          >
            {countryCodes.map(({ code, country }) => (
              <option key={code} value={code}>
                {code} {country}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            className="flex-1 px-4 py-2 rounded-md border border-[#46392d]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#46392d]/50"
            placeholder="Enter your phone number"
          />
        </div>
        <p className="text-sm text-[#46392d]/70 mt-1">
          Please enter a valid phone number without spaces or special characters
        </p>
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-[#46392d] mb-1">
          Asking Price ($)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
          className="w-full px-3 py-2 border border-[#46392d]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d] bg-white"
          placeholder="Enter your asking price"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-[#46392d] mb-1">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-[#46392d]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d] bg-white"
        >
          <option value="">Select a category</option>
          {categories
            .filter(category => category !== 'All')
            .map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-[#46392d] mb-1">
          Item Images
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full px-3 py-2 border border-[#46392d]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46392d] bg-white"
        />
        <p className="mt-1 text-sm text-[#46392d]/70">
          Please provide clear, well-lit photos of your item from multiple angles
        </p>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-[#46392d] text-[#F5F1EA] rounded-md hover:bg-[#46392d]/90 transition-colors duration-300 font-serif text-lg"
      >
        Submit for Review
      </button>

      <p className="text-sm text-[#46392d]/70 text-center mt-4">
        Our team will review your submission and contact you within 2-3 business days.
      </p>
    </form>
  );
};

export default SellItemForm; 