import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import tmdb from "../apis/tmdb";
import CardMovie from "../components/CardMovie";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Pagination, Navigation } from "swiper";

const ListMoviesSingle = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await tmdb.get("/movie/popular");
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    //cukup sekali dijalankan jadi dikasih array kosong, kalo ingin setiap kali reaktif saat ada perubahan state maka
    //array bisa diisi nama statenya
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {movies.map((movie) => {
          return (
            // <Box className="boxy">

            <SwiperSlide>
              <a href="#">
                <CardMovie key={movie.id} propsMovie={movie} />
              </a>
            </SwiperSlide>
            // </Box>
          );
        })}
      </Swiper>
    </>
  );
};

export default ListMoviesSingle;
