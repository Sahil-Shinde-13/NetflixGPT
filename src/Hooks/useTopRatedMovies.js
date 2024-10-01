import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTopRatedMovies } from "../Utils/Slices/moviesSlice";
import { useEffect } from "react";



const useTopRatedMovies = () =>{

  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const dispatch = useDispatch();
    const getPopularMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const json = await data.json();      
      dispatch(addTopRatedMovies(json.results));
    }
  
    useEffect(()=> {
    !topRatedMovies && getPopularMovies();
    },[]);
  
};

export default useTopRatedMovies;