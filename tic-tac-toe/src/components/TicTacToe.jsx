import SquareBoxes from "./SquareBoxes.";
import settingValues from "../hooks/settingValues";

const TicTacToe = () => {
  const { isXturn, boxes, handleClick, handleReset, winner } = settingValues();

  return (
    <div className="container">
      <SquareBoxes boxes={boxes} handleClick={handleClick} />
      {}
      <div>
        {winner ? (
          <div className={`result-text ${winner ? "winner-text" : ""}`}>
            {winner === "Draw" ? "Draw!" : `Winner: ${winner}`}
          </div>
        ) : (
          <div className="next-text">
            Next turn is: <span>{isXturn ? "X" : "O"}</span>
          </div>
        )}
      </div>
      <button className="reset-btn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default TicTacToe;
