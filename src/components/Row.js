import React, { useEffect, useState, useCallback } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal/MovieModal";
import "./Row.css";
import styled from "styled-components";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback(async () => {
    const res = await axios.get(fetchUrl);
    setMovies(res.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  // prettier-ignore
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules ={[Navigation, Pagination,Scrollbar, A11y]}
        loop = {true}
        navigation={true}
        pagination={{clickable:true}}
        breakpoints={{
          1378:{
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998:{
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625:{
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0:{
            slidesPerView: 3,
            slidesPerGroup: 3,
          }
        }}
      >
        <Content id = {id}>
        {movies.map((movie) => (
          <SwiperSlide>
            <Wrap>
            <img 
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
            alt={movie.original_title}
            onClick={()=>handleClick(movie)}
             />
            </Wrap>
          </SwiperSlide>
                      ))}
        </Content>
      </Swiper>
     
      {modalOpen && (
        <MovieModal 
        {...movieSelected}
        setModalOpen={setModalOpen}></MovieModal>
      )}

    </Container>
  );
};

export default Row;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div``;

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: 0px 26px 30px -10px rgba(0, 0, 0, 0.69), 0px 16px 10px -10px rgba(0, 0, 0, 0.73);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: 0px 40px 58px -16px rgba(0, 0, 0, 0.8), 0px 30px 22px -10px rgba(0, 0, 0, 0.72);
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
