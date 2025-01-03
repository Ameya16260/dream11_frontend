import { BiCricketBall } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

function Home() {
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
                <div className="w-full">
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={40} // Adjust height as per your padding and content
                        className="rounded-t-2xl"
                        sx={{
                            background: "linear-gradient(to right, #FEFEFE, #F8F9FB, #FEFEFE)",
                        }}
                    />
                </div>

                <div className="flex justify-between my-5">
                    {/* Left Side */}
                    <div className="w-[40%] flex flex-col items-start">
                        <div className="flex flex-row items-center">
                            <Skeleton
                                variant="circular"
                                sx={{
                                    height: { xs: "40px", md: "85px" }, // `h-10` (40px) for small screens, `md:h-[85px]` for medium screens
                                    width: { xs: "40px", md: "85px" }, // `w-10` (40px), `md:w-[85px]`
                                    aspectRatio: "1 / 1", // `aspect-square`
                                    borderRadius: "50%", // `rounded-full`
                                    objectFit: "cover", // `object-cover`
                                }}
                            />

                            <div className="pl-2 md:pl-4">
                                {/* Skeleton for the hidden paragraph */}
                                <Skeleton
                                    variant="text"
                                    // Adjust width based on the length of the text "CSK"
                                    // Height to mimic a typical line of text
                                    className="hidden md:block"
                                    sx={{ fontSize: "3rem", backgroundColor: "#E5E7EB", height: { xs: "30px", md: "55px" }, width: 50 }} // Match text style and color
                                />
                                <div className="hidden md:block">
                                    <Skeleton
                                        variant="text"
                                        // Adjust width to approximate the placeholder text length
                                        height={18} // Matches a small text line
                                        className="md:hidden"
                                        sx={{ fontSize: "0.875rem", backgroundColor: "#E5E7EB", height: "30px", width: { xs: "100px", md: "150px" } }} // Matches text-sm and color
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pt-1 md:hidden">
                            {/* Skeleton for the hidden paragraph */}
                            <Skeleton
                                variant="text"
                                width={100} // Adjust width to approximate the placeholder text length
                                height={18} // Matches a small text line
                                className="md:hidden"
                                sx={{ fontSize: "0.875rem", backgroundColor: "#E5E7EB" }} // Matches text-sm and color
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-[40%] flex flex-col items-end">
                        <div className="flex flex-row items-center ">
                            <div className="pr-2 md:pr-4 flex flex-col items-end">
                                {/* Skeleton for the hidden paragraph */}
                                <Skeleton
                                    variant="text"
                                    // Adjust width based on the length of the text "CSK"
                                    // Height to mimic a typical line of text
                                    className="hidden md:block"
                                    sx={{ fontSize: "3rem", backgroundColor: "#E5E7EB", height: { xs: "30px", md: "55px" }, width: 50 }} // Match text style and color
                                />
                                <div className="hidden md:block">
                                    <Skeleton
                                        variant="text"
                                        // Adjust width to approximate the placeholder text length
                                        height={18} // Matches a small text line
                                        className="md:hidden"
                                        sx={{ fontSize: "0.875rem", backgroundColor: "#E5E7EB", height: "30px", width: { xs: "100px", md: "150px" } }} // Matches text-sm and color
                                    />
                                </div>
                            </div>
                            <Skeleton
                                variant="circular"
                                sx={{
                                    height: { xs: "40px", md: "85px" }, // `h-10` (40px) for small screens, `md:h-[85px]` for medium screens
                                    width: { xs: "40px", md: "85px" }, // `w-10` (40px), `md:w-[85px]`
                                    aspectRatio: "1 / 1", // `aspect-square`
                                    borderRadius: "50%", // `rounded-full`
                                    objectFit: "cover", // `object-cover`
                                }}
                            />
                        </div>
                        <div className="pt-1 md:hidden">
                            {/* Skeleton for the hidden paragraph */}
                            <Skeleton
                                variant="text"
                                width={100} // Adjust width to approximate the placeholder text length
                                height={18} // Matches a small text line
                                className="md:hidden"
                                sx={{ fontSize: "0.875rem", backgroundColor: "#E5E7EB" }} // Matches text-sm and color
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-[10%] md:top-[12%] w-[20%]">
                    <div className="text-center text-gray-500 text-[9px] md:text-lg inline">
                        Match starts in
                    </div>
                    <div className="text-center py-0.5 px-1">
                        <Skeleton
                            variant="rectangular"
                            width={60} // Approximate the size of the content
                            height={24} // Matches the size of the rounded button-like div
                            sx={{
                                backgroundColor: "#FEE2E2", // Similar to `bg-red-100`
                                color: "#DC2626", // Simulates `text-red-600`
                                borderRadius: "9999px", // Matches `rounded-full`
                            }}
                        />
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
                                <button
                                    className="p-2 text-center w-[65%] bg-green-600 rounded-lg font-custom text-white  text-lg md:text-2xl"
                                >
                                    JOIN NOW
                                </button>
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
        </>
    );
}

export default Home;
