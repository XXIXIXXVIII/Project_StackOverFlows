import { useEffect, useState } from "react";
import birthdayCake from "../assets/iconUserDetail/birthdayCake.png";
import githubIcon from "../assets/iconUserDetail/githubIcon.png";
import locationIcon from "../assets/iconUserDetail/locationIcon.png";
import timeIcon from "../assets/iconUserDetail/timeIcon.png";
import twitterIcon from "../assets/iconUserDetail/twitterIcon.png";
import webLinkIcon from "../assets/iconUserDetail/webLinkIcon.png";
import { AiFillCaretDown } from "react-icons/ai";
import Profile from "../component/Users/Profile";
import ActivityUserDetail from "../component/Users/ActivityUserDetail";
import SavesUserDetail from "../component/Users/saveUser/SavesUserDetail";
import SettingsUserDetail from "../component/Users/SettingsUserDetail";
import { useSelector } from "react-redux";
import privateClient from "./../configAPIClient/privateClient";
import moment from "moment";
import { useParams } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";

export default function UserDetail() {
  const { id } = useParams();
  const [pickProfile, setPickProfile] = useState("Profile");
  const [userData, setUserData] = useState();
  const [pickEditProfile, setPickEditProfile] = useState("Preferences");
  const user = useSelector((state) => state.auth.login.currentUser);
  let theme = useSelector((state) => state.theme.themeMode);
  useEffect(() => {
    fetchUserDetail();
  }, []);
  const fetchUserDetail = async () => {
    try {
      const result = await privateClient.get(`/user/${id}`);
      setUserData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const timeAgo = moment(userData?.createdAt).fromNow();
  const lastLogin = moment(userData?.lastLogin).utcOffset("+07:00").calendar();

  const handleProfile = () => {
    setPickProfile("Profile");
  };
  const handleActivity = () => {
    setPickProfile("Activity");
  };
  const handleSaves = () => {
    setPickProfile("Saves");
  };
  const handleSettings = () => {
    setPickProfile("Settings");
  };
  const handleEditProfile = ()=>{
    setPickProfile("Settings")
    setPickEditProfile("EditProfile")
  }
  
  return (
    <div>
      <div className="flex gap-5 relative">
        <div className="absolute right-1 top-1 text-xs text-[hsl(210,8%,45%)] p-[10px] rounded border border-[hsl(210,8%,65%)] flex justify-center items-center gap-1 cursor-pointer hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:text-[hsl(210,8%,70%)] dark:border-[hsl(210,8%,70%)]">
          Profiles
          <AiFillCaretDown />
        </div>
        {user.id == id && (
          <div
            onClick={handleEditProfile}
            className="absolute right-24 top-1 text-xs text-[hsl(210,8%,45%)] p-[10px] rounded border border-[hsl(210,8%,65%)] flex justify-center items-center gap-1 cursor-pointer hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:text-[hsl(210,8%,70%)] dark:border-[hsl(210,8%,70%)]"
          >
            <BsFillPencilFill />
            Edit profile
          </div>
        )}
        <div className="w-32 h-32 rounded overflow-hidden flex justify-center items-center">
          <img
            className="object-cover"
            src={
              userData?.avatar!=='https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'?`http://localhost:8080/${userData?.avatar}`:'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'
            }
          />
        </div>
        <div className="text-[hsl(210,8%,45%)] dark:text-[hsl(210,8%,70%)]">
          <h2 className="font-medium text-3xl text-black dark:text-gray-100">
            <span className="">{userData?.username}</span>
          </h2>
          <div className=" mt-2">
            <span className="text-xl">{userData?.ProfileUsers.title}</span>
          </div>
          <div className="text-sm mt-2 flex flex-col gap-1">
            <div className="flex gap-2 justify-start items-center mb-1">
              <div className="flex gap-1">
                <div className="w-5 h-5">
                  <img src={birthdayCake} />
                </div>
                <div>
                  <span>Member {timeAgo}</span>
                </div>
              </div>
              <div className="flex gap-1 mt-1">
                <div className="w-5 h-5">
                  <img src={timeIcon} />
                </div>
                <div>
                  <span>Last seen {lastLogin}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              {userData?.ProfileUsers[0]?.fbLink && (
                <div className="w-5 h-5">
                  <a href={`${userData?.ProfileUsers[0].fbLink}`}>
                    <img src={twitterIcon} />
                  </a>
                </div>
              )}

              {userData?.ProfileUsers[0]?.githubLink && (
                <div className="w-5 h-5">
                  <a href={`${userData?.ProfileUsers[0].githubLink}`}>
                    <img src={githubIcon} />
                  </a>
                </div>
              )}

              {userData?.ProfileUsers[0]?.websiteLink && (
                <div className="flex gap-1">
                  <div className="w-5 h-5">
                    <a href={`${userData?.ProfileUsers[0].websiteLink}`}>
                      <img src={webLinkIcon} />
                    </a>
                  </div>
                  <span>{userData?.ProfileUsers[0].websiteLink}</span>
                </div>
              )}
              {userData?.ProfileUsers[0]?.location && (
                <div className="flex gap-1 ml-2">
                  <div className="w-5 h-5">
                    <img src={locationIcon} />
                  </div>
                  <span>{userData?.ProfileUsers[0].location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-black dark:text-[hsl(210,7%,78.5%)] text-sm my-5">
        <div>
          <button
            style={{
              background: pickProfile === "Profile" ? "hsl(27,90%,55%,1)" : "",
              color: pickProfile === "Profile" ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
            }}
            onClick={handleProfile}
            className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
          >
            Profile
          </button>
          <button
            style={{
              background: pickProfile === "Activity" ? "hsl(27,90%,55%,1)" : "",
              color: pickProfile === "Activity" ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
            }}
            onClick={handleActivity}
            className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
          >
            Activity
          </button>
          {user.id == id && (
            <button
              style={{
                background: pickProfile === "Saves" ? "hsl(27,90%,55%,1)" : "",
                color: pickProfile === "Saves" ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
              }}
              onClick={handleSaves}
              className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
            >
              Saves
            </button>
          )}
          {user.id == id && (
            <button
              style={{
                background:
                  pickProfile === "Settings" ? "hsl(27,90%,55%,1)" : "",
                color: pickProfile === "Settings" ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
              }}
              onClick={handleSettings}
              className="px-3 ml-1 py-[6px] rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
            >
              Settings
            </button>
          )}
        </div>

        <div className="mt-5">
          {pickProfile === "Profile" && (
            <Profile userData={userData} handleSettings={handleSettings} />
          )}
          {pickProfile === "Activity" && <ActivityUserDetail />}
          {pickProfile === "Saves" && <SavesUserDetail  user={user}/>}
          {pickProfile === "Settings" && <SettingsUserDetail setPickEditProfile={setPickEditProfile} pickEditProfile={pickEditProfile} fetchUserDetail={fetchUserDetail}/>}
        </div>
      </div>
    </div>
  );
}
