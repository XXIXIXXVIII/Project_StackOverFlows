import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logoMobile from "../assets/stackoverflow-color-icon.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { LogoStackOverFlow } from "./IconsImg";
import cup from "../assets/iconHeader/cup.png";
import help from "../assets/iconHeader/help.png";
import homthu from "../assets/iconHeader/homthu.png";
import setting from "../assets/iconHeader/setting.png";
import cupDark from "../assets/iconHeader/cupDark.png";
import helpDark from "../assets/iconHeader/helpDark.png";
import homthuDark from "../assets/iconHeader/homthuDark.png";
import settingDark from "../assets/iconHeader/settingDark.png";

// eslint-disable-next-line react/prop-types
export default function HeaderDefauLayout() {
  const currentPath = window.location.pathname;
  const [windownSide, setWindownSide] = useState({
    with: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navBarRef = useRef();

  const [themeMode, setThemeMode] = useState();

  const theme = useSelector((state) => state.theme.themeMode);
  const user = useSelector((state) => state.auth.login.currentUser);

  // useEffect(()=>{

  // },[])

  useEffect(() => {
    setThemeMode(theme);
  }, [theme]);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  useEffect(() => {
    const handleSize = () => {
      setWindownSide({
        with: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    windownSide.with < 850 ? setIsMobile(true) : setIsMobile(false);
  }, [windownSide]);

  useEffect(() => {
    const clickOutSideNavBar = (event) => {
      if (navBarRef.current && !navBarRef.current.contains(event.target))
        setShowMenu(false);
    };
    document.addEventListener("mousedown", clickOutSideNavBar);
    return () => document.removeEventListener("mousedown", clickOutSideNavBar);
  }, []);

  return (
    <div className="dark:bg-[hsl(0,0%,17.5%)] dark:border-[hsl(210,4.5%,30.5%)]  border-b-[1px] dark:text-[hsl(210,7%,78.5%)] border-b-[hsl(210,8%,85%)] sticky top-0 bg-[hsl(0,0%,100%)] z-40">
      <div className="w-[95%] lg:w-[83%] mx-auto flex items-center h-14 text-sm gap-2">
        <div ref={navBarRef} className="flex h-full items-center">

          {currentPath === "/login" ||
          currentPath === "/signup" ||currentPath==="/questions/ask"||
          currentPath === "/" ? (
            <div className="relative h-full ">
              {!user&&<div
                onClick={() => setShowMenu(!showMenu)}
                className="hover:bg-[hsl(210,8%,90%)] z-10 duration-300 h-full px-4 flex items-center cursor-pointer "
              >
                {!showMenu ? (
                  <AiOutlineMenu size={18} />
                ) : (
                  <MdOutlineCancel size={18} />
                )}
              </div>}
              {showMenu && (
                <div className="absolute top-14 bg-[hsl(0,0%,100%)] dark:bg-[hsl(0,0%,17.5%)] w-60">
                  <NavBar />
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
          {!isMobile ? (
            <div className="h-full hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]">
              <Link to={"/"}>
                <LogoStackOverFlow color={theme} />
              </Link>
            </div>
          ) : (
            <div className="h-full px-4 flex items-center">
              <img className="h-full" src={logoMobile} />
              <Link className="text-xs">Products</Link>
            </div>
          )}
          {!isMobile ? (
            <nav className="text-[hsl(210,8%,35%)] dark:text-[hsl(210,7%,78.5%)]">
              <ul className="flex text-xs gap-1 ml-2">
                {!user && (
                  <li className="py-1 px-3 hover:rounded-full hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]">
                    <Link to={"http://localhost:2111/"}>About</Link>
                  </li>
                )}
                <li className="py-1 px-3 hover:rounded-full hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]">
                  <Link>Products</Link>
                </li>
                {!user && (
                  <li className="py-1 px-3 hover:rounded-full hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]">
                    <Link>For Teams</Link>
                  </li>
                )}
              </ul>
            </nav>
          ) : (
            <></>
          )}
        </div>
        <form className="flex items-center flex-1 ml-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded block w-full pl-10 p-2 outline-blue-500 dark:bg-[hsl(0,0%,17.5%)] dark:border-gray-600 dark:placeholder-gray-600 dark:text-[hsl(210,8%,82.5%)] "
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
        </form>

        {!user ? (
          <div className="flex gap-1">
            <Link
              to={"/login"}
              className="bg-[hsl(205,46%,92%)] border-[1px] border-[hsl(205,41%,63%)] text-[hsl(205,47%,42%)] hover:bg-[hsl(205,57%,81%)] hover:text-[hsl(205,46%,32%)] rounded py-1 px-[10px]"
            >
              Log in
            </Link>
            <Link
              to={"/signup"}
              className="bg-blue-500 hover:bg-blue-700 text-white border-[1px] rounded py-1 px-[10px] dark:border-none"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="flex basis-[20%] gap-1 justify-around items-center">
            <div className="w-9 h-9 rounded overflow-hidden mr-4 cursor-pointer">
              <img
                className="object-contain"
                src={
                  user?.avatar
                    ? `${user.avatar}`
                    : "https://dep.anh9.com/imgs/girl-xinh-ngay-tho.jpg"
                }
              />
            </div>
            {theme === "dark" && (
              <>
                <img src={cupDark} />
                <img src={helpDark} />
                <img src={settingDark} />
                <img src={homthuDark} />
              </>
            )}
            {theme === "white" && (
              <>
                <img src={cup} />
                <img src={help} />
                <img src={setting} />
                <img src={homthu} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
