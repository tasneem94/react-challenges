import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import data from "../data/tilesData";
const Tiles = ({ index, title, body }) => {
  const [showBody, setShowBody] = useState(false);
  const onClickHandler = () => {
    setShowBody((prevShowBody) => !prevShowBody);
  };
  return (
    <>
      <div className="tiles">
        <div className="title">{title}</div>
        <div className="show-btn" onClick={onClickHandler}>
          {showBody ? (
            <i class="fas fa-xmark"></i>
          ) : (
            <i class="fas fa-angle-down"></i>
          )}
        </div>
      </div>
      {showBody && <div className="tiles body-text">{body}</div>}
    </>
  );
};

export default Tiles;
