
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';
import { toast } from 'sonner';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface AntiqueSubmission {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  phone: string;
  address: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  categories: string[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
  submissions: AntiqueSubmission[];
  addSubmission: (submission: Omit<AntiqueSubmission, 'id' | 'status' | 'submittedAt'>) => Promise<void>;
  updateSubmission: (submission: AntiqueSubmission) => Promise<void>;
  deleteSubmission: (submissionId: string) => Promise<void>;
  loadingProducts: boolean;
  loadingSubmissions: boolean;
}

const categories = [
  'All',
  'Vintage Furniture',
  'Crystal & Glass',
  'Decorative Accents',
  'Lighting & Mirrors',
  'Tableware',
  'Wall Art',
  'Antique Books',
  'Garden & Outdoor',
  'Others'
];

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [submissions, setSubmissions] = useState<AntiqueSubmission[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);
  const { user } = useAuth();

  // Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        const { data, error } = await supabase
          .from('products')
          .select('*');
        
        if (error) {
          console.error('Error fetching products:', error);
          toast.error('Failed to load products');
          return;
        }
        
        if (data) {
          setProducts(data as Product[]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to load products');
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Fetch submissions from Supabase when user is logged in
  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!user) {
        setSubmissions([]);
        setLoadingSubmissions(false);
        return;
      }

      try {
        setLoadingSubmissions(true);
        const { data, error } = await supabase
          .from('antique_submissions')
          .select('*')
          .eq('user_id', user.id);
        
        if (error) {
          console.error('Error fetching submissions:', error);
          toast.error('Failed to load submissions');
          return;
        }
        
        if (data) {
          const formattedSubmissions = data.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            category: item.category,
            images: item.images,
            phone: item.phone,
            address: item.address,
            status: item.status,
            submittedAt: item.submitted_at
          }));
          setSubmissions(formattedSubmissions as AntiqueSubmission[]);
        }
      } catch (error) {
        console.error('Error fetching submissions:', error);
        toast.error('Failed to load submissions');
      } finally {
        setLoadingSubmissions(false);
      }
    };

    fetchSubmissions();
  }, [user]);

  const addProduct = async (product: Omit<Product, 'id'>) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select();
      
      if (error) {
        console.error('Error adding product:', error);
        toast.error('Failed to add product');
        return;
      }
      
      if (data && data.length > 0) {
        setProducts(prev => [...prev, data[0] as Product]);
        toast.success('Product added successfully');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product');
    }
  };

  const updateProduct = async (product: Product) => {
    try {
      const { error } = await supabase
        .from('products')
        .update({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          image: product.image
        })
        .eq('id', product.id);
      
      if (error) {
        console.error('Error updating product:', error);
        toast.error('Failed to update product');
        return;
      }
      
      setProducts(prev => prev.map(p => p.id === product.id ? product : p));
      toast.success('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update product');
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);
      
      if (error) {
        console.error('Error deleting product:', error);
        toast.error('Failed to delete product');
        return;
      }
      
      setProducts(prev => prev.filter(p => p.id !== productId));
      toast.success('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    }
  };

  const addSubmission = async (submission: Omit<AntiqueSubmission, 'id' | 'status' | 'submittedAt'>) => {
    if (!user) {
      toast.error('You must be logged in to submit an antique');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('antique_submissions')
        .insert({
          user_id: user.id,
          title: submission.title,
          description: submission.description,
          price: submission.price,
          category: submission.category,
          images: submission.images,
          phone: submission.phone,
          address: submission.address,
          status: 'pending'
        })
        .select();
      
      if (error) {
        console.error('Error adding submission:', error);
        toast.error('Failed to submit your antique');
        return;
      }
      
      if (data && data.length > 0) {
        const newSubmission = {
          id: data[0].id,
          title: data[0].title,
          description: data[0].description,
          price: data[0].price,
          category: data[0].category,
          images: data[0].images,
          phone: data[0].phone,
          address: data[0].address,
          status: data[0].status as 'pending' | 'approved' | 'rejected',
          submittedAt: data[0].submitted_at
        };
        setSubmissions(prev => [...prev, newSubmission]);
        toast.success('Your antique has been submitted for review');
      }
    } catch (error) {
      console.error('Error adding submission:', error);
      toast.error('Failed to submit your antique');
    }
  };

  const updateSubmission = async (submission: AntiqueSubmission) => {
    if (!user) {
      toast.error('You must be logged in to update a submission');
      return;
    }

    try {
      const { error } = await supabase
        .from('antique_submissions')
        .update({
          title: submission.title,
          description: submission.description,
          price: submission.price,
          category: submission.category,
          images: submission.images,
          phone: submission.phone,
          address: submission.address,
          status: submission.status
        })
        .eq('id', submission.id)
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error updating submission:', error);
        toast.error('Failed to update submission');
        return;
      }
      
      setSubmissions(prev => prev.map(s => s.id === submission.id ? submission : s));
      toast.success('Submission updated successfully');
    } catch (error) {
      console.error('Error updating submission:', error);
      toast.error('Failed to update submission');
    }
  };

  const deleteSubmission = async (submissionId: string) => {
    if (!user) {
      toast.error('You must be logged in to delete a submission');
      return;
    }

    try {
      const { error } = await supabase
        .from('antique_submissions')
        .delete()
        .eq('id', submissionId)
        .eq('user_id', user.id);
      
      if (error) {
        console.error('Error deleting submission:', error);
        toast.error('Failed to delete submission');
        return;
      }
      
      setSubmissions(prev => prev.filter(s => s.id !== submissionId));
      toast.success('Submission deleted successfully');
    } catch (error) {
      console.error('Error deleting submission:', error);
      toast.error('Failed to delete submission');
    }
  };

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      categories,
      addProduct,
      updateProduct,
      deleteProduct,
      submissions,
      addSubmission,
      updateSubmission,
      deleteSubmission,
      loadingProducts,
      loadingSubmissions
    }}>
      {children}
    </ProductContext.Provider>
  );
};
