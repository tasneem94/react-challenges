import { useLocalStorage } from "../hooks/useLocalStorage";
import { DayNightBtn } from "./DayNightBtn";

const ThemeSwitch = () => {
  const { setItem, getItem, removeItem } = useLocalStorage("value");
  return (
    <div className="theme-switch-container">
      <div className="day-night-btn">
        <DayNightBtn />
      </div>
    </div>
  );
};

export default ThemeSwitch;
