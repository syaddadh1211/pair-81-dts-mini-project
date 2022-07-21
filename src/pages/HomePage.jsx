import React from "react";
import "./style.css";

import ListMoviesSingle from "../container/ListMoviesSingle";
import { ListMoviesPopular } from "../container/ListMoviesPopular";
import ListMoviesLaga from "../container/ListMoviesLaga";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg">
      <ListMoviesSingle />
      <h2 className="id">Popular</h2>
      <ListMoviesPopular />
      <h2 className="id">Top Rated</h2>
      <ListMoviesLaga />
      <Footer />
    </div>
  );
};
export default HomePage;
