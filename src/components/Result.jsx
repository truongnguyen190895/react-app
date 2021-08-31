import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { db } from "../firebase.js";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function Result() {
  const [loadTitle, setLoadTitle] = useState([]);
  // const [loadContent, setLoadContent] = useState()

  const history = useHistory();

  useEffect(() => {
    db.collection("VoteContent").onSnapshot((snapshot) => {
      setLoadTitle(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    history.push("/");
  }

  return (
    <div>
      <div>
        <span
          style={{
            color: "#3b82f6",
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "35px",
            textAlign: "center",
          }}
        >
          https://cungdichoi.com/sessions/{uuidv4()}
        </span>
        <Button style={{ marginLeft: "15px" }}>Copy</Button>
      </div>
      {loadTitle.map((val) => (
        <>
          <Form.Check type="radio" aria-label="radio 1" />
          <span>
            {val.title}
            {uuidv4}
          </span>
          <Form.Check type="radio" aria-label="radio 1" />
          <span>{val.content}</span>
        </>
      ))}

      <Button>create a new group</Button>
    </div>
  );
}
