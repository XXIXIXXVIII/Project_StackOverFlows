import { useState } from "react";
import birthdayCake from "../assets/iconUserDetail/birthdayCake.png";
import githubIcon from "../assets/iconUserDetail/githubIcon.png";
import locationIcon from "../assets/iconUserDetail/locationIcon.png";
import timeIcon from "../assets/iconUserDetail/timeIcon.png";
import twitterIcon from "../assets/iconUserDetail/twitterIcon.png";
import webLinkIcon from "../assets/iconUserDetail/webLinkIcon.png";
import { AiFillCaretDown } from "react-icons/ai";
import Profile from "../component/Users/Profile";
import ActivityUserDetail from "../component/Users/ActivityUserDetail";
import SavesUserDetail from "../component/Users/SavesUserDetail";
import SettingsUserDetail from "../component/Users/SettingsUserDetail";

export default function UserDetail() {
  const [pickProfile, setPickProfile] = useState("Profile")

  const handleProfile = ()=>{
    setPickProfile("Profile")
  }
  const handleActivity = ()=>{
    setPickProfile("Activity")
  }
  const handleSaves = ()=>{
    setPickProfile("Saves")
  }
  const handleSettings = ()=>{
    setPickProfile("Settings")
  }
  return (
    <div>
      <div className="flex gap-5 relative">
        <div className="absolute right-1 top-1 text-xs text-[hsl(210,8%,45%)] p-[10px] rounded border border-[hsl(210,8%,65%)] flex justify-center items-center gap-1 cursor-pointer hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:text-[hsl(210,8%,70%)] dark:border-[hsl(210,8%,70%)]">
          Profiles
          <AiFillCaretDown />
        </div>
        <div className="w-32 h-32 rounded overflow-hidden flex justify-center items-center">
          <img
            className="object-cover"
            src="https://thethao99.com/wp-content/uploads/2021/07/nguoidepeuro-3.jpg"
          />
        </div>
        <div className="text-[hsl(210,8%,45%)] dark:text-[hsl(210,8%,70%)]">
          <h2 className="font-medium text-3xl text-black dark:text-gray-100">
            <span className="">Temani Afif</span>
          </h2>
          <div className=" mt-2">
            <span className="text-xl">Expert CSS Hacker (yes, why not)</span>
          </div>
          <div className="text-sm mt-2 flex flex-col gap-1">
            <div className="flex gap-2">
              <div className="flex gap-1">
                <div className="w-5 h-5">
                  <img src={birthdayCake} />
                </div>
                <div>
                  <span>Member for 5 years, 8 months</span>
                </div>
              </div>
              <div className="flex gap-1 mt-1">
                <div className="w-5 h-5">
                  <img src={timeIcon} />
                </div>
                <div>
                  <span>Last seen this week</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-5 h-5">
                <img src={twitterIcon} />
              </div>

              <div className="w-5 h-5">
                <img src={githubIcon} />
              </div>

              <div className="flex gap-1">
                <div className="w-5 h-5">
                  <img src={webLinkIcon} />
                </div>
                <span>front-end.social/@css</span>
              </div>
              <div className="flex gap-1 ml-2">
                <div className="w-5 h-5">
                  <img src={locationIcon} />
                </div>
                <span>Tunisia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black dark:text-[hsl(210,7%,78.5%)] text-sm my-5">
        <div>
          <button style={{background:pickProfile==="Profile"?"hsl(27,90%,55%,1)":"", color:pickProfile==="Profile"?"white":"black"}} onClick={handleProfile} className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)]">Profile</button>
          <button style={{background:pickProfile==="Activity"?"hsl(27,90%,55%,1)":"", color:pickProfile==="Activity"?"white":"black"}} onClick={handleActivity} className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)]">Activity</button>
          <button style={{background:pickProfile==="Saves"?"hsl(27,90%,55%,1)":"", color:pickProfile==="Saves"?"white":"black"}} onClick={handleSaves} className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)]">Saves</button>
          <button style={{background:pickProfile==="Settings"?"hsl(27,90%,55%,1)":"", color:pickProfile==="Settings"?"white":"black"}} onClick={handleSettings} className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)]">Settings</button>
        </div>

        <div className="mt-5">
          {pickProfile==="Profile"&& <Profile/>}
          {pickProfile==="Activity"&& <ActivityUserDetail/>}
          {pickProfile==="Saves"&& <SavesUserDetail/>}
          {pickProfile==="Settings"&& <SettingsUserDetail/>}
        </div>
      </div>
    </div>
  );
}
