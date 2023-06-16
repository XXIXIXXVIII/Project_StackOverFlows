import { Link } from "react-router-dom";
import stackoverflowColorIcon from "../../assets/stackoverflow-color-icon.png";
import metaStackIcon from "../../assets/metaStackIcon.png";
import {BsArrowReturnRight} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { logoutRedux } from "../../redux/authSlice";

export default function ContentHeaderSetting() {
  const dispath = useDispatch()
  const handleLogout = ()=>{
    dispath(logoutRedux())
  }
  return (
    <div className="w-[375px] max-h-[390px] overflow-y-auto overflow-x-hidden text-xs text-[hsl(210,8%,82.5%)]">
      <div className="bg-[hsl(210,8%,95%)] dark:bg-[hsl(0,0%,24%)] p-2  text-xs font-bold text-[hsl(206,100%,40%)]">
        <Link to={"/"}>CURRENT COMMUNITY</Link>
      </div>
      <div className="bg-blue-50 dark:bg-[hsl(205,5%,27%)]">
        <div className="flex justify-between hover:bg-blue-100  px-4 py-1 dark:hover:bg-[hsl(205,14%,28%)]">
          <div className="flex gap-1 justify-center items-center">
            <div className="w-6 h-6">
              <img className="object-cover" src={stackoverflowColorIcon} />
            </div>
            <Link className="text-[hsl(206,100%,40%)] font-bold text-[13px]" to={"/"}>Stack Overflow</Link>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <Link className="text-blue-500 hover:text-blue-300">help</Link>
            <Link className="text-blue-500 hover:text-blue-300">chat</Link>
            <div onClick={handleLogout} className="text-blue-500 hover:text-blue-300 cursor-pointer">log out</div>
          </div>
        </div>
        <div className="flex items-center gap-4 hover:bg-blue-100 dark:hover:bg-[hsl(205,14%,28%)] pl-8 py-1">
          <BsArrowReturnRight/>
          <div className="w-6 h-6"><img className="object-cover" src={metaStackIcon}/> </div><a href="https://meta.stackoverflow.com/" className="text-blue-500 hover:text-blue-300">Meta Stack Overflow</a>
        </div>
      </div>
    </div>
  );
}
