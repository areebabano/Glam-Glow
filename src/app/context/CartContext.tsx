"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";
import { CartItem, CartContextType } from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be within a CartProvider.");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItemIndex = prev.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1 && item.id !== undefined) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity =
          (updatedCart[existingItemIndex].quantity || 0) + item.quantity;
        return updatedCart;
      } else if (item.id !== undefined) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Define updateQuantity function
  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const getCartItemCount = () => {
    // Calculate total number of items in the cart
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getCartItemCount,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
