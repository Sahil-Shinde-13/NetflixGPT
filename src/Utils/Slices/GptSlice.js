import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptSearch: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});


export const {toggleGptSearch, addGptMovieResults} = GptSlice.actions;

export default GptSlice.reducer;