import React from "react";
import { Link } from "react-router-dom";
import { BiCricketBall } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { useJsonData } from "../../JsonDataContext";
function Home({ match }) {
  const jsonData = useJsonData();
  const [timeLeft, setTimeLeft] = useState("");
  const team1_info = jsonData.find((row) => row.name === match.team1);
  const team2_info = jsonData.find((row) => row.name === match.team2);
  console.log(team1_info);
  console.log(match.team1);
  useEffect(() => {
    console.log("gello");
  }, []);
  useEffect(() => {
    // Check if match is defined before proceeding
    if (!match || !match.date) {
      setTimeLeft("Match data is unavailable.");
      return;
    }

    // Get the match time (in ISO 8601 format)
    const matchDate = new Date(match.date);
    console.log("match:", matchDate);

    // Function to update the time left
    const calculateTimeLeft = () => {
      // Get the current time every time calculateTimeLeft is called
      const now = new Date(import.meta.env.VITE_NOW_TIME);
      console.log("Now:", now);

      const timeDifference = matchDate - now;

      // If the match time has already passed
      if (timeDifference <= 0) {
        setTimeLeft("The match has already started or ended.");
        clearInterval(timer); // Clear the interval to stop further updates
        return;
      }

      // If less than 1 day left, show time in hours and minutes
      if (timeDifference < 1000 * 60 * 60 * 24) {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeLeft(`${hours}h ${minutes}m`);
      } else {
        // If more than 1 day left, show time in days
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeDifference / (1000 * 60 * 60) - 24 * days);
        setTimeLeft(`${days}d ${hours}h`);
      }
    };

    // Set the interval and clear it on unmount or when match has already started
    // const timer = setInterval(calculateTimeLeft, 1000);

    // Initial calculation
    calculateTimeLeft();

    // Cleanup the interval on component unmount or if the match has already started
    // return () => clearInterval(timer);
  }, [match]); // Only rerun if `match` changes
  // Only rerun if `match` changes
  
  return (
    <>
      <div className="bg-[linear-gradient(120deg,_#AC242D,_#5A0D13)] h-[43vh] md:h-[75vh]">
        <div className="flex w-full justify-center">
          <img
            src="/Dream11_logo.svg"
            alt=""
            className="m-4 h-7 md:h-12"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <img
            src="/profile-user.png"
            alt=""
            className="m-3 h-9 md:h-12 absolute left-0"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        <div className="flex w-full justify-center items-center font-custom text-white  text-lg">
          <div className=" mr-1 h-0.5 md:h-1 w-[50px] md:w-[20%] bg-gradient-to-l from-white to-transparent rounded-full"></div>
          <div className=" font-custom text-white  text-lg md:text-2xl">
            UPCOMING CRICKET MATCHES
          </div>
          <div className=" ml-1 h-0.5 md:h-1 w-[50px] md:w-[20%] bg-gradient-to-r from-white to-transparent rounded-full"></div>
        </div>
      </div>
      <div className="w-[90%] md:w-[55%] h-[80%] bg-white absolute top-[15%] md:top-[20%] left-1/2 transform -translate-x-1/2 rounded-2xl px-4 md:px-10">
        <div className=" w-full bg-gradient-to-r from-[#FEFEFE] via-[#F8F9FB] to-[#FEFEFE] rounded-t-2xl text-sm md:text-md text-center font-bold text-gray-400 p-2 md:hidden">
          {" "}
          {team1_info.short_name} vs {team2_info.short_name} {match.match_type}
        </div>
        <div className=" w-full bg-gradient-to-r from-[#FEFEFE] via-[#F8F9FB] to-[#FEFEFE] rounded-t-2xl text-sm md:text-md text-center font-bold text-gray-400 p-2 hidden md:block">
          {" "}
          {match.team1} vs {match.team2} {match.match_type}
        </div>

        <div className="flex justify-between my-5">
          {/* Left Side */}
          <div className="w-[40%] flex flex-col items-start">
            <div className="flex flex-row items-center">
              <img
                src={team1_info.image}
                alt="Badge"
                className="h-10 w-10 md:w-[85px] md:h-[85px] aspect-square object-cover rounded-full shadow-md shadow-gray-700"
              />
              <div className="pl-2 md:pl-4">
                <div className="text-2xl md:text-[40px] font-custom font-bold text-gray-700">
                  {team1_info.short_name}
                </div>
                <p className="pt-1 font-semibold text-gray-500 hidden md:block">
                  {match.team1}
                </p>
              </div>
            </div>
            <p className="pt-1 text-sm font-semibold text-gray-500 md:hidden">
              {match.team1}
            </p>
          </div>

          {/* Right Side */}
          <div className="w-[40%] flex flex-col items-end">
            <div className="flex flex-row items-center">
              <div className="pr-2 md:pr-4 text-right">
                <div className="text-2xl md:text-[40px] font-custom font-bold text-gray-700">
                  {team2_info.short_name}
                </div>
                <p className="pt-1 font-semibold text-gray-500 hidden md:block">
                  {match.team2}
                </p>
              </div>
              <img
                src={team2_info.image}
                alt="Badge"
                className="w-10 h-10 md:w-[85px] md:h-[85px] aspect-square object-cover rounded-full shadow-md shadow-gray-700"
              />
            </div>
            <p className="pt-1 text-sm font-semibold text-right text-gray-500 md:hidden">
              {match.team2}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-[10%] md:top-[12%] w-[20%]">
          <div className="text-center text-gray-500 text-[9px] md:text-lg inline">
            Match starts in
          </div>
          <div className="text-center py-0.5 px-1 text-[12px] md:text-base font-bold bg-red-100 text-red-600 rounded-full">
            {timeLeft}
          </div>
        </div>

        <div className="bg-[linear-gradient(30deg,_#ECDB87,_#DFE1E2,_#DFE1E2,_#DFE1E2)]  w-full rounded-[20px] p-0.5">
          <div className="w-full h-full bg-white rounded-[18px] p-2">
            <div className="bg-[linear-gradient(30deg,_#FFF4B5,_#FFFFFF,_#FFFFFF,_#FFFFFF,_#FFFFFF)] w-full h-full rounded-[14px] p-2">
              <div className="flex justify-between items-end pb-5 md:pb-[40px]">
                <div>
                  <p className="font-bold text-gray-400 text-sm md:text-lg">
                    Price Pool
                  </p>
                  <p className=" font-extrabold text-gray-800 text-2xl md:text-[40px]">
                    ₹1.26 Lakhs
                  </p>
                </div>
                <div className="text-right flex flex-col justify-end">
                  <p className="font-bold text-gray-400 text-sm md:text-lg">
                    1st Price
                  </p>
                  <p className=" font-extrabold text-gray-800 text-base md:text-[30px]">
                    ₹300
                  </p>
                </div>
              </div>

              <div className="w-full h-1 md:h-3 bg-red-300 rounded-full">
                <div className="w-1/3 h-full bg-[linear-gradient(90deg,_#A3212A,_#8D1B23)] rounded-full"></div>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-xs md:text-base mt-1 md:mt-2">
                  <span className="font-bold">1,518</span> spots left
                </p>
                <p className="text-gray-600 text-xs md:text-base mt-1 md:mt-2">
                  <span className="font-bold">2,000</span> spots
                </p>
              </div>

              <div className="mt-[45px] md:mt-[70px] mb-2 md:m-2 flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="text-gray-500 text-sm md:text-base">
                    Join for
                  </div>
                  <div className="font-extrabold text-[#5D4604]  md:text-2xl">
                    ₹75
                  </div>
                </div>
                <Link
                  to={`/join/${match.match_id}`}
                  className="p-2 text-center w-[65%] bg-green-600 rounded-lg font-custom text-white  text-lg md:text-2xl"
                >
                  JOIN NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/matches">
          <button className="left-1/2 transform -translate-x-1/2 relative bg-gray-300 text-gray-500 text-sm font-semibold py-2 px-4 clip-path-trapezium">
            View all contests
          </button>
        </Link>
      </div>

      <div
        className="pb-[70px] w-[90%] md:w-[55%] absolute top-[73%] md:top-[100%] left-1/2 transform -translate-x-1/2"
      >
        <Link
        to="/matches" className=" bg-gray-50 shadow-md shadow-gray-400 px-2 py-3 rounded-xl text-center text-lg font-bold text-gray-700 flex items-center justify-between">
          <div className="flex items-center">
            <BiCricketBall className="p-1 h-8 w-8 shadow-md mr-3 shadow-gray-300 rounded-full text-red-500" />
            <div>All Upcoming Matches</div>
          </div>
          <IoIosArrowForward className="text-gray-700 text-end" />
        </Link>

        <Link
        to="/past-matches" className=" bg-gray-50 shadow-md shadow-gray-400 px-2 py-3 rounded-xl text-center text-lg font-bold text-gray-700 flex items-center justify-between mt-3">
          <div className="flex items-center">
            <BiCricketBall className="p-1 h-8 w-8 shadow-md mr-3 shadow-gray-300 rounded-full text-red-500" />
            <div>All Past Matches</div>
          </div>
          <IoIosArrowForward className="text-gray-700 text-end" />
        </Link>

        <Link
        to="/manual-matches" className=" bg-gray-50 shadow-md shadow-gray-400 px-2 py-3 rounded-xl text-center text-lg font-bold text-gray-700 flex items-center justify-between mt-3">
          <div className="flex items-center">
            <BiCricketBall className="p-1 h-8 w-8 shadow-md mr-3 shadow-gray-300 rounded-full text-red-500" />
            <div>Manually Added Matches</div>
          </div>
          <IoIosArrowForward className="text-gray-700 text-end" />
        </Link>
      </div>
    </>
  );
}

export default Home;
