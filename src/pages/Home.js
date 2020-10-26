import React, { useContext } from "react";
import { Themes, ThemeContext } from "../ThemeContext";
import Banner from "../components/Banner";
import ComicList from "../components/ComicList";

const Home = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div style={{ background: Themes[theme].background }}>
      <Banner title="All Things Spider-Man" />
      <ComicList />
    </div>
  );
};

export default Home;
