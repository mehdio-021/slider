import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const nextSlide = () => {
    setIndex((prevState) => checkNumber(prevState + 1));
    /*     setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }); */
  };
  const prevSlide = () => {
    /*     setIndex((prevState)=>prevState - 1 ) */
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <div className="reviews">
      <div className="reviews-img">
        <img src={image} alt="bil" />

      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="revi ews-button">
        <button onClick={nextSlide}>
          <FaChevronRight />
        </button>
        <button onClick={prevSlide}>
          <FaChevronLeft />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Random
      </button>
    </div>
  );
};

export default Reviews;
