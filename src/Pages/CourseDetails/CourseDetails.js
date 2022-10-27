import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { id, title, description, Instructor, img, price} = courseDetails;
  return (
    <div className="bg-orange-400">
      <div className="hero min-h-screen text-gray-100 text-center">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <h1 className="text-2xl font-bold">{Instructor}</h1>
            <p className="py-6">{description}</p>
            <button className="py-2 px-5 border-2 rounded-lg text-xl font-bold">{price}</button>
            <Link className=" bg-white py-4 px-5 text-1xl text-blue-700 font-bold rounded-lg mx-3 hover:bg-slate-200">REGISTER</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
