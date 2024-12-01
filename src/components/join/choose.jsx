import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function Join() {
  return (
    <div>
      <div className='flex items-center bg-[linear-gradient(150deg,_#470D0A,_#0E1319,_#0E1319)] p-2'>
        <Link to='/' className='absolute'><IoMdArrowBack className='text-white m-2 text-2xl' /></Link>
        <div className='flex flex-col flex-grow items-center justify-center'>
          <div className='flex flex-grow items-center justify-center'>
            <img
              src="https://imgs.search.brave.com/8XQRTHnaPQrwFCraOWhqSUt-8IRJB9FbwPQHjpEVsfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEw/LzM2MF9GXzY5MjEx/MTA2OV9OdEdveG5Q/eFdvRUpsQnl5TTBy/TFE4dGdpYVgySzM0/OS5qcGc"
              alt="Badge"
              className="w-8 h-8 md:w-11 md:h-11 object-cover rounded-full border border-white"
            />
            <div className=' pl-2 md:pl-4'>
              <div className='text-xl md:text-2xl font-semibold text-gray-200'>
                AUS
              </div>
            </div>
            <img src="/vs.png" alt="" className='h-9 m-2' style={{ filter: 'brightness(0) invert(0.5)' }} />
            <div className=' pr-2 md:pr-4'>
              <div className='text-xl md:text-2xl font-semibold text-gray-200'>
                PAK
              </div>
            </div>
            <img
              src="https://cdn.britannica.com/46/3346-050-DE92F66A/flag-symbolism-Pakistan-design-Islamic.jpg"
              alt="Badge"
              className="w-8 h-8 md:w-11 md:h-11 object-cover rounded-full border border-white"
            />
          </div>
          <div className='transform -translate-y-1/3 text-sm text-gray-200'>36h left</div>
        </div>
      </div>

      <div className='text-gray-800 font-bold text-center mt-6 md:text-lg'>Pick your favourite players</div>
      <Link to='/'>
        <div className=' w-[90%] md:w-[50%] mt-4 m-auto bg-white justify-center shadow-md shadow-gray-400 rounded-lg p-2 md:p-4'>
          <img src="/join.png" alt="" className='w-full rounded-lg' />
          <div to="/join" className='p-3 mt-2 md:mt-4 mb-4 w-full text-center bg-green-600 rounded-lg  text-white font-bold md:text-lg'>CREATE YOUR OWN TEAM</div>
        </div></Link>

      <div className='flex w-full justify-center items-center mt-7'>
        <div className=" mr-2 h-[1px] md:h-1 w-[70px] md:w-[20%] bg-gradient-to-l from-gray-700 to-transparent rounded-full"></div>
        <div className=' text-gray-700  font-bold md:text-2xl'>OR</div>
        <div className=" ml-2 h-[1px] md:h-1 w-[70px] md:w-[20%] bg-gradient-to-r from-gray-700 to-transparent rounded-full"></div>
      </div>

      <div className='text-gray-800 font-bold text-center mt-6 md:text-lg'>Pick team made with AI</div>

      <div className=' w-[90%] md:w-[50%] mt-4 m-auto bg-white justify-center shadow-md shadow-gray-400 rounded-lg p-2 md:p-4'>
        <img src="/ai.png" alt="" className='w-full rounded-md' />

        <Link to='/' className="relative inline-block px-6 py-3 w-full font-semibold text-black bg-white rounded-lg group">
          {/* Subtle Glowing Border */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-80 transition-transform transform group-hover:scale-105"></span>

          {/* White Background */}
          <span className="absolute inset-1 bg-white rounded-lg"></span>

          {/* Button Text */}
          <span className="relative font-bold text-gray-600">USE AI GENERATED TEAM</span>
        </Link>

      </div>


    </div>
  )
}

export default Join
