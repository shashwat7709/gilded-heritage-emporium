import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { products, categories, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [editForm, setEditForm] = useState<Product>({
    id: '',
    title: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  });
  const [formError, setFormError] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const validateForm = () => {
    if (!editForm.title.trim()) {
      setFormError('Title is required');
      return false;
    }
    if (!editForm.description.trim()) {
      setFormError('Description is required');
      return false;
    }
    if (editForm.price <= 0) {
      setFormError('Price must be greater than 0');
      return false;
    }
    if (!editForm.category) {
      setFormError('Category is required');
      return false;
    }
    if (!editForm.image && !imagePreview) {
      setFormError('Image is required');
      return false;
    }
    setFormError('');
    return true;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setFormError('Please upload an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormError('Image size should be less than 5MB');
        return;
      }

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setEditForm({ ...editForm, image: reader.result as string });
      };
      reader.readAsDataURL(file);
      setFormError('');
    }
  };

  const handleEdit = (product: Product) => {
    setIsEditing(product.id);
    setEditForm(product);
    setImagePreview(product.image);
    setFormError('');
  };

  const handleDelete = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  const handleSave = () => {
    if (!validateForm()) return;

    try {
      if (isEditing === 'new') {
        // Add new product
        const { id, ...newProduct } = editForm;
        addProduct(newProduct);
      } else {
        // Update existing product
        updateProduct(editForm);
      }
      setIsEditing(null);
      setEditForm({
        id: '',
        title: '',
        description: '',
        price: 0,
        category: '',
        image: ''
      });
      setImagePreview('');
      setFormError('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setFormError('Error saving product. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const renderForm = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-serif text-[#46392d] mb-4">
        {isEditing === 'new' ? 'Add New Product' : 'Edit Product'}
      </h3>
      {formError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {formError}
        </div>
      )}
      <div className="space-y-4">
        <input
          type="text"
          value={editForm.title}
          onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#46392d]"
          placeholder="Title"
        />
        <textarea
          value={editForm.description}
          onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#46392d]"
          placeholder="Description"
          rows={3}
        />
        <input
          type="number"
          value={editForm.price}
          onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#46392d]"
          placeholder="Price"
          min="0"
          step="0.01"
        />
        <select
          value={editForm.category}
          onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#46392d]"
        >
          <option value="">Select Category</option>
          {categories.filter(cat => cat !== 'All').map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        
        {/* Image Upload Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#46392d]">
            Product Image
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#46392d]"
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-xs max-h-48 object-contain rounded"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={() => {
              setIsEditing(null);
              setFormError('');
              setImagePreview('');
              if (fileInputRef.current) {
                fileInputRef.current.value = '';
              }
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {isEditing === 'new' ? 'Add Product' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F1EA] py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-[#46392d]">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#46392d] text-[#F5F1EA] rounded-md hover:bg-[#46392d]/90"
          >
            Logout
          </button>
        </div>

        {/* Add New Product Button */}
        {!isEditing && (
          <button
            onClick={() => {
              setIsEditing('new');
              setEditForm({
                id: 'new',
                title: '',
                description: '',
                price: 0,
                category: '',
                image: ''
              });
              setImagePreview('');
              setFormError('');
              if (fileInputRef.current) {
                fileInputRef.current.value = '';
              }
            }}
            className="mb-8 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Add New Product
          </button>
        )}

        {/* Edit Form */}
        {isEditing && renderForm()}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-[#46392d] text-[#F5F1EA]'
                  : 'bg-white text-[#46392d] hover:bg-[#46392d]/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-serif text-[#46392d]">{product.title}</h3>
                <p className="text-sm text-[#46392d]/70">{product.description}</p>
                <p className="text-[#46392d] font-medium mt-2">${product.price}</p>
                <p className="text-sm text-[#46392d]/70">Category: {product.category}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 