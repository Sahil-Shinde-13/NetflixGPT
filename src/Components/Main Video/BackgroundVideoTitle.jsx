import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';

function BackgroundVideoTitle({ title, overview }) {
  return (
    <div className="md:pt-[25%] md:px-12 pt-[30%] px-3 absolute  text-white w-screen aspect-video ">
      <h2 className="md:text-5xl text-xl font-bold">{title}</h2>
      <p className="md:py-6 md:text-base md:w-1/3 hidden md:block">{overview}</p>
      <div className="flex md:mt-0 mt-3">

        <button className="flex items-center justify-center bg-white text-black md:p-4  md:px-12 px-3 md:text-xl text-base hover:bg-opacity-70 md:rounded-lg rounded">
          <FaPlay className="md:mr-2 mr-1" /> Play
        </button>
        <button className="flex items-center justify-center mx-2 bg-white md:p-4  md:px-12 px-3 bg-opacity-60 md:text-xl text-base text-black font-medium hover:bg-opacity-30 md:rounded-lg rounded">
          <BsInfoCircle className="md:mr-2 mr-1" /> More Info
        </button>

      </div>
    </div>
  );
}

export default BackgroundVideoTitle;
