import "./model.css";

import Rating from "../book-slider/Rating";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import cartContext from "../../context/cartContext";

const Model = ({ bookData, setOpenModel }) => {
  const { addToCart } = useContext(cartContext)

  const [ qty, setQty ] = useState(1);

  const { image, title, inStock, rating, reviews, author, price, id } = bookData;

  return (
    <div onClick={() => setOpenModel(false)} className="model-container">
      <div onClick={(event) => event.stopPropagation()} className="model-content">
        <i
          onClick={() => setOpenModel(false)}
          className="bi bi-x-circle-fill model-icon"
        ></i>
        <div className="model-content-img">
          <img src={`/books/${image}`} alt={title} />
        </div>
        <div className="model-content-info">
          <h4 className="model-content-info-title">{title}</h4>
          <div className="model-content-info-stock">
            <b>Status: </b> {inStock ? "In Stock" : "Out Of Stock"}
          </div>
          <Rating rating={rating} reviews={reviews}/>
          <div className="model-content-info-author">
            <b>Author: </b> {author}
          </div>
          <div className="model-content-info-price">
            <b>Price: </b> ${price}
          </div>
          <div className="model-add-to-cart">
            <input
              type="number"
              min={1}
              max={100}
              className="model-add-to-cart-input"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
            <button onClick={() => addToCart({...bookData, quantity: qty})} className="model-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </button>
          </div>
          <Link to={`/book/${id}`} className="model-content-info-link">See More Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Model;
