import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";

const HeaderMiddle = () => {
  const { cartItemsLength } = useContext(cartContext);

  return (
    <div className="header-middle">
      <div className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </div>
      <div className="header-middle-search-box">
        <input
          type="text"
          placeholder="Search books..."
          className="header-middle-search-input"
        />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="header-middle-cart-wrapper">
        {cartItemsLength > 0 && (
          <b className="cart-notification">{cartItemsLength}</b>
        )}
        <i className="bi bi-cart2"></i>
      </Link>
    </div>
  );
};

export default HeaderMiddle;
