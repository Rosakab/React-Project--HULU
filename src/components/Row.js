import axios from "axios";
import { useState, useEffect } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);


// why???????????????????????????

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={30}
          className="  absolute left-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div key= {id} className=" relative p-2 w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer">
              <img
                className="h-auto w-full block "
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
              ></img>
              <div className="absolute top-0 left-0 h-full w-full hover:bg-black/60 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center h-full items-center text-center ">
                  {item?.title}
                </p>
                <p>
                  {like ? (
                    <BsHeartFill className="absolute top-4 left-4 text-gray-300" />
                  ) : (
                    <BsHeart className="absolute top-4 left-4 text-gray-300" />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={30}
          className="absolute right-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
