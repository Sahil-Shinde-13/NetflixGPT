import React from 'react'
import { IMG_CDN_URL } from '../../Utils/constants'

function MovieCards({posterPath}) {
  if(!posterPath) return null;
  return (
    <div className='md:w-64 w-28 md:pr-4 pr-2'>
      <img src={IMG_CDN_URL + posterPath} alt="MovieCards" />
    </div>
  )
}

export default MovieCards