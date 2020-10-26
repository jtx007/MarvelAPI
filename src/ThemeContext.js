import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const Themes = {
  light: {
    background: "#eff0f3",
    secondary: "#fffffe",
    buttonText: "#0d0d0d",
    highlight: "#ff8e3c",
    tertiary: "#d9376e",
    button: "#ff8e3c",
  },
  dark: {
    background: "#0f0e17",
    secondary: "#f25f4c",
    button: "#ff8906",
    buttonText: "#fffffe",
    highlight: "#ff8906",
    tertiary: "#e53170",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
