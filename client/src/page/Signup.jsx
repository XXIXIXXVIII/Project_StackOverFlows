import { RiQuestionnaireFill, RiArrowUpDownFill } from "react-icons/ri";
import { AiFillTags } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import LoginWithGmail from "../component/LoginWithGmail";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupRedux } from "../redux/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const key = import.meta.env.VITE_KEY_CAPCHA;
  const [disable, setIsDisable] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [displayname, setDisplayName] = useState(true);
  const [username, setUsername] = useState(true);
  const [password, setPassword] = useState(true);
  const [withWindown, setWithWindown] = useState(2000);
  const dispatch = useDispatch();
  const onCapcha = () => {
    setIsDisable(false);
  };
  const navigate = useNavigate()

  const { currentUser, isFetching, error } = useSelector(
    (state) => state.auth.login
  );

  console.log(currentUser, isFetching, error);

  useEffect(() => {
    const handleResize = () => {
      setWithWindown(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (withWindown >= 800) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [withWindown]);

  const handleSignup = () => {
    dispatch(signupRedux({ displayname, username, password }));
  };

  useEffect(()=>{
    if(currentUser){
      navigate("/")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser])

  return (
    <div className="bg-[hsl(210,8%,95%)] pt-5 min-h-screen min-x-screen">
      <div className="w-[420px] md:w-[780px] mx-auto flex-col flex md:flex-row gap-12 items-center">
        {!isMobile ? (
          <div className="w-[421px]">
            <h2 className="text-[27px]">Join the Stack Overflow community</h2>
            <ul className="text-[15px] flex flex-col gap-5 mt-8 ml-2">
              <li className="flex gap-2">
                <RiQuestionnaireFill size={28} className="text-blue-500" /> Get
                unstuck — ask a question
              </li>
              <li className="flex gap-2">
                <RiArrowUpDownFill size={28} className="text-blue-500" /> Unlock
                new privileges like voting and commenting
              </li>
              <li className="flex gap-2">
                <AiFillTags size={28} className="text-blue-500" /> Save your
                favorite questions, answers, watch tags, and more
              </li>
              <li className="flex gap-2">
                <TfiCup size={28} className="text-blue-500" /> Earn reputation
                and badges
              </li>
            </ul>
            <div className="text-xs mt-8">
              <span className="text-gray-500">
                Collaborate and share knowledge with a private group for FREE.
              </span>
              <span className="text-blue-500">
                Get Stack Overflow for Teams free for up to 50 users.
              </span>
            </div>
          </div>
        ) : (
          <div className="w-[420px]">
            <h2 className="text-[21px] text-center">
              Create your Stack Overflow account. It’s free and only takes a
              minute.
            </h2>
          </div>
        )}
        <div className="mx-auto md:flex-1 w-[300px]">
          <LoginWithGmail />
          <div className="mx-auto w-full bg-white rounded shadow-lg shadow-slate-500 mt-5 pb-5">
            <div className="w-[80%] mx-auto py-5 ">
              {error && (
                <div className="mb-2">
                  <span className="text-xs text-[hsl(358,62%,52%)]">
                    {error}
                  </span>
                </div>
              )}
              <div className="w-full py-1 mx-auto">
                <label
                  className="block text-grey-darker text-sm font-medium mb-2 cursor-pointer"
                  htmlFor="DisplayName"
                >
                  Display name
                </label>
                <input
                  className="shadow w-full appearance-none border border-[hsl(210,8%,75%)] rounded  py-1 px-3 text-grey-darker"
                  id="DisplayName"
                  type="text"
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <div className="w-full py-1 mx-auto">
                <label
                  className="block text-grey-darker text-sm font-medium mb-2 cursor-pointer"
                  htmlFor="UserName"
                >
                  UserName
                </label>
                <input
                  className="shadow w-full appearance-none border border-[hsl(210,8%,75%)] rounded  py-1 px-3 text-grey-darker"
                  id="UserName"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="w-full py-1 mx-auto">
                <label
                  className="block text-grey-darker text-sm font-medium mb-2 cursor-pointer"
                  htmlFor="Password"
                >
                  Password
                </label>
                <input
                  className="shadow w-full appearance-none border border-[hsl(210,8%,75%)] rounded  py-1 px-3 text-grey-darker"
                  id="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-gray-500 font-light w-full text-[12px] mt-1">
                <span>
                  Passwords must contain at least eight characters, including at
                  least 1 letter and 1 number.
                </span>
              </div>
            </div>
            <div className="w-full ml-1">
              <ReCAPTCHA sitekey={key} onChange={onCapcha} />
            </div>
            <button
              onClick={handleSignup}
              disabled={disable}
              style={{ opacity: disable ? "0.5" : "1" }}
              className="w-[80%] mx-auto block py-2 bg-blue-500 hover:bg-blue-600 rounded text-white my-5"
            >
              Sign Up
            </button>
          </div>
          <div className="text-sm mt-10 flex flex-col text-center gap-3 my-20">
            <div>Already have an account? <Link className="text-[hsl(206,100%,40%)]" to={'/login'}>Log in</Link></div>
            <div>Are you an employer?<Link className="text-[hsl(206,100%,40%)]"> Sign up on Talent </Link>  </div>
          </div>
        </div>
      </div>
    </div>
  );
}
