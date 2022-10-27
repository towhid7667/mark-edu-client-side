import React from "react";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Home = () => {
  return (
    <div className="flex items-center justify-center bg-orange-400 px-20 mx-auto h-screen  drop-shadow">
      <div className="lg:flex lg:flex-col items-center gap-5">
        <p className="text-white  font-bold text-center  text-7xl">
          <span className="text-[80px]">GET ONE FREE</span> <br />{" "}
          <span className="text-[60px]">
           MONTH OF <span className="text-blue-700 font-bold text-[80px]">MARK EDU</span>
          </span>
        </p>
        <Link to='/register' className=" bg-white py-3 px-5 text-1xl text-blue-700 font-bold rounded-lg mx-3 hover:bg-slate-200">REGISTER</Link>
      </div>
      <div className=" w-5/12 -my-10  rounded-xl h-34 mx-auto shadow-2xl">
      <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper rounded-2xl"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
};

export default Home;
