import React from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import useTheme from "../Context/Theme";

function Head() {
  const { themeMode,toggleTheme } = useTheme();
  const themeChange = (e) => {
    e.preventDefault();
    toggleTheme();
  };
  return (
    <>
      <div className="mb-4 text-blakishBlack flex items-center justify-between w-[50%] md:w-[70%] sm:w-[80%] xs:w-[90%] p-3 rounded-md dark:text-lightWhite">
        <div>
          <p className="text-xl">devFinder</p>
        </div>
        <div className="flex ">
          <div className="p-2">
            <p>{themeMode === "light" ? "Dark" : "Light"}</p>
          </div>
          <div className="p-2">
            <button data-theme="light" onClick={themeChange}>
              <img src={themeMode === "light" ? iconMoon : iconSun} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
