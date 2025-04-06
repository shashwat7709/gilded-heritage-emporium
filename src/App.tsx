import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { NotificationProvider } from './context/NotificationContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Shop from './pages/Shop';
import AboutSection from './components/AboutSection';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <ProductProvider>
        <NotificationProvider>
          <CartProvider>
            <div className="min-h-screen bg-[#F5F1EA]">
              <Navbar />
              <AppRoutes />
            </div>
          </CartProvider>
        </NotificationProvider>
      </ProductProvider>
    </Router>
  );
};

export default App;
