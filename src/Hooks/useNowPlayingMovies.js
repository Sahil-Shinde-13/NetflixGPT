import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/constants';
import { addNowPlayingMovies } from '../Utils/Slices/moviesSlice';
import { useEffect } from 'react';


const useNowPlayingMovies = () =>{


const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(()=> {
      if(!nowPlayingMovies) getNowPlayingMovies();
      },[]);
  
};

export default useNowPlayingMovies;
