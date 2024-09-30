import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 2; // Adjusted for 3 slides (index starts at 0)

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : totalSlides);
    } else {
      setSlideIndex(slideIndex < totalSlides ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <i
        onClick={() => handleClick("left")} // Pass the direction here
        className="bi bi-chevron-left arrow-left"
      ></i>
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={FirstBook} alt="First Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. It's living the adventure.
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondBook} alt="Second Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at home or at the bookstore.
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt="Third Book" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Title</h1>
            <p className="slide-info-desc">
              We send the book you want to your home.
            </p>
          </div>
        </div>
      </div>
      <i
        onClick={() => handleClick("right")} // Pass the direction here
        className="bi bi-chevron-right arrow-right"
      ></i>
    </div>
  );
};

export default Slider;
