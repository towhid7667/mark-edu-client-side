import React from 'react';
import { Link } from 'react-router-dom';


const Course = ({course}) => {
    const {id, title, description, Instructor, img, price} = course;
    return (
        <div>
            <div className="card w-12/12 h-auto bg-orange-400 shadow-2xl">
  <figure><img  src={img} alt="" className='h-64  p-5 rounded-lg'/></figure>
  <div className="card-body">
    <h2 className="card-title text-white">
     {title}
      <div className="badge badge-error text-white p-4">{Instructor}</div>
    </h2>
    <p className='text-justify text-slate-100'>{description.slice(0, 110) + '...'} <Link className='text-blue-700 font-bold'>Readmore</Link></p>
    <div className="card-actions justify-around">
      <div className=" bg-white py-2 px-5 text-1xl text-blue-700 font-bold rounded-lg mx-3">{price}</div> 
      <Link className=" bg-white py-2 px-3 text-1xl text-blue-700 font-bold rounded-lg mx-3 hover:bg-slate-200 uppercase">See details</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;