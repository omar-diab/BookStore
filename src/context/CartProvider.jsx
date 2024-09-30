import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find(c => c.id === item.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) => cartItem.id === item.id ? item : cartItem)
      );
    }else {
      setCartItems((prev) => [...prev, item]);
    }

  };

  // Remove from cart
  const removeFromCart = (id) => {
    const cart = cartItems.filter(c => c.id !== id);
    setCartItems(cart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsLength: cartItems.length
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
