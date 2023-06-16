import { useEffect, useState } from "react"

function useDebounce (value, delay){
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(()=>{
    const timeout = setTimeout(()=>{setDebounceValue(value)},delay)
    return ()=>clearTimeout(timeout)
  },[delay, value]) 
  return debounceValue
}

export default useDebounce