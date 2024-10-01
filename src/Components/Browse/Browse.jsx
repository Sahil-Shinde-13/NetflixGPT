import React, { } from 'react';
import BrowseHeader from '../Header/BrowseHeader';
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../../Hooks/useNowPlayingMovies';
import MainContainer from '../Browse Containers/MainContainer';
import SecondaryContainer from '../Browse Containers/SecondaryContainer';
import usePopularMovies from '../../Hooks/usePopulerMovies';
import useTopRatedMovies from '../../Hooks/useTopRatedMovies';
import useTvSeries from '../../Hooks/useTvSeries';
import useTrendingTvSeries from '../../Hooks/useTrendingTvSeries';
import GptSearchPage from '../GPT Component/GptSearchPage';


function Browse() {
  
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTvSeries();
  useTrendingTvSeries();
 
  return (
    <div>
      <BrowseHeader userName={user?.displayName}/>
    {showGptSearch ? <GptSearchPage/> : <>
    
      <MainContainer/>
      <SecondaryContainer/>
    </>}

      
      
    </div>
  );
}

export default Browse;
