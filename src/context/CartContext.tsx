
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/products';
import { toast } from 'sonner';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  getCartTotal: () => number;
  cartCount: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
    toast.success(`${product.name} added to cart!`);
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cartItems,
    addToCart,
    getCartTotal,
    cartCount,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
