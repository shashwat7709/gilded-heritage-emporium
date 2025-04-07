
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  product_id: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity' | 'id' | 'product_id'> & { id: string }) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  getCartTotal: () => number;
  getItemCount: () => number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  // Fetch cart items from Supabase when user changes
  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) {
        setCart([]);
        return;
      }

      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('cart_items')
          .select(`
            id,
            quantity,
            product_id,
            products (
              id,
              title,
              price,
              image
            )
          `)
          .eq('user_id', user.id);
        
        if (error) {
          console.error('Error fetching cart items:', error);
          toast.error('Failed to load your cart');
          return;
        }
        
        if (data) {
          const cartItems = data.map((item: any) => ({
            id: item.id,
            product_id: item.product_id,
            title: item.products.title,
            price: item.products.price,
            image: item.products.image,
            quantity: item.quantity,
          }));
          setCart(cartItems);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
        toast.error('Failed to load your cart');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [user]);

  const addToCart = async (item: Omit<CartItem, 'quantity' | 'id' | 'product_id'> & { id: string }) => {
    if (!user) {
      toast.error('Please log in to add items to your cart');
      return;
    }

    try {
      setIsLoading(true);
      
      // Check if the item is already in the cart
      const existingItem = cart.find(cartItem => cartItem.product_id === item.id);
      
      if (existingItem) {
        // Update quantity of existing item
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('id', existingItem.id)
          .eq('user_id', user.id);
        
        if (error) {
          console.error('Error updating cart item:', error);
          toast.error('Failed to update item quantity');
          return;
        }
        
        setCart(currentCart =>
          currentCart.map(cartItem =>
            cartItem.id === existingItem.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
      } else {
        // Add new item to cart
        const { data, error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            product_id: item.id,
            quantity: 1
          })
          .select();
        
        if (error) {
          console.error('Error adding item to cart:', error);
          toast.error('Failed to add item to cart');
          return;
        }
        
        if (data && data.length > 0) {
          const newCartItem: CartItem = {
            id: data[0].id,
            product_id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            quantity: 1
          };
          setCart(prevCart => [...prevCart, newCartItem]);
        }
      }
      
      toast.success(`${item.title} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (id: string) => {
    if (!user) {
      toast.error('Please log in to remove items from your cart');
      return;
    }

    try {
      setIsLoading(true);
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error removing item from cart:', error);
        toast.error('Failed to remove item from cart');
        return;
      }
      
      setCart(currentCart => currentCart.filter(item => item.id !== id));
      toast.success('Item removed from cart');
    } catch (error) {
      console.error('Error removing from cart:', error);
      toast.error('Failed to remove item from cart');
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    if (!user) {
      toast.error('Please log in to update your cart');
      return;
    }

    if (quantity < 1) return;

    try {
      setIsLoading(true);
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', id)
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error updating cart item quantity:', error);
        toast.error('Failed to update item quantity');
        return;
      }
      
      setCart(currentCart =>
        currentCart.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
      toast.error('Failed to update item quantity');
    } finally {
      setIsLoading(false);
    }
  };

  const clearCart = async () => {
    if (!user) {
      toast.error('Please log in to clear your cart');
      return;
    }

    try {
      setIsLoading(true);
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error clearing cart:', error);
        toast.error('Failed to clear cart');
        return;
      }
      
      setCart([]);
      toast.success('Cart cleared');
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart');
    } finally {
      setIsLoading(false);
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getItemCount,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
