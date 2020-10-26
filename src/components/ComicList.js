import React, { useState, useEffect } from "react";
import ComicItem from "./ComicItem";

const ComicList = () => {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    const fetchSpiderManComics = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/1009610/comics?apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
      );
      const data = await response.json();
      setComics(data.data.results);
    };
    fetchSpiderManComics();
  }, []);
  console.log(comics);
  return (
    <div className="comic-list">
      {comics.map((comic) => (
        <ComicItem
          key={comic.id}
          title={comic.title}
          thumbnail={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`}
        />
      ))}
    </div>
  );
};

export default ComicList;
