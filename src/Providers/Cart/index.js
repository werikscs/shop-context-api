import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const list = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

  const [cart, setCart] = useState(list);
  const [cartVisibility, setCartVisibility] = useState(false);

  const addToCart = (product) => {
    const isProductInCart = cart.some(({ id }) => id === product.id);

    if (!isProductInCart) {
      const newList = [...list, product];

      localStorage.setItem("@KenzieShop:cart", JSON.stringify(newList));

      setCart(newList);
    }
  };

  const removeFromCart = (product) => {
    const list = JSON.parse(localStorage.getItem("@KenzieShop:cart")) || [];

    const newList = list.filter(({ id }) => id !== product.id);

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(newList));

    setCart(newList);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartVisibility,
        setCartVisibility,
      }}>
      {children}
    </CartContext.Provider>
  );
};
