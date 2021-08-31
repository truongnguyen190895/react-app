import React, { useRef } from "react";

import classes from "./Add.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import validation from "./validation.js";

function Add(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const nameRef = useRef("");
  // const releaseDateRef = useRef("");

  const [values, setValues] = useState({
    nameRef: "",
    titleRef: "",
    openingTextRef: "",
  });

  const [error, setError] = useState({});

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    setError(validation(values));

    if (!titleRef === "" || !openingTextRef === "") {
      toast.error("please enter title");
    } else {
      toast.success("success");
    }

    const itemList = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      name: nameRef.current.value,
      // releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(itemList);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="title"
          ref={nameRef}
          name="nameRef"
          value={values.nameRef}
          onChange={handleInput}
        />
      </div>
      {error.titleRef && <p>{error.titleRef}</p>}
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          name="titleRef"
          value={values.titleRef}
          onChange={handleInput}
        />
      </div>
      {error.titleRef && <p>{error.titleRef}</p>}
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          ref={openingTextRef}
          name="openingTextRef"
          value={values.openingTextRef}
          onChange={handleInput}
        ></textarea>
      </div>
      {error.titleRef && <p>{error.titleRef}</p>}
      <button>Add Content</button>
      <ToastContainer />
    </form>
  );
}

export default Add;
