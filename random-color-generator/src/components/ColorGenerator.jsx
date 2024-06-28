import { useState } from "react";

const ColorGenerator = () => {
  const [isHex, setIsHex] = useState(true);
  const hexArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const [hex, setHex] = useState("#FFFFFF");
  const [rgb, setRgb] = useState("RGB(255,255,255)");

  const switchColorCode = () => {
    setIsHex(!isHex);
    setHex("#FFFFFF");
    setRgb("RGB(255,255,255)");
  };

  const changeBgColor = () => {
    if (isHex) {
      let hexTemp = "#";
      for (let i = 1; i <= 6; i++) {
        hexTemp += hexArr[Math.floor(Math.random() * hexArr.length)];
      }
      setHex(hexTemp);
    } else {
      let rgbTemp = "RGB(";
      for (let i = 1; i <= 3; i++) {
        rgbTemp += Math.floor(Math.random() * 256);
        i < 3 ? (rgbTemp += ",") : (rgbTemp += ")");
      }
      setRgb(rgbTemp);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: isHex ? hex : rgb }}>
      <div className="color-text">{isHex ? hex : rgb}</div>
      <button className="color-btn" onClick={changeBgColor}>
        Pick a Random Color
      </button>
      <button className="switch-btn" onClick={switchColorCode}>
        {isHex ? "Switch to RGB" : "Switch to Hex"}
      </button>
    </div>
  );
};

export default ColorGenerator;
