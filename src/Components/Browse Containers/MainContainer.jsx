import React from 'react'
import { useSelector } from 'react-redux'
import BackgroundVideoTitle from '../Main Video/BackgroundVideoTitle'
import BackgroundVideo from '../Main Video/BackgroundVideo'

function MainContainer() {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[2];
    
    
    const { original_title, overview, id} = mainMovie;

  return (
    <div>
        <BackgroundVideoTitle title={original_title} overview={overview}/>
        <BackgroundVideo id={id}/>
    </div>
  )
}

export default MainContainer