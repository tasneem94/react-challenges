import ReactSWitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = () => {
  return (
    <div className="theme-switch-container">
      <ReactSWitch
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
        onHandleColor={"#808080"}
        offHandleColor={"#fff"}
        onColor="#000"
        offColor="#71797E"
      />
    </div>
  );
};

export default ThemeSwitch;
