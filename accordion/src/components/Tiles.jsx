import { useState } from "react";

// import data from "../data/tilesData";
const Tiles = ({ index, title, body }) => {
  const [showBody, setShowBody] = useState(false);
  const onClickHandler = () => {
    setShowBody(!showBody);
  };
  return (
    <>
      <div className="tiles">
        <div className="title">{title}</div>
        <div className="show-btn" onClick={onClickHandler}>
          +
        </div>
      </div>
      {showBody && <div className="tiles body-text">{body}</div>}
    </>
  );
};

export default Tiles;
