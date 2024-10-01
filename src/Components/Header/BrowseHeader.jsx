import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { auth } from '../../Utils/firebase';
import { NetflixLogo, UserIcon } from '../../Utils/constants';
import { useDispatch } from 'react-redux';
import { toggleGptSearch } from '../../Utils/Slices/GptSlice';

function BrowseHeader({ userName }) {
  const [isHome, setIsHome] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Detect scroll

  const dispatch = useDispatch();

  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  }

  function handleGptSearch() {
    dispatch(toggleGptSearch());
    setIsHome(!isHome);
  }

  // Scroll detection for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled ? 'bg-black' : 'bg-transparent'
      } fixed top-0 left-0 w-full z-20 flex justify-between  items-center md:px-8 md:py-4 px-2 py-2 transition-all duration-300`}
    >
      {/* Left-aligned logo */}
      <img className="w-20 md:w-40" src={NetflixLogo} alt="logo" />

      {/* Welcome text for mobile */}
      <span className="text-white font-medium flex flex-col items-center justify-center md:hidden">
  Welcome! <br />
  <span className="text-center">{userName}</span>
</span>


      <div className="flex items-center space-x-3 md:space-x-10">
        {/* GPT Search Button */}
        <button
          onClick={handleGptSearch}
          className="bg-red-600 text-white md:py-2 md:px-3 py-1 px-2 text-xs md:text-lg rounded"
        >
          {!isHome ? 'GPT Search' : 'Home'}
        </button>

        {/* User Icon and Welcome Text for larger screens */}
        <div className="flex items-center space-x-2">
          <img
            className="h-8 md:h-10 rounded cursor-pointer hidden md:block"
            src={UserIcon}
            alt="userIcon"
          />
          <span className="text-white font-medium flex-col items-center justify-center hidden md:block">
            Welcome! <br />
            <span className='text-center'>{userName}</span>
          </span>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white md:py-2 md:px-3 py-1 px-2 text-xs md:text-lg rounded"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default BrowseHeader;
