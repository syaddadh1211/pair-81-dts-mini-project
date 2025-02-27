import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const ListMoviesLaga = () => {
  const [movies, setMovies] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tmdb.get("/movie/top_rated");
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    //cukup sekali dijalankan jadi dikasih array kosong, kalo ingin setiap kali reaktif saat ada perubahan state maka
    //array bisa diisi nama statenya
  }, []);

  const handleMovie = (event, movie) => {
    navigate("selected/" + movie.id);
  };

  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            // <Box className="boxy">
            <SwiperSlide>
              <a href="#">
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  onClick={(event) => handleMovie(event, movie)}
                  alt="pilem"
                ></img>
              </a>
            </SwiperSlide>
            // </Box>
          );
        })}
      </Swiper>
    </>
  );
};

export default ListMoviesLaga;
