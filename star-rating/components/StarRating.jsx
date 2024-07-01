const StarRating = ({ count }) => {
  const stars = [...Array(count)].map((_, index) => {
    return <span key={index} className="fa fa-star"></span>;
  });
  return <div className="star-container">{stars}</div>;
};

export default StarRating;
