const SquareBoxes = ({ boxes, handleClick }) => {
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
