
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import Newsletter from './components/Newsletter';
import ContactSection from './components/ContactSection';
import Shop from './pages/Shop';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import Footer from './components/Footer';
import { useAuth } from './context/AuthContext';

const AppRoutes: React.FC = () => {
  const { user, loading } = useAuth();

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!user) return <Navigate to="/auth" />;
    return <>{children}</>;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <GallerySection />
            <AboutSection />
            <Newsletter />
            <ContactSection />
          </>
        } />
        <Route path="/collection" element={<GallerySection />} />
        <Route path="/about" element={
          <div className="min-h-screen bg-[#F5F1EA] py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-serif text-[#46392d] text-center mb-8">About The Vintage Cottage</h1>
              <div className="max-w-3xl mx-auto text-[#46392d]">
                <p className="mb-4">
                  Welcome to The Vintage Cottage, your premier destination for unique vintage treasures.
                  We specialize in curating a collection of jewelry, antiques, furniture, and paintings
                  that tell stories of the past.
                </p>
                <p className="mb-4">
                  Our mission is to bring the charm and character of vintage items to modern homes,
                  helping you create spaces that reflect your unique style and appreciation for history.
                </p>
                <p>
                  Whether you're looking to buy a special piece or sell your own vintage items,
                  we're here to help you every step of the way.
                </p>
              </div>
            </div>
          </div>
        } />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
