
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productToRemove.id));
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
};

