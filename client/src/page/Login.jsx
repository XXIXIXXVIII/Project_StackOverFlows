import logo from "../assets/stackoverflow-color-icon.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import loadingPacman from '../assets/iconLoading/loadingPacman.svg'
import iconWrong from '../assets/iconLoading/iconWrong.png'

import { Link, useNavigate } from "react-router-dom";
import LoginWithGmail from "../component/LoginWithGmail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/authSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {currentUser, isFetching, error} = useSelector((state) =>state.auth.login) 

  const handleLogin = async () => {
    dispatch(loginRedux({ username, password }));

  };
console.log(error);
console.log("object",isFetching);
useEffect(()=>{
  if(currentUser){
    navigate("/")
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[currentUser])

  return (
    <div className="min-h-screen bg-[hsl(210,8%,95%)] pt-16">
      <div className="w-[280px] mx-auto flex flex-col items-center justify-center gap-2">
        <Link to={"/"}>
          <img src={logo} className="w-16" />
        </Link>
        <div className="w-full">
          <LoginWithGmail />
        </div>
        <div className="w-full bg-white rounded-md shadow-lg shadow-slate-500 mt-4">
          <div className="w-[80%] py-4 mx-auto relative">
            <label
              className="block text-grey-darker text-sm font-medium mb-2"
              htmlFor="UserName"
            >
              UserName
            </label>
            <input
            style={{border:error&& "1px solid hsl(358,62%,52%) "}}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow w-full appearance-none border border-[hsl(210,8%,75%)] rounded  py-1 px-3 text-grey-darker"
              id="UserName"
              type="text"
            />
            {error&&<span className="text-[hsl(358,62%,52%)] text-xs">The email is not a valid email address.</span>}
            {error&&<div className="absolute right-2 top-[52px]"><img src={iconWrong}/></div>}
          </div>

          <div className="mb-4 w-[80%] mx-auto">
            <div className="flex justify-between mb-2 items-center">
              <label
                className="block text-grey-darker text-sm font-medium "
                htmlFor="Password"
              >
                Password
              </label>
              <div>
                <span className="text-blue-600 text-sm font-normal">
                  Forgot password?
                </span>
              </div>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="shadow w-full appearance-none border border-[hsl(210,8%,75%)] rounded  py-1 px-3 text-grey-darker"
              id="Password"
              type="text"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-400 hover:bg-blue-600 rounded text-white my-5 items-center"
            >
            {!isFetching? <div className="py-2">Login</div>:<div className="w-[30px] flex items-center  gap-2 mx-auto"> Login <img src={loadingPacman}/></div> }
             
            </button>
          </div>
        </div>
        <div className="text-[13px] py-10 flex flex-col justify-center items-center gap-4 w-full">
          <div>
            <span className="mr-2">Don’t have an account?</span>
            <Link to={"/signup"} className="text-blue-500 hover:text-blue-600">
              Sign up
            </Link>
          </div>
          <div className="flex">
            <span className="mr-2">Are you an employer?</span>
            <Link className="text-blue-500 hover:text-blue-600 flex gap-2 items-center">
              Sign up on Talent <FaExternalLinkAlt className="text-blue-700" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
