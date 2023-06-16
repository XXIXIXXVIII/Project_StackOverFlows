import { useSelector } from "react-redux";


export default function NavbarSetting({setPickEditProfile, pickEditProfile}) {
  let theme = useSelector((state) => state.theme.themeMode);

  const handleEditProfile = () => {
    setPickEditProfile("EditProfile")
  };
  const handleDeleteProfile = () => {
    setPickEditProfile("DeleteProfile")
  };
  const handleTagWatching = () => {
    setPickEditProfile("TagWatching")
  };
  const handlePreferences = () => {
    setPickEditProfile("Preferences")
  };
  return (
    <div className="text-xs flex flex-col gap-5 ">
      <div className="flex flex-col">
        <h4 className="py-[6px] font-bold dark:text-[hsl(210,4%,95%)] text-black ml-3">PERSONAL INFORMATION</h4>
        <button
          style={{
            background:
              pickEditProfile === "EditProfile" ? "hsl(27,90%,55%,1)" : "",
            color: pickEditProfile === "EditProfile"  ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
          }}
          onClick={handleEditProfile}
          className="px-3 py-[6px] rounded-2xl text-start dark:text-[hsl(210,7%,78.5%)] text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
        >
          Edit Profile
        </button>
        <button
          style={{
            background:
              pickEditProfile === "DeleteProfile" ? "hsl(27,90%,55%,1)" : "",
            color: pickEditProfile === "DeleteProfile" ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
          }}
          onClick={handleDeleteProfile}
          className="px-3 py-[6px] rounded-2xl text-start  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
        >
          Delete Profile
        </button>
      </div>
      <div className="flex flex-col">
        <h4 className="py-[6px] font-bold text-black ml-3 dark:text-[hsl(210,4%,95%)]">Email Settings</h4>
        <button
          style={{
            background:
              pickEditProfile === "TagWatching" ? "hsl(27,90%,55%,1)" : "",
            color: pickEditProfile === "TagWatching" ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
          }}
          onClick={handleTagWatching}
          className="px-3 py-[6px] rounded-2xl text-start  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
        >
          Tag watching & ignoring
        </button>
      </div>
      <div className="flex flex-col">
        <h4 className="py-[6px] font-bold text-black ml-3 dark:text-[hsl(210,4%,95%)]">SITE SETTINGS</h4>
        <button
          style={{
            background:
              pickEditProfile === "Preferences" ? "hsl(27,90%,55%,1)" : "",
            color: pickEditProfile === "Preferences" ?  theme==="white"?  "white" : "black" : theme==="dark"? "hsl(210,7%,78.5%)":"black",
          }}
          onClick={handlePreferences}
          className="px-3 py-[6px] rounded-2xl text-start  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
        >
          Preferences
        </button>
      </div>
    </div>
  );
}
