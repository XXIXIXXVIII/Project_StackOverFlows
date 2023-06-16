import { useDispatch, useSelector } from "react-redux";
import ToggleDarkNight from "./ToggleDarkNight";
import { useEffect, useState } from "react";
import { ShowNavBarRedux } from "../../../redux/showNavBar";

export default function Preferences() {
  const showNavBar = useSelector((state) => state.showNavBar.show);
  const [checkShowNavBar, setCheckShowNavBar] = useState()
  const dispatch = useDispatch()
  useEffect(()=>{
    setCheckShowNavBar(showNavBar)
  },[showNavBar])

  const handleShowNavBar = ()=>{
    setCheckShowNavBar(!checkShowNavBar)
    dispatch(ShowNavBarRedux(!showNavBar))
  }

  return (
    <div className="dark:text-[hsl(210,4%,95%)]">
      <div className="text-3xl pb-5 mb-6 border-b border-gray-300 dark:border-[hsl(210,4.5%,30.5%)]">
        Preferences
      </div>
      <div>
        <div className="text-xl">Interface</div>
        <div className="border border-gray-200 rounded-lg dark:border-[hsl(210,4%,26%)] dark:bg-[hsl(0,0%,22.5%)]">
          <div>
            <div className="p-6 flex justify-between border-b border-gray-200 dark:border-[hsl(210,4%,26%)]">
              <div className="text-lg">Theme</div>
              <div>
                <ToggleDarkNight />
              </div>
              <div></div>
            </div>

            <div>
              <div className="p-6 flex justify-between items-center ">
              <div >
                <label className="cursor-pointer" htmlFor="checkbox">
                  <div className="text-base font-semibold mb-1">Hide left navigation</div>
                  <div className="text-xs">When you flip this switch, the left navigation will no longer be pinned to the left of the page on Q&A sites.</div>
                </label>
              </div>
                <div className="relative" onClick={handleShowNavBar}>
                    <input
                      id="checkbox"
                      type="checkbox"

                      checked={checkShowNavBar}
                      className="sr-only peer"
                      
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-[hsl(210,6.5%,52%)] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[hsl(140,40%,55%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
