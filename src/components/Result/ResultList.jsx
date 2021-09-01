import React from "react";

import Item from "./Item";
import classes from "./ResultList.module.css";

const ResultList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Item
          key={movie.id}
          name={movie.name}
          title={movie.title}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default ResultList;
