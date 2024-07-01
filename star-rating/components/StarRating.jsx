import { useState } from "react";

const StarRating = ({ count }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [isHover, isSetHover] = useState(false);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleMouseMove = (index) => {
    setHover(index);
    isSetHover(true);
  };

  const handleMouseLeave = () => {
    setHover(rating);
    isSetHover(false);
  };

  const stars = [...Array(count)].map((_, index) => {
    index += 1;
    return (
      <span
        key={index}
        className={
          "fa fa-star" +
          ((!isSetHover && rating >= index) || hover >= index ? " active" : " ")
        }
        onClick={() => handleClick(index)}
        onMouseMove={() => handleMouseMove(index)}
        onMouseLeave={handleMouseLeave}
      ></span>
    );
  });
  return <div className="star-container">{stars}</div>;
};

export default StarRating;
