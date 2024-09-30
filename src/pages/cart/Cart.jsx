import "./cart.css";

import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";

import { useContext } from "react";
import CartContext from "../../context/cartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
            />
          ))}
        </div>
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
