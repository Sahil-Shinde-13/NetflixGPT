import React, { useState } from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BackgroundImg } from '../../Utils/constants';

function GptSearchPage() {
  const [error, setError] = useState(''); // State to manage the error message

  return (
    <div className='w-screen h-screen bg-black bg-opacity-50'>
      <div className='absolute -z-10 '>
        <img className='md:w-screen md:h-screen h-screen object-cover' src={BackgroundImg} alt="" />
      </div>
      {/* Pass setError function to GptSearchBar so it can update the error */}
      <GptSearchBar setError={setError} />
      {/* Pass the error message to GptMovieSuggestion to display it */}
      <GptMovieSuggestion error={error} />
    </div>
  );
}

export default GptSearchPage;
