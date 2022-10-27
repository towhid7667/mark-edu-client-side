import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Login = () => {
    return (
        <div className='bg-orange-400 '>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
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
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;