import React, { useRef } from "react";

import classes from "./Add.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMovie(props) {
  const nameRef = useRef("");
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  // const releaseDateRef = useRef("");

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
      <button>Add Movie</button>
      <ToastContainer />
    </form>
  );
}

export default AddMovie;
