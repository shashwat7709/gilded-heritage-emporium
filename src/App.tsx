
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { NotificationProvider } from './context/NotificationContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
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
      </AuthProvider>
    </Router>
  );
};

export default App;
