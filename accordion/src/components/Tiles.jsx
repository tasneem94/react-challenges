import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import data from "../data/tilesData";
const Tiles = ({
  index,
  title,
  body,
  enable,
  setEnable,
  currIndex,
  setCurrIndex,
}) => {
  const [showBody, setShowBody] = useState(false);
  const onClickHandler = () => {
    enable
      ? setShowBody((prevShowBody) => !prevShowBody)
      : setCurrIndex((prevCurrIndex) =>
          prevCurrIndex === index ? null : index
        );
  };

  return (
    <>
      <div className="tiles" onClick={onClickHandler}>
        <div className="title">{title}</div>
        <div className="show-btn">
          {enable ? (
            showBody ? (
              <i className="fas fa-xmark"></i>
            ) : (
              <i className="fas fa-angle-down"></i>
            )
          ) : currIndex === index ? (
            <i className="fas fa-xmark"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
        </div>
      </div>
      {enable
        ? showBody && <div className="body-text">{body}</div>
        : currIndex === index && <div className="body-text">{body}</div>}
    </>
  );
};

export default Tiles;
