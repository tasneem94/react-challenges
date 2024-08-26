import ReactSwitch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const DayNightBtn = ({ isChecked, hanadleChecked }) => {
  return (
    <ReactSwitch
      checked={isChecked}
      onChange={hanadleChecked}
      checkedIcon={
        <div className="flex items-center justify-center h-full">
          <FontAwesomeIcon icon={faMoon} className="text-[#ffdb57] text-lg" />
        </div>
      }
      uncheckedIcon={
        <div className="flex items-center justify-center h-full pl-2">
          <FontAwesomeIcon icon={faSun} className="text-[#FFD43B] text-lg" />
        </div>
      }
      handleDiameter={20}
      onHandleColor="#e0e0e0"
      offHandleColor="#fff"
      onColor="#71797E"
      offColor="#A9A9A9"
    />
  );
};
