import { useContext, useState } from "react";
import "./book-slider.css";
import Rating from "./Rating";
import Model from "../model/Model";

import cartContext from "../../context/cartContext";

const BookSlider = ({ data }) => {
  const { addToCart } = useContext(cartContext)

  const [slideIndex, setSlideIndex] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [bookData, setBookData] = useState(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handleModel = (book) => {
    setOpenModel(true);
    setBookData(book);
  }

  return (
    <div className="book-slider-container">
      {slideIndex >= 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        ></i>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((book, index) => (
          <div key={index} className="book-slider-item">
            <img
              src={`/books/${book.image}`}
              alt={book.title}
              className="book-slider-item-img"
            />
            <h2 className="book-slider-item-title">{book.title}</h2>
            <Rating rating={book.rating} reviews={book.reviews}/>
            <div className="book-slider-item-price">{book.price}</div>
            <div className="book-slider-icons-wrapper">
              <i onClick={() => handleModel(book)} className="bi bi-eye-fill"></i>
              <i onClick={() => addToCart({...book, quantity: 1})} className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"
        ></i>
      )}
      {openModel && <Model bookData={bookData} setOpenModel={setOpenModel}/>}
    </div>
  );
};

export default BookSlider;
