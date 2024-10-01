import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movienames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptSearch: (state, action) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) =>{
            const {movienames, movieResults} = action.payload;
            state.movienames = movienames;
            state.movieResults = movieResults;
        }
    }
});


export const {toggleGptSearch, addGptMovieResults} = GptSlice.actions;

export default GptSlice.reducer;