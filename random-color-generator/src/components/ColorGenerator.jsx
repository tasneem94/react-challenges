import { useState } from "react";

const ColorGenerator = () => {
  const [isHex, setIsHex] = useState(true);
  const switchColorCode = () => {
    setIsHex(!isHex);
  };
  return (
    <div className="container">
      <div className="color-text">
        {isHex ? "#FFFFFF" : "RGB (255,255,255)"}
      </div>
      <button className="color-btn">Pick a Random" Color</button>
      <button className="switch-btn" onClick={switchColorCode}>
        {isHex ? "Switch to RGB" : "Switch to Hex"}
      </button>
    </div>
  );
};

export default ColorGenerator;
