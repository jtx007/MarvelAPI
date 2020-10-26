import React, { useContext } from "react";
import { Themes, ThemeContext } from "../ThemeContext";

const ComicItem = ({ title, description, thumbnail }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div className="comic">
      <h3 style={{ color: Themes[theme].tertiary }}>{title}</h3>
      <img src={thumbnail} alt="comic-cover" />
      <p>{description}</p>
    </div>
  );
};

export default ComicItem;
