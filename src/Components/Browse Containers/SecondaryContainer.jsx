import React from 'react'
import MovieList from '../MoviesList/MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector(store => store.movies)
  return (
   movies.nowPlayingMovies && (
    <div className='bg-black w-screen'>
      <div className='md:-mt-52   z-20'>
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending Tv Series"} movies={movies.trendingTvSeries}/>
      <MovieList title={"Trending Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Tv Series"} movies={movies.tvSeries}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      
      </div>
    </div>
   )
  ) 
} 

export default SecondaryContainer