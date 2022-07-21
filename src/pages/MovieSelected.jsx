import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieSelected = () => {
  let params = useParams();

  useEffect(() => {
    const selected = () => {};
  }, []);
  return (
    <>
      <h1>MovieId terseleksi adalah : {params.movieId} </h1>
    </>
  );
};

export default MovieSelected;
