import { useEffect } from 'react';
import deleteIconBlack from '../../assets/deleteIconBlack.png'

// eslint-disable-next-line react/prop-types
export default function Alert({ title, showHideAlert }) {
  const handleShow = ()=>{
    showHideAlert()
  }
  useEffect(()=>{
    if(title){
      const timeOut = setTimeout(()=>{
        console.log("object");
        showHideAlert()
      },5000)
      return ()=>clearTimeout(timeOut)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[title])

  return (
    <div className='relative'>
      <div className="fixed left-1/2 -translate-x-1/2 top-[14%] drop-shadow-md bg-[hsl(140,40%,90%)] max-w-xl w-full py-4 px-5 text-sm border rounded border-[hsl(140,40%,75%)]">
        {title}
        <div className='absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer' onClick={handleShow}><img src={deleteIconBlack}/></div>
      </div>
    </div>
  );
}
