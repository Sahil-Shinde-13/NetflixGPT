import React from 'react'
import MovieCards from '../MovieCards/MovieCards'

function MovieList({title,movies}) {
    
    
  return (
    <div className='md:px-8 px-4'>
        <h1 className='md:text-3xl text-xl md:my-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'> 
        <div className='flex'>

            {/* {movies.map(movie => <MovieCards key={movie.id} posterPath={movie.poster_path}/>)} */}
            {movies?.map((movie) => {
                return <MovieCards key={movie.id} posterPath={movie.poster_path}/>
                
            })}
        </div>  
        </div>
    </div>
  )
}

export default MovieList