import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrendingTvSeries } from "../Utils/Slices/moviesSlice";

 

const useTrendingTvSeries = () =>{

  const trendingTvSeries = useSelector(store => store.movies.trendingTvSeries);

    const dispatch = useDispatch();
    const getTrendingTvSeries = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS)
      const json = await data.json();
      
      dispatch(addTrendingTvSeries(json.results));
    }
  
    useEffect(()=> {
     !trendingTvSeries && getTrendingTvSeries();
    },[]);
  
};

export default useTrendingTvSeries;