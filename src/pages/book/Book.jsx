import "./book.css";

import { useParams } from "react-router-dom";

import { books } from "../../data/books";
import Rating from "../../components/book-slider/Rating";

import { useContext, useState } from "react";
import CartContext from '../../context/cartContext'

const Book = () => {
  const [ qty, setQty ] = useState(1);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  const book = books.find((book) => book.id === parseInt(id));

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <div className="book-title">{book.title}</div>
          <div className="book-author">
            By <span>{book.author}</span> Author
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-price">
            Price <span> {book.price}</span>
          </div>
          <div className="book-add-to-cart">
            <input
              min={1}
              max={100}
              type="number"
              value={qty}
              className="book-add-to-cart-input"
              onChange={e => setQty(e.target.value)}
            />
            <button onClick={() => addToCart({...book, quantity: qty})} className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nemo, assumenda perspiciatis, qui mollitia cum, earum eveniet aut harum
        alias delectus ipsa pariatur deserunt ipsam vero consequuntur nostrum
        exercitationem voluptatum! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eius non illum facere nobis. Magni illo hic itaque
        ipsa, perferendis doloremque dignissimos voluptatibus dolorum,
        consequuntur, quas ducimus numquam animi accusamus suscipit?
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <b>Print Length</b>
          <i className="bi bi-file-earmark-break"></i>
          <small>{book.printLength} Pages</small>
        </div>
        <div className="book-icon">
          <b>Language</b>
          <i className="bi bi-globe"></i>
          <small>{book.language}</small>
        </div>
        <div className="book-icon">
          <b>Publication date</b>
          <i className="bi bi-calendar3"></i>
          <small>{book.PublicationDate}</small>
        </div>
      </div>
    </div>
  );
};

export default Book;
