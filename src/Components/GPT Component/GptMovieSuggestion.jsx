import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../MoviesList/MovieList';

function GptMovieSuggestion({ error, loading }) {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (loading) {
    return (
      <div className="flex justify-center mt-6 text-white text-xl">
        Searching movies...
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center'>
        <div className='p-4 w-1/2 m-4 bg-black text-red-500 bg-opacity-80'>
          {error}
        </div>
      </div>
    );
  }

  if (!movieNames) return null;

  const combinedMovies = movieResults?.flat();

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
      <MovieList
        title="Recommended Movies"
        movies={combinedMovies}
      />
    </div>
  );
}

export default GptMovieSuggestion;