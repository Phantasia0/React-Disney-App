import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    fetchData();
  }, [movieId]);

  //prettier-ignore
  const fetchData = async () => {
    const request = await axios.get(
      `/movie/${movieId}`
      );
    console.log(request.data);
    setMovies(request.data);
  };

  if (!movies) {
    return null;
  } else {
    return (
      //prettier-ignore
      <section>
        <img 
          className='modal__poster-img'
          src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path ? movies.backdrop_path : movies.poster_path }`}
          alt='modal__poster-img'
        />
      </section>
    );
  }
};

export default DetailPage;
