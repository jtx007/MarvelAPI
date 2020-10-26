import React, { useContext } from "react";
import { ThemeContext, Themes } from "../ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <nav
      style={{ background: Themes[theme].background, marginTop: 0 }}
      className="navbar"
    >
      <h1 style={{ color: Themes[theme].buttonText }}>Spider-Man Fan Page</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme}
      </button>
    </nav>
  );
};

export default Navbar;
