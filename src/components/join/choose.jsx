import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Choose() {
  const { match_id } = useParams();
  const [Details, setDetails] = useState([]);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Get the match time (in ISO 8601 format)
    const matchDate = new Date(Details.date);
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
  }, [Details]);

  useEffect(() => {
    // Fetch data once when the component mounts
    fetch(`http://localhost:4000/match/${match_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched matches:", data.match_details.match_id); // Log to see the data structure
        setDetails(data.match_details);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
  }, []);
  return (
    <div>
      <div className="flex items-center bg-[linear-gradient(150deg,_#470D0A,_#0E1319,_#0E1319)] p-2">
        <Link to="/" className="absolute">
          <IoMdArrowBack className="text-white m-2 text-2xl" />
        </Link>
        <div className="flex flex-col flex-grow items-center justify-center">
          <div className="flex flex-grow items-center justify-center">
            <img
              src="https://imgs.search.brave.com/8XQRTHnaPQrwFCraOWhqSUt-8IRJB9FbwPQHjpEVsfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEw/LzM2MF9GXzY5MjEx/MTA2OV9OdEdveG5Q/eFdvRUpsQnl5TTBy/TFE4dGdpYVgySzM0/OS5qcGc"
              alt="Badge"
              className="w-8 h-8 md:w-11 md:h-11 object-cover rounded-full border border-white"
            />
            <div className=" pl-2 md:pl-4">
              <div className="text-xl md:text-2xl font-semibold text-gray-200">
                {Details.team1}
              </div>
            </div>
            <img
              src="/vs.png"
              alt=""
              className="h-9 m-2"
              style={{ filter: "brightness(0) invert(0.5)" }}
            />
            <div className=" pr-2 md:pr-4">
              <div className="text-xl md:text-2xl font-semibold text-gray-200">
                {Details.team2}
              </div>
            </div>
            <img
              src="https://cdn.britannica.com/46/3346-050-DE92F66A/flag-symbolism-Pakistan-design-Islamic.jpg"
              alt="Badge"
              className="w-8 h-8 md:w-11 md:h-11 object-cover rounded-full border border-white"
            />
          </div>
          <div className="transform -translate-y-1/3 text-sm text-gray-200">
            {timeLeft} left
          </div>
        </div>
      </div>

      <div className="text-gray-800 font-bold text-center mt-6 md:text-lg">
        Pick your favourite players
      </div>
      <Link to={`/join/${match_id}`}>
        <div className=" w-[90%] md:w-[50%] mt-4 m-auto bg-white justify-center shadow-md shadow-gray-400 rounded-lg p-2 md:p-4">
          <img src="/join.png" alt="" className="w-full rounded-lg" />
          <div
            to="/join"
            className="p-3 mt-2 md:mt-4 mb-4 w-full text-center bg-green-600 rounded-lg  text-white font-bold md:text-lg"
          >
            CREATE YOUR OWN TEAM
          </div>
        </div>
      </Link>

      <div className="flex w-full justify-center items-center mt-7">
        <div className=" mr-2 h-[1px] md:h-[2px] w-[70px] md:w-[15%] bg-gradient-to-l from-gray-700 to-transparent rounded-full"></div>
        <div className=" text-gray-700  font-bold md:text-2xl">OR</div>
        <div className=" ml-2 h-[1px] md:h-[2px] w-[70px] md:w-[15%] bg-gradient-to-r from-gray-700 to-transparent rounded-full"></div>
      </div>

      <div className="text-gray-800 font-bold text-center mt-6 md:text-lg">
        Pick team made with AI
      </div>

      <div className=" w-[90%] md:w-[50%] mt-4 m-auto bg-white justify-center shadow-md shadow-gray-400 rounded-lg p-2 md:p-4 mb-10">
        <img src="/ai.png" alt="" className="w-full rounded-md" />

        <Link
          to={`/join/${match_id}`}
          className="relative inline-block px-6 py-4 w-full font-semibold text-black bg-white rounded-lg group text-center"
        >
          {/* Subtle Glowing Border */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur-lg opacity-80 transition-transform transform group-hover:scale-105"></span>

          {/* White Background */}
          <span className="absolute inset-1 bg-white rounded-lg"></span>

          {/* Button Text */}
          <span className="relative font-bold text-gray-600  md:text-lg">
            USE AI GENERATED TEAM
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Choose;
