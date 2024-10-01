import React from 'react';
import { NetflixLogo } from '../../Utils/constants';

function Header() {
  return (
    <div className='fixed top-0 left-0 w-full z-20 flex justify-between items-center'>
      <img
        className='w-40 ml-4 mt-4'
        src={NetflixLogo}
        alt="logo"
      />
    </div>
  );
}

export default Header;
