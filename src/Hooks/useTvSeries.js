import { API_OPTIONS } from "../Utils/constants";
import { addTvSeries } from "../Utils/Slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const useTvSeries = () =>{

  const tvSeries = useSelector(store => store.movies.tvSeries);

    const dispatch = useDispatch();
    const getTvSeries = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS)
      const json = await data.json();
  
      dispatch(addTvSeries(json.results));
    }
  
    useEffect(()=> {
     !tvSeries && getTvSeries();
    },[]);
  
};

export default useTvSeries;