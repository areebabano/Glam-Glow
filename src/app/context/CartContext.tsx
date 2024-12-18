"use client";

import React,{ useState, createContext, useContext, ReactNode} from "react";
import { CartItem , CartContextType } from "../types/types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context){
        throw new Error("useCart must be within a CartProvider.")
    }
    return context;
}

export const CartProvider = ({children}: {children : ReactNode}) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prev) => {
          const existingItemIndex = prev.findIndex((i) => i.id === item.id);
          if (existingItemIndex !== -1 && item.id !== undefined) {
            const updatedCart = [...prev];
            updatedCart[existingItemIndex].quantity = (updatedCart[existingItemIndex].quantity || 0) + item.quantity;
            return updatedCart;
          } else if (item.id !== undefined) {
            return [...prev, item];
          }
          return prev;
        });
      };
    // const addToCart = (newItem: CartItem) => {
    //     setCart((prevCart) => {
    //       const existingItem = prevCart.findIndex((i) => i.id === newItem.id);
    
    //       if (existingItem !== -1 && newItem.id !== undefined) {
    //         // Update the quantity of the existing item
    //         return prevCart.map((item) =>
    //           item.id === newItem.id
    //             ? { ...item, quantity: item.quantity + newItem.quantity }
    //             : item
    //         );
    //       } else {
    //         // Add new item to the cart
    //         return [...prevCart, newItem];
    //       }
    //     });
    //   };
    
      const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id))
      }

       // Define updateQuantity function
  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

      const getCartItemCount = () => {
        // Calculate total number of items in the cart
        return cart.reduce((total, item) => total + item.quantity, 0);
      };

    // const addToCart = (item: CartItem) => {
    //     setCart((prevCart) => {
    //         const exisitingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
    //         if(exisitingItemIndex !== -1){
    //             const updatedCart = [...prevCart];
    //             updatedCart[exisitingItemIndex] = {
    //                 ...updatedCart[exisitingItemIndex],
    //                 quantity: updatedCart[exisitingItemIndex].quantity + item.quantity,
    //             }
    //             return updatedCart;
    //         } else {
    //             const newCart = [...prevCart, {...item, quantity: 1}];
    //             return newCart;
    //         }
    //     })
    // }

    // const totalItems = cart.reduce((sum,item) => sum + item.quantity, 0);

    return(
        <CartContext.Provider value={{cart,addToCart,getCartItemCount, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}