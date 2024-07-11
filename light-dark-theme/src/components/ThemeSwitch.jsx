import { useLocalStorage } from "../hooks/useLocalStorage";
import { DayNightBtn } from "./DayNightBtn";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const { setItem, getItem, removeItem } = useLocalStorage("isDarkMode");

  const [isChecked, setIsChecked] = useState(getItem() || false);
  const hanadleChecked = () => {
    setIsChecked((prevState) => {
      const newIsChecked = !prevState;
      document.body.classList.toggle("dark", newIsChecked);
      setItem(newIsChecked);
      return newIsChecked;
    });
  };

  useEffect(() => {
    const storedTheme = getItem();
    if (storedTheme !== null) {
      setIsChecked(storedTheme);
      document.body.classList.toggle("dark", storedTheme);
    }
  }, []);

  return (
    <div className="theme-switch-container">
      <div className="day-night-btn">
        <DayNightBtn isChecked={isChecked} hanadleChecked={hanadleChecked} />
      </div>
    </div>
  );
};

export default ThemeSwitch;
