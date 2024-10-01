import React, { useRef } from 'react';
import openai from '../../Utils/openai';
import { API_OPTIONS } from '../../Utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from '../../Utils/Slices/GptSlice';

function GptSearchBar({ setError }) {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMBD = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  async function handleGptSearch() {
    try {

      const GptQuery = 'Act as Movie Recommendation system and suggest some movies for the query :' + searchText.current.value +
      '. Only give me names of 5 movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya';

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: GptQuery }],
        model: 'gpt-3.5-turbo',
      });

      console.log(gptResults.choices?.[0]?.message?.content);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');
      const promiseArray = gptMovies.map((movie) => searchMovieTMBD(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));

      // Clear any previous error if the search is successful
      setError('');
    } catch (error) {
      console.error("Error during GPT search:", error);
      setError('You have exceeded your current quota, please check your plan and billing details of openai API for chat GPT 3.5 turbo plan.');
    }
  }

  return (
    <div className='pt-[30%] md:pt-48 flex justify-center'>
      <form className='w-5/6 md:w-1/2 md:bg-black rounded-xl flex flex-col md:flex-row' onSubmit={(e) => e.preventDefault()}>
        <input className='md:p-4 md:m-4 p-2 m-2 md:w-4/5 rounded' ref={searchText}
          type="text"
          placeholder='What Would You Like To Watch Today?' />

        <div className='flex justify-center'>
          <button className='w-auto md:m-4 md:py-2 md:px-6 m-2 py-1 px-2 bg-red-700 text-white rounded-lg' onClick={handleGptSearch}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default GptSearchBar;
