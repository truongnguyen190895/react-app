import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <h3>{props.openingText}</h3>
      <Button variant="primary">Vote</Button>
    </li>
  );
};

export default Item;
