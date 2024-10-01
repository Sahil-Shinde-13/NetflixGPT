import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/Slices/moviesSlice";

export const useVideoBackground = (id) => { 


  const trailerVideo = useSelector(store => store.movies.trailerVideo);
const dispatch = useDispatch();

const getMovieVideo = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    API_OPTIONS
  );
  const json = await data.json();
  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] : json.results[0];
  dispatch(addTrailerVideo(trailer));
};

useEffect(() => {
 !trailerVideo && getMovieVideo();
}, []);

};