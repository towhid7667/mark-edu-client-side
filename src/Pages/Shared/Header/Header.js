import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="navbar  bg-orange-400 drop-shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shado text-white rounded-box w-52 font-semibold"
            >
              <li>
               <Link>Home</Link>
              </li>
              <li tabIndex={0}>
               <Link className="justify-between">
                  Courses
                </Link> 
              </li>
              <li>
               <Link>Blog</Link>
              </li>
              <li>
               <Link>FAQ</Link>
              </li>
            </ul>
          </div>
         <Link className="btn btn-ghost normal-case text-xl font-bold "><span className="bg-white px-3 py-2 rounded-lg font-bold text-blue-700">Mark </span><span className="text-white mx-1">EDU</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:text-white font-semibold">
          <ul className="menu menu-horizontal p-0">
            <li>
             <Link>Home</Link>
            </li>
            <li tabIndex={0}>
             <Link>Courses</Link>
             
            </li>
            <li>
             <Link>Blog</Link>
            </li>
            <li>
             <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
         <Link className=" bg-white py-2 px-4 text-1xl text-blue-700 font-bold rounded-lg mx-3 hover:bg-slate-200">LOGIN</Link>
         <Link className=" bg-white py-2 px-4 text-1xl text-blue-700 font-bold rounded-lg mx-3 hover:bg-slate-200">REGISTER</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
