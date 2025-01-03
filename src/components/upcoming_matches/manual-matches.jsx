import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../assets/images.json";
import { Skeleton } from "@mui/material";

function Manual_matches({ matches }) {
  const jsonData = data;
  
  return (
    <div className="  box-border ">
      <div className="bg-[linear-gradient(120deg,_#AC242D,_#5A0D13)] flex items-center ">
        <Link to="/">
          <IoMdArrowBack className="text-white m-2 text-2xl" />
        </Link>
        <div className=" text-white md:text-[25px] font-semibold p-4 text-center ">
          Manually Added Matches
        </div>
      </div>

      <div className=" flex flex-col items-center ">
        <div className=" font-bold py-3 md:text-[30px] md:w-[55%] sm:w-[85%] w-[95%] mt-2 text-gray-800  text-lg md:text-2xl">
          Matches Added Via CSV
        </div>

        {matches.map((i, index) => {
          const a = jsonData.find((row) => row.name === i.team1);
          const b = jsonData.find((row) => row.name === i.team2);
          return (
            <div className="border-2  md:w-[55%] sm:w-[85%] w-[95%] rounded-xl mb-4" key={index}>
              <Link to={`/past-join/${i.match_id}`}>
                <div className=" text-[12px] font-semibold sm:text-[15px] md:text-[1.5rem] p-3 text-gray-800 bg-gray-100 rounded-t-xl w-full">
                  {i.team1} vs {i.team2} {i.match_type}
                </div>
                <div className="grid grid-cols-[0.5fr_0.5fr] ">
                  <div className="">
                    <div className="flex items-center overflow-hidden px-3 py-1 relative">
                      <div className="z-10 h-[4rem] sm:h-[6rem] md:h-[7rem] flex items-center">
                        <img
                          src={a?.image}
                          alt="Badge"
                          className="w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] object-cover rounded-full shadow-md shadow-gray-700"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <div className=" text-[15px] text-gray-800 font-bold md:text-[2rem] p-2 md:p-4 ">
                          {a?.short_name}
                        </div>
                      </div>
                      <div className="absolute -left-[20px] md:-left-[40px] z-0 ">
                        <img
                          src={a?.image}
                          alt="Badge"
                          className=" w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] object-cover rounded-full shadow-md shadow-gray-700 opacity-15"
                        />
                      </div>
                    </div>
                    <div className=" px-3 md:text-[1.4rem] md:px-3 text-gray-500 text-sm font-semibold">
                      {i.team1}
                    </div>
                  </div>
                  
                  <div className="">
                    <div className="flex flex-row-reverse items-center overflow-hidden px-3 py-1 relative">
                      <div className="z-10 h-[4rem] sm:h-[6rem] md:h-[7rem] flex items-center">
                        <img
                          src={b?.image}
                          alt="Badge"
                          className="w-[2.5rem] h-[2.5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] object-cover rounded-full shadow-md shadow-gray-700"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="  text-[15px] text-gray-800 font-bold md:text-[2rem] p-2 md:p-4">
                          {b?.short_name}
                        </div>
                      </div>
                      <div className="absolute -right-[20px] md:-right-[40px] z-0 ">
                        <img
                          src={b?.image}
                          alt="Badge"
                          className=" w-[4rem] h-[4rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] object-cover rounded-full shadow-md shadow-gray-700 opacity-15"
                        />
                      </div>
                    </div>
                    <div className=" px-3 md:text-[1.4rem] md:px-3 text-gray-500 text-right text-sm font-semibold">
                      {i.team2}
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
          );
        })}
        {matches.length === 0 && Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            variant="rectangular"
            key={index}
            sx={{
              height: { xs: "200px", md: "270px" }, // Set height directly
              width: { xs: "95%", sm: "85%", md: "55%" }, // Responsive width
              borderRadius: "12px", // `rounded-xl` in Tailwind
              marginBottom: "1rem", // `mb-4` in Tailwind
            }}
          />
        ))
        }
      </div>
    </div>
  );
}

export default Manual_matches;
