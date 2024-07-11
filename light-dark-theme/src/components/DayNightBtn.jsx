import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const DayNightBtn = () => {
  const [isChecked, setIsChecked] = useState(false);
  const hanadleChecked = () => {
    setIsChecked((prevState) => !prevState);
    document.body.classList.toggle("dark");
  };
  return (
    <ReactSwitch
      className="theme-btn"
      checked={isChecked}
      onChange={hanadleChecked}
      checkedIcon={
        <FontAwesomeIcon
          icon={faMoon}
          style={{
            color: "#ffdb57",
            fontSize: "18px",
            position: "relative",
            top: "5px",
            left: "10px",
          }}
        />
      }
      uncheckedIcon={
        <FontAwesomeIcon
          icon={faSun}
          style={{
            color: "#FFD43B",
            fontSize: "18px",
            position: "relative",
            top: "5px",
            left: "10px",
          }}
        />
      }
      handleDiameter={20}
      onHandleColor={"#e0e0e0"}
      offHandleColor={"#fff"}
      onColor="#71797E"
      offColor="#A9A9A9"
    />
  );
};
