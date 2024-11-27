import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (<>
        <div className="bg-[linear-gradient(120deg,_#AC242D,_#5A0D13)] h-[43vh] md:h-[75vh]">
            <div className='flex w-full justify-center'>
                <img
                    src="/Dream11_logo.svg"
                    alt=""
                    className="m-4 h-7 md:h-12"
                    style={{ filter: 'brightness(0) invert(1)' }}
                />
                <img src="/profile-user.png" alt="" className='m-3 h-9 md:h-12 absolute left-0' style={{ filter: 'brightness(0) invert(1)' }} />
            </div>

            <div className='flex w-full justify-center items-center font-custom text-white  text-lg'>
                <div className=" mr-1 h-0.5 md:h-1 w-[50px] md:w-[20%] bg-gradient-to-l from-white to-transparent rounded-full"></div>
                <div className=' font-custom text-white  text-lg md:text-2xl'>UPCOMING CRICKET MATCHES</div>
                <div className=" ml-1 h-0.5 md:h-1 w-[50px] md:w-[20%] bg-gradient-to-r from-white to-transparent rounded-full"></div>
            </div>
        </div>
        <div className="w-[90%] md:w-[75%] h-[80%] bg-white absolute top-[15%] md:top-[20%] left-1/2 transform -translate-x-1/2 rounded-2xl px-4 md:px-10">
            <div className=" w-full bg-gradient-to-r from-[#FEFEFE] via-[#F8F9FB] to-[#FEFEFE] rounded-t-2xl text-sm md:text-md text-center font-bold text-gray-400 p-2"> Australia vs Pakistan T20I</div>

            <div className='flex justify-between my-5'>
                <div>
                    <div className='flex flex-row items-center'>
                        <img
                            src="https://imgs.search.brave.com/8XQRTHnaPQrwFCraOWhqSUt-8IRJB9FbwPQHjpEVsfw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzkyLzExLzEw/LzM2MF9GXzY5MjEx/MTA2OV9OdEdveG5Q/eFdvRUpsQnl5TTBy/TFE4dGdpYVgySzM0/OS5qcGc"
                            alt="Badge"
                            className="w-10 h-10 md:w-[100px] md:h-[100px] object-cover rounded-full shadow-md shadow-gray-700"
                        />
                        <div className=' pl-2 md:pl-4'>
                            <div className='text-2xl md:text-[40px] font-custom font-bold text-gray-700'>
                                AUS
                            </div>
                            <p className='pt-1 font-semibold text-gray-500 hidden md:block'>Australia</p>
                        </div>
                    </div>
                    <p className='pt-1 text-sm font-semibold text-gray-500 md:hidden'>Australia</p>
                </div>
                <div>
                    <div className='flex flex-row items-center'>
                        <div className=' pr-2 md:pr-4'>
                            <div className='text-right text-2xl md:text-[40px] font-custom font-bold text-gray-700'>
                                PAK
                            </div>
                            <p className='text-right pt-1 font-semibold text-gray-500 hidden md:block'>Pakistan</p>
                        </div>
                        <img
                            src="https://cdn.britannica.com/46/3346-050-DE92F66A/flag-symbolism-Pakistan-design-Islamic.jpg"
                            alt="Badge"
                            className="w-10 h-10 md:w-[100px] md:h-[100px] object-cover rounded-full shadow-md shadow-gray-700"
                        />
                    </div>
                    <p className='text-right pt-1 text-sm font-semibold text-gray-500 md:hidden'>Pakistan</p>
                </div>
            </div>
            <div className='flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 top-[10%] md:top-[12%]'>
                <div className='text-center text-gray-500 text-[11px] md:text-lg inline'>Match starts in</div>
                <div className='text-center w-[65%] py-0.5 text-[12px] md:text-base font-bold bg-red-100 text-red-600 rounded-full'>36h</div>
            </div>

            <div className='bg-[linear-gradient(30deg,_#ECDB87,_#DFE1E2,_#DFE1E2,_#DFE1E2)]  w-full rounded-[20px] p-0.5'>
                <div className='w-full h-full bg-white rounded-[18px] p-2'>
                    <div className='bg-[linear-gradient(30deg,_#FFF4B5,_#FFFFFF,_#FFFFFF,_#FFFFFF,_#FFFFFF)] w-full h-full rounded-[14px] p-2'>

                        <div className='flex justify-between items-end pb-5 md:pb-[40px]'>
                            <div>
                                <p className='font-bold text-gray-400 text-sm md:text-lg'>Price Pool</p>
                                <p className=' font-extrabold text-gray-800 text-2xl md:text-[40px]'>₹1.26 Lakhs</p>
                            </div>
                            <div className='text-right flex flex-col justify-end'>
                                <p className='font-bold text-gray-400 text-sm md:text-lg'>1st Price</p>
                                <p className=' font-extrabold text-gray-800 text-base md:text-[30px]'>₹300</p>
                            </div>
                        </div>

                        <div className='w-full h-1 md:h-3 bg-red-300 rounded-full'>
                            <div className='w-1/3 h-full bg-[linear-gradient(90deg,_#A3212A,_#8D1B23)] rounded-full'></div>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-gray-600 text-xs md:text-base mt-1 md:mt-2'><span className='font-bold'>1,518</span> spots left</p>
                            <p className='text-gray-600 text-xs md:text-base mt-1 md:mt-2'><span className='font-bold'>2,000</span> spots</p>
                        </div>

                        <div className='mt-[45px] md:mt-[70px] mb-2 md:m-2 flex justify-between items-center'>
                            <div className='flex flex-col'>
                                <div className='text-gray-500 text-sm md:text-base'>Join for</div>
                                <div className='font-extrabold text-[#5D4604]  md:text-2xl'>₹75</div>
                            </div>
                            <Link to="/join" className='p-2 text-center w-[65%] bg-green-600 rounded-lg font-custom text-white  text-lg md:text-2xl'>JOIN NOW</Link>
                        </div>

                    </div>
                </div>
            </div>
            <Link to="/matches">
            <button className="left-1/2 transform -translate-x-1/2 relative bg-gray-300 text-gray-500 text-sm font-semibold py-2 px-4 clip-path-trapezium">
                View all contests
            </button></Link>
        </div>

        <Link to='/matches' className='pb-[70px] w-[90%] md:w-[75%] absolute top-[75%] md:top-[105%] left-1/2 transform -translate-x-1/2'>
            <div className=' bg-gray-50 shadow-md shadow-gray-400 rounded-xl p-4 text-center text-xl font-bold text-gray-700'>All Upcoming Matches</div>
        </Link>

    </>
    );
}

export default Home
