import { Link } from "react-router-dom";
import { IoEarth } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";
import { GiStarFormation, GiHandBag } from "react-icons/gi";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function NavBar() {
  const currentPath = window.location.pathname;
  const [nav, setNav] = useState(`${currentPath}`);
  let theme = useSelector((state) => state.theme.themeMode);

  const handleHome = () => {
    setNav("/");
  };
  const handleQuestions = () => {
    setNav("/questions");
  };
  const handleTags = () => {
    setNav("/tags");
  };
  const handleUsers = () => {
    setNav("/users");
  };
  const handleCompanies = () => {
    setNav("/jobs/companies");
  };
  const handleExplore = () => {
    setNav("/explore");
  };

  return (
    <>
      <div className="py-8 w-[95%] mx-auto text-[13px] text-[hsl(212,7%,46%)] dark:text-[hsl(210,7%,78.5%)] flex flex-col gap-2 ">
        <Link className="hover:text-black dark:hover:text-white" to={"/"} onClick={handleHome}>
          <div
            className="mb-4 py-2 text-sm pl-2 "
            style={
              nav === "/"&&theme==='light'
                ? {
                    borderRight: "3px solid hsl(27, 90%, 55%)",
                    background: "hsl(210, 8%, 95%)",
                    fontWeight: "700",
                    color: "black",
                  }
                : { }
            }
          >
            Home
          </div>
        </Link>
        <span>PUBLIC</span>
        <ul className="flex flex-col text-[13px]">
          <Link to={"/questions"} onClick={handleQuestions}>
            <li
              style={
                nav === "/questions"
                  ? {
                      borderRight: "3px solid hsl(27, 90%, 55%)",
                      background: "hsl(210, 8%, 95%)",
                      fontWeight: "700",
                      color: "black",
                    }
                  : {}
              }
              className="hover:text-black py-2 p-2 dark:hover:text-white"
            >
              <div className="flex gap-2 w-full">
                <IoEarth size={20} />
                <span>Questions</span>
              </div>
            </li>
          </Link>
          <Link to={"/tags"} onClick={handleTags}>
            <li
              style={
                nav === "/tags"
                  ? {
                      borderRight: "3px solid hsl(27, 90%, 55%)",
                      background: "hsl(210, 8%, 95%)",
                      fontWeight: "700",
                      color: "black",
                    }
                  : {}
              }
              className="hover:text-black pl-7 py-2 w-full dark:hover:text-white"
            >
              Tags
            </li>
          </Link>
          <Link to={"/users"} onClick={handleUsers}>
            <li
              style={
                nav === "/users"
                  ? {
                      borderRight: "3px solid hsl(27, 90%, 55%)",
                      background: "hsl(210, 8%, 95%)",
                      fontWeight: "700",
                      color: "black",
                    }
                  : {}
              }
              className="hover:text-black pl-7 py-2 dark:hover:text-white"
            >
              Users
            </li>
          </Link>
          <Link to={"/jobs/companies"} onClick={handleCompanies}>
            <li
              style={
                nav === "/jobs/companies"
                  ? {
                      borderRight: "3px solid hsl(27, 90%, 55%)",
                      background: "hsl(210, 8%, 95%)",
                      fontWeight: "700",
                      color: "black",
                    }
                  : {}
              }
              className="hover:text-black pl-7 py-2 dark:hover:text-white"
            >
              Companies
            </li>
          </Link>
        </ul>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <span>COLLECTIVES</span> <AiFillInfoCircle />
          </div>
          <Link
            onClick={handleExplore}
            style={
              nav === "/explore"
                ? {
                    borderRight: "3px solid hsl(27, 90%, 55%)",
                    background: "hsl(210, 8%, 95%)",
                    fontWeight: "700",
                    color: "black",
                  }
                : {}
            }
            className="flex gap-2 mt-1 pl-1 py-2 dark:hover:text-white"
          >
            <GiStarFormation className="text-orange-500" size={18} />
            <span>Explore Collectives</span>
          </Link>
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <span>TEAMS</span> <AiFillInfoCircle />
          </div>
          <Link className="flex gap-2 mt-1 pl-1 py-2 dark:hover:text-white">
            <GiHandBag className="text-orange-500" size={18} />
            <span>Create free Team</span>
          </Link>
        </div>
        <div className="text-blue-600 bg-blue-50 py-2 rounded-md cursor-pointer dark:bg-blue-700 dark:text-blue-300 px-1">
          Looking for your Teams?
        </div>

      </div>
    </>
  );
}
