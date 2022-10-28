import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from './../../ContextProvider/ContextProvider';
import { toast } from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const [error, setError] = useState("");

  const { signIn, setLoading , googleSignIN } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handlegoogleSignIn = event => {
    event.preventDefault();
    const provider = new GoogleAuthProvider()
    googleSignIN(provider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error('please verify your email')
        }
    })
    .catch((error) => setError(error.message))
    .finally(() => {
        setLoading(false);
      });
    }
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error('please verify your email')
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={ handleSignIn} className="bg-orange-400 ">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse overflow-x-hidden lg:overflow-auto lg:mr-20">
          <div className=" lg:w-5/12 w-4/12 -my-10   rounded-xl h-34 shadow-2xl hidden lg:block">
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
          <div className="card lg:flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:mx-auto lg:mt-0 lg:mb-0 mt-24 mb-60 mx-3">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
               <div className="mt-5">
               <p className="text-red-500">{error}</p>
                <Link to='/register'>Do not have accout?</Link>
               </div>
               
    
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary my-3">Login</button>
                <button onClick={ handlegoogleSignIn} className="btn btn-primary"><FaGoogle className="mx-2"></FaGoogle>Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};



export default Login;
