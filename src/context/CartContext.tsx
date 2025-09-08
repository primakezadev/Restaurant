"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  options?: { title: string; additionalPrice: number };
  img?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number, optionTitle?: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.options?.title === newItem.options?.title
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (id: number, optionTitle?: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === id && item.options?.title === optionTitle)
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
