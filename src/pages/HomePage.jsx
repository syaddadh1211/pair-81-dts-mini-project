import React from "react";

import ListMoviesSingle from "../container/ListMoviesSingle";
import ListMoviesPopular from "../container/ListMoviesPopular";
import ListMoviesLaga from "../container/ListMoviesLaga";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <ListMoviesSingle />
      <h2>Popular</h2>
      <ListMoviesPopular />
      <h2>Laga dan Petualangan</h2>
      <ListMoviesLaga />
      <Footer />
    </div>
  );
};
export default HomePage;
