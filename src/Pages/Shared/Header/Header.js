import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../../ContextProvider/ContextProvider";
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-orange-400 z-50 lg:z-0 absolute lg:static">
      <div className="navbar  bg-orange-400 drop-shadow-2xl">
        <div className="navbar-start bg-orange-400">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden bg-orange-400">
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
              className="menu menu-compact dropdown-content mt-3 p-2 bg-orange-400 text-white shadow rounded-box w-52 font-semibold z-[100] absolute"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/courses" className="justify-between">
                  Courses
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </Link>
              </li>
              <li>
                <Link to='/blogs'>Blog</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case lg:text-xl text-[15px] font-bold ">
            <span className="bg-white px-3 py-2 rounded-lg font-bold text-blue-700">
              Mark
            </span>
            <span className="text-white mx-1">EDU</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:text-white font-semibold">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to='/blogs'>Blog</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-2">
          {user?.uid ? (
            <>
            {user?.photoURL? (<img className="h-10 mx-2" src={user.photoUrl} alt="" />) :(<FaUser className="mx-2"></FaUser>)}

              <span className="text-white font-semibold text-[10px] ">{user.email}</span>
              <button onClick={handleSignOut}  className=" bg-white py-2 lg:px-4 lg:text-1xl px-3 text-[12px] text-blue-700 font-bold rounded-lg lg:mx-3 mx-1 hover:bg-slate-200">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className=" bg-white py-2 lg:px-4 lg:text-1xl px-3 text-[12px] text-blue-700 font-bold rounded-lg lg:mx-3 mx-1 hover:bg-slate-200"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                className=" bg-white py-2 lg:px-4 lg:text-1xl px-3 text-[12px] text-blue-700 font-bold rounded-lg lg:mx-3 mx-1 hover:bg-slate-200"
              >
                REGISTER
              </Link>
            </>
          )}

          <input type="checkbox" className="toggle border-none" />
          
        </div>
      </div>
    </div>
  );
};

export default Header;
