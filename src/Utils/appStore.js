import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import movieReducer from './Slices/moviesSlice'
import gptReducer from './Slices/GptSlice'

const appStore = configureStore({

    reducer: {
      user: userReducer,
      movies: movieReducer,
      gpt: gptReducer,
    },
    
});

export default appStore;