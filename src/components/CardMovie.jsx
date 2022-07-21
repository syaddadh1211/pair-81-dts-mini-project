import React from "react";

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

const urlDepan = "https://image.tmdb.org/t/p/w200";

const CardMovie = ({ propsMovie }) => {
  let navigate = useNavigate();

  const handleMovie = (event, movie) => {
    navigate("selected/" + movie.id);
  };

  return (
    <>
      <Card
        className="boxy"
        sx={{
          width: 1500,
          height: 440,
        }}
        variant="outlined"
      >
        <Box
          className="boxy"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 440,
            backgroundColor: "black",
          }}
        >
          <CardMedia
            variant="outlined"
            component="img"
            image={`${urlDepan}${propsMovie.poster_path}`}
            alt="Kucing"
            onClick={(event) => handleMovie(event, propsMovie)}
            sx={{ width: 300 }}
          ></CardMedia>

          <CardContent
            sx={{
              backgroundColor: "black",
              color: "white",
              textAlign: "left",
              width: 1000,
            }}
          >
            <Typography variant="body1">{propsMovie.title}</Typography>
            <Rating
              value={propsMovie.vote_average / 2}
              precision={0.1}
              readOnly
            ></Rating>
            <Typography variant="body1">{propsMovie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default CardMovie;
