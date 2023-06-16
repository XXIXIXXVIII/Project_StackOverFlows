import HeaderDefauLayout from "../component/HeaderDefauLayout";
import NavBar from "../component/NavBar";
import NavBarRightHome from "../component/NavBarRightHome";
import FooterDefauLayout from './../component/FooterDefauLayout';
import { useEffect } from "react";
import { useSelector } from 'react-redux'


export default function UserTagsLayout(props) {
  // eslint-disable-next-line react/prop-types
  const {children} = props
  let theme = useSelector(state=>state.theme.themeMode)
  const showNavBar = useSelector((state) => state.showNavBar.show)

  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])


  return (
    <div className="dark:bg-[hsl(0,0%,17.5%)] dark:text-[hsl(210,7%,78.5%)]">
      <HeaderDefauLayout/>
      <div className="w-[83%] mx-auto flex ">
        {showNavBar&&<div className="border-r border-[hsl(210,8%,85%)] basis-[13%] dark:border-[hsl(210,4.5%,30.5%)]"><NavBar/></div>}
        <div className="p-6 flex-1">{children}</div>
        <div className="basis-[23%] mt-6"><NavBarRightHome/></div>
      </div>
      <FooterDefauLayout/>
    </div>
  )
}