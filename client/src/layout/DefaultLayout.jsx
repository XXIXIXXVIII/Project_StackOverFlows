import FooterDefauLayout from "../component/FooterDefauLayout"
import HeaderDefauLayout from "../component/HeaderDefauLayout"
import { useEffect } from "react";
import { useSelector } from 'react-redux'


export default function DefaultLayout(props) {
  


  let theme = useSelector(state=>state.theme.themeMode)

  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[theme])
  // eslint-disable-next-line react/prop-types
  let {children} = props
  return (
    <div className="dark:bg-black">
    <HeaderDefauLayout/>
    {children}
    <FooterDefauLayout/>
    </div>
  )
}
