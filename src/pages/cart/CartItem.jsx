const CartItem = ({ item, removeFromCart, addToCart }) => {
  const { image, title, author, quantity, price, id } = item;

  return (
    <div className="cart-item">
      <img src={`/books/${image}`} alt={title} className="cart-item-img" />
      <div className="cart-item-info">
        <div>
          <div className="cart-item-book-title">
            <b>Title : </b>
            <span>{title}</span>
          </div>
          <div className="cart-item-book-author">
            <b>Author : </b>
            <span>{author}</span>
          </div>
        </div>
        <div className="quantity-price-on-mobile">
          <div className="cart-item-quantity">
            <button
              onClick={() => addToCart({ ...item, quantity: quantity + 1 })}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
            <b>{quantity}</b>
            <button
              disabled={quantity <= 1 }
              onClick={() => addToCart({ ...item, quantity: quantity - 1 })}
            >
              <i className="bi bi-dash-lg"></i>
            </button>
          </div>
          <div className="cart-item-price">${(price * quantity).toFixed(2)}</div>
          <i
            onClick={() => removeFromCart(id)}
            className="bi bi-trash-fill cart-item-delete"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
