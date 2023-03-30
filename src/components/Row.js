import React, { useEffect, useState, useCallback } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal/MovieModal";
import "./Row.css";

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
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow"
            onClick={()=>{
              document.getElementById(id).scrollLeft -= window.innerWidth - 80
            }}
          >{"<"}</span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img 
            key={movie.id}
            className="row__poster" 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path}`} 
            alt={movie.original_title}
            onClick={()=>handleClick(movie)}
             />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow"
            onClick={()=>{
              document.getElementById(id).scrollLeft += window.innerWidth - 80
            }}
          >{">"}</span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal 
        {...movieSelected}
        setModalOpen={setModalOpen}></MovieModal>
      )}

    </div>
  );
};

export default Row;
