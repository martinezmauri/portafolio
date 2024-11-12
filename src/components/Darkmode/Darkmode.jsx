import React, { useState, useEffect } from "react";
import styles from "./Darkmode.module.css";

export const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");
    if (isDarkMode) {
      root.classList.add("dark-mode");
      document.body.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const returnImage = () => {
    return isDarkMode
      ? "/src/assets/moon-logo.png"
      : "/src/assets/sun-logo.png";
  };

  return (
    <button onClick={handleMode} className={styles.darkmode}>
      <img src={returnImage()} alt="luz de darkmode" className={styles.sun} />
    </button>
  );
};
