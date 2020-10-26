import React, { useContext } from "react";
import { Themes, ThemeContext } from "../ThemeContext";

const Banner = ({ title }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <h1
      style={{
        color: Themes[theme].buttonText,
        marginTop: 0,
        textAlign: "center",
      }}
    >
      {title}
    </h1>
  );
};

export default Banner;
