import { useState } from "react";
import NavbarSetting from "./NavbarSetting";
import Preferences from "./mainSetting/Preferences";
import EditProfile from "./mainSetting/EditProfile";

export default function SettingsUserDetail({setPickEditProfile, pickEditProfile, fetchUserDetail}) {
  

  return (
    <div className="flex">
      <div className="basis-[16%] mr-10">
        <NavbarSetting setPickEditProfile={setPickEditProfile} pickEditProfile={pickEditProfile} />
      </div>
      <div className="flex-1">
        {pickEditProfile==='Preferences'&&<Preferences />}
        {pickEditProfile==='EditProfile'&&<EditProfile fetchUserDetail={fetchUserDetail}/>}
      </div>
    </div>
  );
}
