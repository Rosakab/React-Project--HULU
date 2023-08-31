import axios from "axios";
import { useState, useEffect } from "react";
import requests from "../requests";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  // console.log(movies);

  const truncateString = (string, number) => {
    if (string?.length > number) {
      return string.slice(0, number) + "...";
    } else {
      return string;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        ></img>
        <div className="absolute w-full p-y top-[20%] md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="py-2 px-5 border bg-gray-300 text-black border-gray-300">
              Play
            </button>
            <button className="ml-2 py-2 px-5 border border-gray-300 text-white ">
              Watch later
            </button>
          </div>
          <p className=" ml-2 text-gray text-sm ">
            Released: {movie?.release_date}
          </p>
          <p className="w-full ml-2 md:max-w-[70%] lg:max-w-[50%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
