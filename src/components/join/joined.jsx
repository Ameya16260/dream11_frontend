import React from "react";
import { CgAdd } from "react-icons/cg";
import { CgRemove } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWindowSize } from "react-use";
import image from "../../assets/a.avif";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import data from "../../assets/images.json";
function Joined() {
  const [toggleState, setToggleState] = useState(true);
  const [expandedPlayerId, setExpandedPlayerId] = useState(null); // null means no player is expanded

  const jsonData = data;
  const togglefn = () => {
    if (toggleState) {
      setToggleState(false);
    } else {
      setToggleState(true);
    }
  };
  const { match_id } = useParams();
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [Players, setPlayers] = useState([]);
  const [Players2, setPlayers2] = useState([]);
  const [team1_info, setteam1_info] = useState([]);
  const [team2_info, setteam2_info] = useState([]);
  const [Details, setDetails] = useState([]);
  const [SelectedPlayersCount, setSelectedPlayersCount] = useState(0);
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
    console.log("Selected Players:", selectedPlayers);
  }, [selectedPlayers]);
  useEffect(() => {
    // Fetch data once when the component mounts
    fetch(`http://13.51.199.61/match/${match_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched matches:", data.matches); // Log to see the data structure
        setPlayers(data.team1_players); // Store the matches data in state
        setPlayers2(data.team2_players); // Store the matches data in state
        setDetails(data.match_details);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
  }, []);
  useEffect(() => {
    if (Details) {
      console.log("Details updated:", Details);
      console.log(Details.team2);

      const a = jsonData.find((row) => row.name === Details.team1);
      const b = jsonData.find((row) => row.name === Details.team2);
      console.log(a);
      console.log(b);

      setteam1_info(a);
      setteam2_info(b);
    }
  }, [Details]);
  const togglePlayerSelection = (playerId) => {
    setSelectedPlayers((prev) => {
      // If player is already selected, remove them and decrease count
      if (prev.includes(playerId)) {
        return prev.filter((id) => id !== playerId);
      } else {
        // If player is not selected, add them and increase count

        return [...prev, playerId];
      }
    });
  };
  const clearSelectedPlayers = () => {
    setSelectedPlayers([]);
  };
  const { width } = useWindowSize();
  let iconSize = 25; // Default size
  if (width >= 768) iconSize = 30; // Medium screens and above
  if (width >= 1024) iconSize = 40;

  const handlePlayerClick = (playerId) => {
    setExpandedPlayerId((prev) => (prev === playerId ? null : playerId)); // Toggle expansion
  };
  return (
    <div>
      {toggleState ? (
        <>
          <div className="flex items-center bg-[linear-gradient(150deg,_#470D0A,_#0E1319,_#0E1319)] p-2">
            <Link to="/" className="absolute">
              <IoMdArrowBack className="text-white m-2 text-2xl" />
            </Link>
            <div className="flex flex-col flex-grow items-center justify-center">
              <div className="flex flex-grow items-center justify-center">
                <img
                  src={team1_info?.image}
                  alt="Badge"
                  className="w-8 h-8 md:w-11 md:h-11 object-cover rounded-full border border-white"
                />
                <div className=" pl-2 md:pl-4">
                  <div className="text-xl md:text-2xl font-semibold text-gray-200">
                    {team1_info?.short_name}
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
                    {team2_info?.short_name}
                  </div>
                </div>
                <img
                  src={team2_info?.image}
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

          <div className=" w-[90%] md:w-[50%] mt-4 m-auto bg-white justify-center shadow-md shadow-gray-400 rounded-lg p-2 md:p-4">
            <img src="/join.png" alt="" className="w-full rounded-lg" />
            <div
              to="/join"
              className="p-3 mt-2 md:mt-4 mb-4 w-full text-center bg-green-600 rounded-lg  text-white font-bold md:text-lg"
            >
              <button onClick={togglefn}>CREATE YOUR OWN TEAM</button>
            </div>
          </div>

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
        </>
      ) : (
        <>
          <div className="pb-2 sm:pb-4 bg-[linear-gradient(170deg,_#470D0A,_#0E1319,_#0E1319,_#0E1319)]">
            <div className="flex items-center p-2">
              <button onClick={togglefn}>
                <IoMdArrowBack className="text-white m-2 md:m-4 mr-4 md:mr-8  text-2xl" />
              </button>
              <div className="">
                <div className="flex flex-grow text-lg md:text-2xl text-gray-200 font-bold items-center justify-center">
                  Create Team
                </div>
                <div className="text-xs md:text-base text-gray-200 font-semibold">
                  {timeLeft}
                </div>
              </div>
            </div>
            <div className="text-white text-center text-[13px] xs:text-[17px] font-semibold md:text-[21px] ">
              Maximum of 10 players from one team
            </div>
            <div className="flex justify-center my-2 lg:my-4">
              <div className="grid grid-cols-2 w-[55%] sm:w-[50%] lg:w-[30%]">
                <div className="flex border-0 border-white">
                  <div className="p-1  ">
                    <img
                      src={team1_info?.image}
                      alt="Badge"
                      className=" w-[2.8rem] h-[2.8rem] xs:w-[3.2rem] xs:h-[3.2rem] sm:w-[4.5rem] sm:h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-cover border-[2px] border-white rounded-full "
                    />
                  </div>
                  <div className="flex flex-col justify-center md:ml-1 ">
                    <div className="text-white text-[12px] xs:text-[14px] px-1 md:text-[17px] lg:text-[19px]">
                      {team1_info?.short_name}
                    </div>
                    <div className="text-[17px] xs:text-[19px] md:text-[23px] lg:text-[25px] font-bold text-white text-left px-1">
                      0
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse border-0 border-white">
                  <div className="p-1  ">
                    <img
                      src={team2_info?.image}
                      className=" w-[2.8rem] h-[2.8rem]  xs:w-[3.2rem] xs:h-[3.2rem] sm:w-[4.5rem] sm:h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-cover border-[2px] border-white rounded-full "
                    />
                  </div>
                  <div className="flex flex-col justify-center md:mr-1">
                    <div className="text-white text-[12px] xs:text-[14px] md:text-[17px] lg:text-[19px] px-1">
                      {team2_info?.short_name}
                    </div>
                    <div className="text-[17px] xs:text-[19px] lg:text-[25px] font-bold md:text-[23px] text-white text-right px-1">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2 sm:mt-4 items-center">
              {/* Create 11 boxes dynamically */}
              {Array.from({ length: 11 }).map((_, index) => {
                const playerId = index + 1; // Player IDs start from 1 to 11
                const isSelected = index < selectedPlayers.length; // Color the first N boxes red
                return (
                  <div
                    key={index}
                    onClick={() => togglePlayerSelection(playerId)} // Toggle player selection
                    className={`w-6 h-4 xs:w-8 xs:h-5 md:w-12 md:h-7 transform ml-0.5 -skew-x-12 ${
                      isSelected ? "bg-red-500" : "bg-white"
                    }`} // Apply red for the first N boxes
                  >
                    {index === 10 && (
                      <div className="flex justify-center items-center">
                        <div className="font-bold text-[12px] md:text-[20px]">
                          11
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="ml-3">
                <CgRemove
                  color="white"
                  onClick={clearSelectedPlayers}
                  className="cursor-pointer"
                  size={iconSize}
                />
              </div>
            </div>
          </div>

          <div className="md:w-[55%] md:m-auto">
            <div className="grid grid-cols-2">
              <div className="flex p-3 md:px-3">
                <div className="text-gray-500 font-semibold text-sm xs:text-[14px] md:text-[19px]">
                  SELECTED BY
                </div>
              </div>
              <div className="flex justify-around p-3  xs:justify-center  ">
                <div className="text-gray-500 text-sm xs:px-4 xs:text-[14px] md:text-[19px] sm:px-6 font-semibold">
                  POINTS
                </div>
                <div className="text-gray-500 text-sm  xs:px-4 xs:text-[14px] md:text-[19px] sm:px-6 font-semibold">
                  CREDITS
                </div>
              </div>
            </div>
            <div className="h-[2px] w-full bg-gray-300"></div>
            {Players.map((player) => (
              <React.Fragment key={player.player_id}>
                <div className="grid grid-cols-[1.5fr_1fr] lg:grid-cols-[1.7fr_1fr]">
                  <div
                    className="flex"
                    onClick={() => handlePlayerClick(player.player_id)}
                  >
                    <div className="pl-2">
                      <img
                        src={player.image}
                        className="h-[4rem] w-[4rem] lg:h-[5rem] lg:w-[5rem]"
                        alt="Description"
                      />
                    </div>
                    <div className="flex flex-col justify-center px-2">
                      <div className="text-[14px] xs:text-[15px] md:text-[19px] text-gray-800 font-bold">
                        {player.name}
                      </div>
                      <div className="text-[12px] xs:text-[13px] md:text-[17px] text-gray-500 font-semibold">
                        Sel by 1.59%
                      </div>
                      <div className="flex text-[10px] xs:text-[11px] md:text-[15px] items-center">
                        <div className="bg-[#332054] rounded-full h-[6px] w-[6px]"></div>
                        <div className="text-[#332054] ml-1">
                          Played last match
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-evenly items-center">
                    <div className="lg:text-[20px]">29</div>
                    <div className="lg:text-[20px]">9.0</div>
                    <div>
                      {selectedPlayers.includes(player.player_id) ? (
                        <CgRemove
                          color="red"
                          size={iconSize}
                          onClick={() =>
                            togglePlayerSelection(player.player_id)
                          }
                          className="cursor-pointer"
                        />
                      ) : selectedPlayers.length < 11 ? (
                        <CgAdd
                          color="green"
                          size={iconSize}
                          onClick={() =>
                            togglePlayerSelection(player.player_id)
                          }
                          className="cursor-pointer"
                        />
                      ) : (
                        <CgAdd
                          color="gray"
                          size={iconSize}
                          className="cursor-pointer"
                          disabled
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Transitioned Box */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedPlayerId === player.player_id
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <div className="pl-2 py-2 bg-gray-100 border-t-2 border-gray-300">
                    {/* Dummy Content */}
                    <p>This is the expanded content for {player.name}.</p>
                  </div>
                </div>

                <div className="h-[1px] bg-gray-300"></div>
              </React.Fragment>
            ))}
            {Players2.map((player) => (
              <React.Fragment key={player.id}>
                <div className="grid grid-cols-[1.5fr_1fr] lg:grid-cols-[1.7fr_1fr]">
                  <div
                    className="flex"
                    onClick={() => handlePlayerClick(player.player_id)}
                  >
                    <div className="pl-2">
                      <img
                        src={player.image}
                        className="h-[4rem] w-[4rem] lg:h-[5rem] lg:w-[5rem]"
                        alt="Description"
                      />
                    </div>
                    <div className="flex flex-col justify-center px-2">
                      <div className="text-[14px] xs:text-[15px] md:text-[19px] text-gray-800 font-bold">
                        {player.name}
                      </div>
                      <div className="text-[12px] xs:text-[13px] md:text-[17px] text-gray-500 font-semibold">
                        Sel by 1.59%
                      </div>
                      <div className="flex text-[10px] xs:text-[11px] md:text-[15px] items-center">
                        <div className="bg-[#332054] rounded-full h-[6px] w-[6px]"></div>
                        <div className="text-[#332054] ml-1">
                          Played last match
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-evenly items-center">
                    <div className="lg:text-[20px]">29</div>
                    <div className="lg:text-[20px]">9.0</div>
                    <div>
                      {selectedPlayers.includes(player.player_id) ? (
                        <CgRemove
                          color="red"
                          size={iconSize}
                          onClick={() =>
                            togglePlayerSelection(player.player_id)
                          }
                          className="cursor-pointer"
                        />
                      ) : selectedPlayers.length < 11 ? (
                        <CgAdd
                          color="green"
                          size={iconSize}
                          onClick={() =>
                            togglePlayerSelection(player.player_id)
                          }
                          className="cursor-pointer"
                        />
                      ) : (
                        <CgAdd
                          color="gray"
                          size={iconSize}
                          className="cursor-pointer"
                          disabled
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Transitioned Box */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedPlayerId === player.player_id
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{ transitionProperty: "max-height, opacity" }}
                >
                  <div className="pl-2 py-2 bg-gray-100 border-t-2 border-gray-300">
                    {/* Dummy Content */}
                    <p>This is the expanded content for {player.name}.</p>
                  </div>
                </div>

                <div className="h-[1px] bg-gray-300"></div>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Joined;
