import { useEffect, useState } from "react";
const settingValues = () => {
  const [isXturn, setIsXturn] = useState(true);
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (boxes) => {
    for (let [a, b, c] of winningCombinations) {
      if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
        setWinner(boxes[a]);
        return;
      }
    }
    if (boxes.every((box) => box !== null)) {
      setWinner("Draw");
    }
  };

  const handleClick = (index) => {
    console.log(winner);
    if (winner) return;
    const newBoxes = [...boxes];
    if (newBoxes[index] === null) {
      isXturn ? (newBoxes[index] = "X") : (newBoxes[index] = "O");
      setIsXturn((prevIsXturn) => !prevIsXturn);
      setBoxes(newBoxes);
    }
    checkWinner(newBoxes);
  };

  const handleReset = () => {
    setBoxes(Array(9).fill(null));
    setIsXturn(true);
    setWinner(null);
  };

  return { isXturn, boxes, handleClick, handleReset, winner };
};

export default settingValues;
