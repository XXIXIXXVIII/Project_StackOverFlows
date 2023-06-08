import { useEffect, useState } from "react";
import User from "../component/Users/User";
import publicClient from './../configAPIClient/publicClient';
import loadingPacman from '../assets/iconLoading/loadingPacman.svg';


export default function AllUserPage() {
  const [arrange, setArrange] = useState("Reputation");
  const [oderbyTime, setOderbyTime] = useState("week");
  const [dataAllUser, setDataAllUser] = useState([]);
  const [loadDataAllUser, setLoadDataAllUser] = useState(false);
  const [errLoadDataAllUser, setErrLoadDataAllUser] = useState(false);

  useEffect(()=>{
    const fetchAllUsers =async()=>{
      setLoadDataAllUser(true)
      try {
        const result =await publicClient.get('/user')

        setDataAllUser(result?.data)
        setLoadDataAllUser(false)
      } catch (error) {

        setLoadDataAllUser(false)
        setErrLoadDataAllUser(error)
        return error
      }
    } 
    fetchAllUsers()
  },[])

  console.log(dataAllUser);

  const handleClickReputation = () => {
    setArrange("Reputation");
  };
  const handleClickNewUsers = () => {
    setArrange("NewUsers");
  };
  const handleClickVoters = () => {
    setArrange("Voters");
  };
  const handleClickEditors = () => {
    setArrange("Editors");
  };
  const handleClickModerators = () => {
    setArrange("Moderators");
  };


  const handleWeek = () => {
    setOderbyTime("week");
  };
  const handleMonth = () => {
    setOderbyTime("month");
  };
  const handleQuarter = () => {
    setOderbyTime("quarter");
  };
  const handleYear = () => {
    setOderbyTime("year");
  };
  const handleAll = () => {
    setOderbyTime("all");
  };

console.log(dataAllUser);

  return (
    <div className=" text-xs">
      <div>
        <h1 className="text-[27px] mb-4">Users</h1>
      </div>
      <div>
        <div className="flex items-center justify-between w-full">
          <div>
            <form className="flex items-center flex-1">
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
                  className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded block w-full pl-10 p-2 outline-blue-500 dark:bg-[hsl(0,0%,17.5%)] dark:border-gray-600 dark:placeholder-gray-600 dark:text-[hsl(210,8%,82.5%)]"
                  placeholder="Filter by user"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>

          <div className="flex justify-end py-4 mt-2 items-center cursor-pointer">
            <div
              onClick={handleClickReputation}
              style={{
                background: arrange === "Reputation" && "hsl(210,8%,90%)",
                color: arrange === "Reputation" && "black",
                border: arrange === "Reputation" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] p-[10px] rounded-l text-[hsl(210,8%,45%)] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:text-[hsl(210,7%,78.5%)] hover:dark:text-[hsl(210,7%,78.5%)] hover:dark:bg-[hsl(0,0%,22.5%)]"
            >
              Reputation
            </div>
            <div
              onClick={handleClickNewUsers}
              style={{
                background: arrange === "NewUsers" && "hsl(210,8%,90%)",
                color: arrange === "NewUsers" && "black",
                border: arrange === "NewUsers" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] p-[10px] flex gap-1 text-[hsl(210,8%,45%)] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:text-[hsl(210,7%,78.5%)] hover:dark:text-[hsl(210,7%,78.5%)] hover:dark:bg-[hsl(0,0%,22.5%)]"
            >
              <div>New Users</div>
            </div>
            <div
              onClick={handleClickVoters}
              style={{
                background: arrange === "Voters" && "hsl(210,8%,90%)",
                color: arrange === "Voters" && "black",
                border: arrange === "Voters" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] p-[10px] text-[hsl(210,8%,45%)] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:text-[hsl(210,7%,78.5%)] hover:dark:text-[hsl(210,7%,78.5%)] hover:dark:bg-[hsl(0,0%,22.5%)]"
            >
              Voters
            </div>
            <div
              onClick={handleClickEditors}
              style={{
                background: arrange === "Editors" && "hsl(210,8%,90%)",
                color: arrange === "Editors" && "black",
                border: arrange === "Editors" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] p-[10px] text-[hsl(210,8%,45%)] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:text-[hsl(210,7%,78.5%)] hover:dark:text-[hsl(210,7%,78.5%)] hover:dark:bg-[hsl(0,0%,22.5%)]"
            >
              Editors
            </div>
            <div
              onClick={handleClickModerators}
              style={{
                background: arrange === "Moderators" && "hsl(210,8%,90%)",
                color: arrange === "Moderators" && "black",
                border: arrange === "Moderators" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] p-[10px] text-[hsl(210,8%,45%)] rounded-r hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:text-[hsl(210,7%,78.5%)] hover:dark:text-[hsl(210,7%,78.5%)] hover:dark:bg-[hsl(0,0%,22.5%)]"
            >
              Moderators
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <ul className="flex">
          <li style={{borderBottom:oderbyTime==='week'?'1px solid hsl(27,90%,55%)':''}} onClick={handleWeek} className="p-2 hover:border-b hover:border-[hsl(27,90%,55%)] cursor-pointer dark:hover:text-white">week</li>
          <li style={{borderBottom:oderbyTime==='month'?'1px solid hsl(27,90%,55%)':''}} onClick={handleMonth} className="p-2 hover:border-b hover:border-[hsl(27,90%,55%)] cursor-pointer dark:hover:text-white">month</li>
          <li style={{borderBottom:oderbyTime==='quarter'?'1px solid hsl(27,90%,55%)':''}} onClick={handleQuarter} className="p-2 hover:border-b hover:border-[hsl(27,90%,55%)] cursor-pointer dark:hover:text-white">quarter</li>
          <li style={{borderBottom:oderbyTime==='year'?'1px solid hsl(27,90%,55%)':''}} onClick={handleYear} className="p-2 hover:border-b hover:border-[hsl(27,90%,55%)] cursor-pointer dark:hover:text-white">year</li>
          <li style={{borderBottom:oderbyTime==='all'?'1px solid hsl(27,90%,55%)':''}} onClick={handleAll} className="p-2 hover:border-b hover:border-[hsl(27,90%,55%)] cursor-pointer dark:hover:text-white">all</li>
        </ul>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
      {loadDataAllUser&&<div className="w-40 mx-auto"> <img src={loadingPacman}/></div>}
      {errLoadDataAllUser&&<div className="w-40 mx-auto"> <span>{errLoadDataAllUser}</span></div>}
      {dataAllUser?.map(user=><div key={user.id}><User user={user}/></div>)}
      </div>
    </div>
  );
}
