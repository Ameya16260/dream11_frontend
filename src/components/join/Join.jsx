import React from "react";
import { CgAdd } from "react-icons/cg";
import { CgRemove } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import image from "../../assets/a.avif";
function Join() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [SelectedPlayersCount, setSelectedPlayersCount] = useState(0);
  useEffect(() => {
    console.log("Selected Players:", selectedPlayers);
  }, [selectedPlayers]);
  const players = [
    { id: 1, name: "Player 1", team: 1 },
    { id: 2, name: "Player 2", team: 2 },
    { id: 3, name: "Player 3", team: 1 },
    { id: 4, name: "Player 4", team: 2 },
    { id: 5, name: "Player 5", team: 1 },
    { id: 6, name: "Player 6", team: 2 },
    { id: 7, name: "Player 7", team: 1 },
    { id: 8, name: "Player 8", team: 2 },
    { id: 9, name: "Player 9", team: 1 },
    { id: 10, name: "Player 10", team: 2 },
    { id: 11, name: "Player 11", team: 1 },
    { id: 12, name: "Player 12", team: 2 },
    { id: 13, name: "Player 13", team: 1 },
    { id: 14, name: "Player 14", team: 2 },
    { id: 15, name: "Player 15", team: 1 },
    { id: 16, name: "Player 16", team: 2 },
    { id: 17, name: "Player 17", team: 1 },
    { id: 18, name: "Player 18", team: 2 },
    { id: 19, name: "Player 19", team: 1 },
    { id: 20, name: "Player 20", team: 2 },
    { id: 21, name: "Player 21", team: 1 },
    { id: 22, name: "Player 22", team: 2 },
  ];
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
  const [expandedPlayerId, setExpandedPlayerId] = useState(null);

  const handlePlayerClick = (playerId) => {
    setExpandedPlayerId((prev) => (prev === playerId ? null : playerId)); // Toggle expansion
  };
  return (
    <div className="w-screen border-2 border-black box-border">
      <div
        className="pb-2 sm:pb-4"
        style={{
          background:
            "linear-gradient(170deg, red 0px, black 50px, #18181b 100%)",
        }}
      >
        <div className="flex justify-between px-6 py-2 sm:py-4 sm:px-8">
          <div className="">
            <div className="text-white text-[15px] xs:text-[17px] md:text-[22px] lg:text-[30px] lg:ml-5">
              Create Team{" "}
            </div>
            <div className="text-gray-300 text-[12px] xs:text-[14px] md:text-[19px] lg:text-[24px] lg:ml-5">
              36h left
            </div>
          </div>
          <div className="text-white flex items-start py-2">
            {/* <div className="bg-[#212338] text-[13px] font-bold text-white px-2 py-1 rounded-md"></div> */}
            <div className="text-white"></div>
          </div>
        </div>
        <div className="text-white text-center text-[13px] xs:text-[17px] font-semibold md:text-[21px] lg:text-[27px]">
          Maximum of 10 players from one team
        </div>
        <div className="flex justify-center my-2 lg:my-4">
          <div className="grid grid-cols-2 w-[55%] sm:w-[50%] lg:w-[30%]">
            <div className="flex border-0 border-white">
              <div className="p-1  ">
                <img
                  src="https://imgs.search.brave.com/8XQRTHnaPQrwFCraOWhqSUt-8IRJB9FbwPQHjpEVsfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEw/LzM2MF9GXzY5MjEx/MTA2OV9OdEdveG5Q/eFdvRUpsQnl5TTBy/TFE4dGdpYVgySzM0/OS5qcGc"
                  alt="Badge"
                  className=" w-[2.8rem] h-[2.8rem] xs:w-[3.2rem] xs:h-[3.2rem] sm:w-[4.5rem] sm:h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-cover border-[2px] border-white rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center border-0 border-cyan-500">
                <div className="text-white text-[12px] xs:text-[14px] px-1 md:text-[17px] lg:text-[19px]">
                  AUS
                </div>
                <div className="text-[17px] xs:text-[19px] md:text-[23px] lg:text-[25px] font-bold text-white text-left px-1">
                  0
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse border-0 border-white">
              <div className="p-1  ">
                <img
                  src="https://imgs.search.brave.com/8XQRTHnaPQrwFCraOWhqSUt-8IRJB9FbwPQHjpEVsfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEw/LzM2MF9GXzY5MjEx/MTA2OV9OdEdveG5Q/eFdvRUpsQnl5TTBy/TFE4dGdpYVgySzM0/OS5qcGc"
                  alt="Badge"
                  className=" w-[2.8rem] h-[2.8rem]  xs:w-[3.2rem] xs:h-[3.2rem] sm:w-[4.5rem] sm:h-[4.5rem] md:w-[5.5rem] md:h-[5.5rem] object-cover border-[2px] border-white rounded-full "
                />
              </div>
              <div className="flex flex-col justify-center border-0 border-cyan-500">
                <div className="text-white text-[12px] xs:text-[14px] md:text-[17px] lg:text-[19px] px-1">
                  AUS
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
      <div className="">
        <div className="grid grid-cols-2">
          <div className="flex p-3 md:px-3">
            <div className="text-gray-800 font-semibold text-[13px] xs:text-[14px] md:text-[19px]">
              SELECTED BY
            </div>
          </div>
          <div className="flex justify-around p-3  xs:justify-center  ">
            <div className="text-gray-800 text-[13px] xs:px-4 xs:text-[14px] md:text-[19px] sm:px-6 font-semibold">
              POINTS
            </div>
            <div className="text-gray-800 text-[13px]  xs:px-4 xs:text-[14px] md:text-[19px] sm:px-6 font-semibold">
              CREDITS
            </div>
          </div>
        </div>
        <div className="border-[0.5px] border-gray-500"></div>
        {players.map((player) => (
          <React.Fragment key={player.id}>
            <div className="grid grid-cols-[1.5fr_1fr] lg:grid-cols-[1.7fr_1fr]">
              <div
                className="flex"
                onClick={() => handlePlayerClick(player.id)}
              >
                <div className="pl-2">
                  <img
                    src={image}
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
                    <div className="text-[#332054] ml-1">Played last match</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="lg:text-[20px]">29</div>
                <div className="lg:text-[20px]">9.0</div>
                <div>
                  {selectedPlayers.includes(player.id) ? (
                    <CgRemove
                      color="red"
                      size={iconSize}
                      onClick={() => togglePlayerSelection(player.id)}
                      className="cursor-pointer"
                    />
                  ) : selectedPlayers.length < 11 ? (
                    <CgAdd
                      color="green"
                      size={iconSize}
                      onClick={() => togglePlayerSelection(player.id)}
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
                expandedPlayerId === player.id
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

            <div className="border-[1px] border-gray-300"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Join;
