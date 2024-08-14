import SquareBoxes from "./SquareBoxes.";

const TicTacToe = () => {
  const boxes = Array(0).fill(null);
  return (
    <div className="container">
      <SquareBoxes />
    </div>
  );
};

export default TicTacToe;
