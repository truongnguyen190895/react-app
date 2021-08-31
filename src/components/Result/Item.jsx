import React from "react";

import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <p>{props.openingText}</p>
      <button>Vote</button>
    </li>
  );
};

export default Item;
