import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addGptMovieResults } from "../../Utils/Slices/GptSlice";
import { API_OPTIONS } from "../../Utils/constants";
import { GoogleGenAI } from "@google/genai";

function GptSearchBar({ setError, setLoading, loading }) {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });

  
  const searchMovieTMBD = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    // return only the most relevant movie
    return json.results?.length ? [json.results[0]] : [];
  };

  async function handleGptSearch() {
    if (!searchText.current.value) return;

    try {
      setLoading(true);

      const GptQuery =
        "Act as a Movie Recommendation system and suggest 5 movies for the query: " +
        searchText.current.value +
        ". Only give comma-separated movie names like: Sholay, Don, Golmaal";

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: GptQuery,
      });

      const text = response.text;

      console.log("Gemini response:", text);

      const gptMovies = text.split(",").map((m) => m.trim());

      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMBD(movie)
      );

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResults({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );

      setError("");
    } catch (error) {
      console.error("Gemini Error:", error);
      setError("Something went wrong with Gemini API");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-[30%] md:pt-48 flex justify-center">
      <form
        className="w-5/6 md:w-1/2 md:bg-black rounded-xl flex flex-col md:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="md:p-4 md:m-4 p-2 m-2 md:w-4/5 rounded"
          ref={searchText}
          type="text"
          placeholder="Try searching best funny movies, top action movies/series etc"
        />

        <div className="flex justify-center">
          <button
            disabled={loading}
            className={`w-auto md:m-4 md:py-2 md:px-6 m-2 py-1 px-2 rounded-lg text-white ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-700"
            }`}
            onClick={handleGptSearch}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default GptSearchBar;