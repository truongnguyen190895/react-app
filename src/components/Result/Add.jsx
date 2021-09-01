import React, { useRef } from "react";

import classes from "./Add.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function AddMovie(props) {
  const nameRef = useRef("");
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const history = useHistory();
  // const releaseDateRef = useRef("");

  function handleBack(e) {
    e.preventDefault();
    history.push("/session/create/1");
  }

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    toast.success("success");

    const movie = {
      name: nameRef.current.value,
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
    };

    props.onAddMovie(movie);
  }
  function handleClick() {
    history.push("/");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <button onClick={handleBack} style={{ margin: "10px" }}>
        Back
      </button>
      <button>Add Content</button>
      <ToastContainer />
      <button onClick={handleClick}>Home Page</button>
    </form>
  );
}

export default AddMovie;
