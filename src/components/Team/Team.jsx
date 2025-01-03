import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

function Team() {
    const location = useLocation();
    const { Players, Players2, selectedPlayers } = location.state || {};

    // Combine Players and Players2
    const allPlayers = [...(Players || []), ...(Players2 || [])];

    console.log(allPlayers);
    // Filter selected players based on selectedPlayers array
    const selectedTeam = allPlayers.filter((player) =>
        selectedPlayers?.includes(player.player_id)
    );

    return (
        <div className="box-border">
            {/* Navbar */}
            <div className="bg-[linear-gradient(120deg,_#AC242D,_#5A0D13)] flex items-center">
                <Link to="/">
                    <IoMdArrowBack className="text-white m-2 text-2xl" />
                </Link>
                <div className="text-white md:text-[25px] font-semibold p-4 text-center">
                    Team Players
                </div>
            </div>

            {/* Content */}
            <div className="bg-gradient-to-b from-red-500 to-gray-900 min-h-screen py-10 px-4">
                <div className="text-center mb-8">
                    <h1 className="text-white text-xl md:text-3xl font-bold">Selected Players</h1>
                    <p className="text-gray-300 text-sm md:text-lg">
                        Here's your selected playing XI for the match!
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    {selectedTeam.length > 0 ? (
                        selectedTeam.map((player, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-2 flex flex-col items-center w-[45%] sm:w-[30%] md:w-[20%] lg:w-[16%]"
                            >
                                <img
                                    src={player.image || "https://static.cricbuzz.com/a/img/v1/152x152/i1/c182026/sai-sudharsan.jpg"}
                                    alt={player.name}
                                    className="h-14 w-14 md:h-16 md:w-16 rounded-full shadow-sm object-cover mb-2"
                                />
                                <h3 className="text-xs md:text-sm font-bold text-gray-800 text-center">
                                    {player.name}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 text-center">
                                    {player.role}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-lg text-center">
                            No players selected for this match.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Team;
