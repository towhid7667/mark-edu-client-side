import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-orange-400 drop-shadow">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src="https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="max-w-sm rounded-lg shadow-2xl"
          alt=""/>
          <div className="w-5/12">
            <h1 className="text-5xl font-bold text-white uppercase">Membership With Meaning</h1>
            <p className="py-6 text-justify text-white">
            With so much to explore, real projects to create, and the support of fellow-creatives, Skillshare’s online learning platform empowers you to learn new skills and accomplish real growth.
            </p>
            <Link to = '/courses' className=" bg-white py-3 px-5 text-1xl text-blue-700 font-bold rounded-lg mx-3 hover:bg-slate-200">EXPLORE COURSES</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
