import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../MoviesList/MovieList';

function GptMovieSuggestion({ error }) {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (error) {
    // Display the error message if it exists
    return (
      <div className='flex justify-center'>
      <div className='p-4 w-1/2 items-center m-4 bg-black text-red-500 bg-opacity-80'>
        {error}
      </div>
      </div>
    );
  }

  if (!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestion;
