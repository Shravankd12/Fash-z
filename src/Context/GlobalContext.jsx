// Context/GlobalContext.js
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState({}); // Object to track items by id
  const [cartCount, setCartCount] = useState(0);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems({});
    setCartCount(0);
  };

  const addToCart = (id, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + quantity,
    }));
    setCartCount((prev) => prev + quantity);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        cartItems,
        cartCount,
        handleLogin,
        handleLogout,
        addToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
