import React, { useState, useEffect, useCallback } from "react";

import ResultList from "./Result/ResultList";
import Add from "./Result/Add";
import "./Result.css";
import db from "../firebase.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://chat-app-e7f44-default-rtdb.asia-southeast1.firebasedatabase.app/content.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedResult = [];

      for (const key in data) {
        loadedResult.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedResult);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://chat-app-e7f44-default-rtdb.asia-southeast1.firebasedatabase.app/content.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <ResultList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <Add onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Show result</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
