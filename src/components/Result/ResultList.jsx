import React from "react";

import Item from "./Item";
import classes from "./ResultList.module.css";

const ResultList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.lists.map((list) => (
        <Item
          key={list.id}
          name={list.name}
          title={list.title}
          openingText={list.openingText}
        />
      ))}
    </ul>
  );
};

export default ResultList;
