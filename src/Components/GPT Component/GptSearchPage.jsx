import React, { useState } from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BackgroundImg } from '../../Utils/constants';

function GptSearchPage() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // ✅ added

  return (
    <div className='w-screen h-screen bg-black bg-opacity-50'>
      <div className='absolute -z-10'>
        <img
          className='md:w-screen md:h-screen h-screen object-cover'
          src={BackgroundImg}
          alt=""
        />
      </div>

      <GptSearchBar
        setError={setError}
        setLoading={setLoading}
        loading={loading}
      />

      <GptMovieSuggestion error={error} loading={loading} />
    </div>
  );
}

export default GptSearchPage;