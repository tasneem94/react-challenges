import { useState } from "react";

const SquareBoxes = () => {
  const [isXturn, setIsXturn] = useState(true);
  const [boxes, setBoxes] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    const newBoxes = [...boxes];
    if (newBoxes[index] === null) {
      isXturn ? (newBoxes[index] = "X") : (newBoxes[index] = "O");
      setIsXturn((prevIsXturn) => !prevIsXturn);
      setBoxes(newBoxes);
    }
  };

  return (
    <div className="square-boxes-container">
      {boxes.map((value, index) => (
        <div
          key={index}
          className="square-box"
          onClick={() => handleClick(index)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default SquareBoxes;
