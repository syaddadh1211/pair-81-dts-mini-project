import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ListMoviesPopular } from "../container/ListMoviesPopular";
import ListMoviesLaga from "../container/ListMoviesLaga";
import ListMoviesSingle from "../container/ListMoviesSingle";
import Footer from "../components/Footer";
import "./style.css";

const MovieSelected = () => {
  let params = useParams();
  // const [movie, setMovie] = useState({});

  //   useEffect(() => {
  //     const selected = getMovie(params.movieId);
  //     setMovie(selected);
  //   }, []);
  return (
    <div className="bg">
      <ListMoviesSingle />
      <h1 className="id">MovieId terseleksi adalah : {params.movieId} </h1>
      <h2 className="id">Popular</h2>
      <ListMoviesPopular />
      <h2 className="id">Top Rated</h2>
      <ListMoviesLaga />
      <Footer />
    </div>
  );
};

export default MovieSelected;
