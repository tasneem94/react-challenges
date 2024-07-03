import { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftArrow = () => {
    setCurrentSlide((prevCurrentSlide) =>
      prevCurrentSlide === 0 ? images.length - 1 : prevCurrentSlide - 1
    );
  };

  const handleRightArrow = () => {
    setCurrentSlide((prevCurrentSlide) =>
      prevCurrentSlide === images.length - 1 ? 0 : prevCurrentSlide + 1
    );
  };

  const handleCircleClick = (index) => {
    setCurrentSlide(index);
  };

  const fetchImages = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      console.log(data);
      console.log(currentSlide);

      if (data) {
        setIsLoading(false);
        setImages(data);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  }, [url, page, limit]);

  if (isLoading) {
    return <div className="loading">Loading data....Please wait.</div>;
  }

  if (error) {
    return <div className="error">Error occured! {error}</div>;
  }

  return (
    <div className="image-container">
      <BsArrowLeftCircleFill
        className="arrow left-arrow"
        onClick={handleLeftArrow}
      />
      <BsArrowRightCircleFill
        className="arrow right-arrow"
        onClick={handleRightArrow}
      />
      {images.length > 0 && (
        <img
          key={images[currentSlide].id}
          src={images[currentSlide].download_url}
          alt={images[currentSlide].download_url}
          className="current-img"
        />
      )}
      <span className="circle-indicator-container">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              "circle-indicator" +
              (index === currentSlide ? " white-circle" : "")
            }
            onClick={() => handleCircleClick(index)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
