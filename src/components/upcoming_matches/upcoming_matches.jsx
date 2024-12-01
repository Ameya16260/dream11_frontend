import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Upcoming_matches() {
  return (
    <div className="  box-border ">
      <div className="bg-[linear-gradient(120deg,_#AC242D,_#5A0D13)] flex items-center ">
        <Link to='/' >
          <IoMdArrowBack className='text-white m-2 text-2xl' />
        </Link>
        <div className=" text-white md:text-[25px] font-semibold p-4 text-center ">
          All Upcoming Matches
        </div>
      </div>

      <div className=" flex flex-col items-center ">
        <div className=" font-bold py-3 md:text-[30px] md:w-[55%] sm:w-[85%] w-[95%] mt-2 text-gray-800  text-lg md:text-2xl">
          Upcoming Matches
        </div>

        {[1, 2, 3, 4].map(i => {
          return (
            <div className="border-2  md:w-[55%] sm:w-[85%] w-[95%] rounded-xl mb-4">
              <Link to='/join'>
                <div className=" text-[12px] font-semibold sm:text-[15px] md:text-[1.5rem] p-3 text-gray-800 bg-gray-100 rounded-t-xl w-full">
                  West Indies vs England T20I
                </div>
                <div className="grid grid-cols-[2fr_1.5fr_2fr] ">
                  <div className="">
                    <div className="flex items-center overflow-hidden px-3 py-1 relative">
                      <div className="z-10 h-[4rem] sm:h-[6rem] md:h-[7rem] flex items-center">
                        <img
                          src="https://cdn.britannica.com/46/3346-050-DE92F66A/flag-symbolism-Pakistan-design-Islamic.jpg"
                          alt="Badge"
                          className="w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] object-cover rounded-full shadow-md shadow-gray-700"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <div className=" text-[15px] text-gray-800 font-bold md:text-[2rem] p-2 md:p-4 ">
                          PAK
                        </div>
                      </div>
                      <div className="absolute -left-[20px] md:-left-[40px] z-0 ">
                        <img
                          src="https://cdn.britannica.com/46/3346-050-DE92F66A/flag-symbolism-Pakistan-design-Islamic.jpg"
                          alt="Badge"
                          className=" w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] object-cover rounded-full shadow-md shadow-gray-700 opacity-15"
                        />
                      </div>
                    </div>
                    <div className=" px-3 md:text-[1.4rem] md:px-3 text-gray-500 text-sm font-semibold">
                      Pakistan
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center">
                    <div className=" text-[#e72525] p-1 bg-red-100 rounded-md text-sm md:text-[25px] font-bold">
                      58m 18s
                    </div>
                    <div className=" text-gray-500 text-xs md:text-[20px] font-semibold">
                      1:30 AM
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-row-reverse items-center overflow-hidden px-3 py-1 relative">
                      <div className="z-10 h-[4rem] sm:h-[6rem] md:h-[7rem] flex items-center">
                        <img
                          src="https://imgs.search.brave.com/8XQRTHnaPQrwFCraOWhqSUt-8IRJB9FbwPQHjpEVsfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEw/LzM2MF9GXzY5MjEx/MTA2OV9OdEdveG5Q/eFdvRUpsQnl5TTBy/TFE4dGdpYVgySzM0/OS5qcGc"
                          alt="Badge"
                          className="w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] object-cover rounded-full shadow-md shadow-gray-700"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="  text-[15px] text-gray-800 font-bold md:text-[2rem] p-2 md:p-4">
                          AUS
                        </div>
                      </div>
                      <div className="absolute -right-[20px] md:-right-[40px] z-0 ">
                        <img
                          src="https://imgs.search.brave.com/8XQRTHnaPQrwFCraOWhqSUt-8IRJB9FbwPQHjpEVsfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEw/LzM2MF9GXzY5MjEx/MTA2OV9OdEdveG5Q/eFdvRUpsQnl5TTBy/TFE4dGdpYVgySzM0/OS5qcGc"
                          alt="Badge"
                          className=" w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] object-cover rounded-full shadow-md shadow-gray-700 opacity-15"
                        />
                      </div>
                    </div>
                    <div className=" px-3 md:text-[1.4rem] md:px-3 text-gray-500 text-right text-sm font-semibold">
                      Australia
                    </div>
                  </div>
                </div>
                <div className="h-[1px] bg-gray-100 mt-2"></div>
                <div className="p-2">
                  <div className="border-0 rounded-full inline font-semibold px-2 pb-1 bg-[#FEF8E1] text-[15px] mt-[5px] text-[#5D4604] md:text-[20px]">
                    Mega <span className="font-bold">{"\u20B9"}7.6 crores</span>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}



      </div>
    </div>
  );
}

export default Upcoming_matches;
