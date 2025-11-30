"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ShopContext = createContext({});

export function ShopProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart (safe, lazy)
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("atelier-cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("atelier-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.color === product.color
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.color === product.color
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, color) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.color === color)));
  };

  const clearCart = () => setCart([]);

  return (
    <ShopContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount: cart.reduce((acc, item) => acc + item.quantity, 0),
        cartTotal: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
