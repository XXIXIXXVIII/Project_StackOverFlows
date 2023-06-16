import { useSelector } from "react-redux";
import privateClient from "../../configAPIClient/privateClient";
import upIcon from "../../assets/questionDetail/upIcon.png";
import downIcon from "../../assets/questionDetail/downIcon.png";
import saveIcon from "../../assets/questionDetail/saveIcon.png";
import saveDoneIcon from "../../assets/questionDetail/saveDoneIcon.png";
import { useEffect, useState } from "react";


export default function AnswersLikeSave({ask, fetchDataAnswers}) {
  const userId = useSelector(state=>state.auth.login.currentUser?.id)
  const [statusUpLike, setStatusUpLike] = useState("");
  const [statusDownLike, setStatusDownLike] = useState("");
  const [countLike, setCountLike] = useState(0);
  
  useEffect(()=>{
    setCountLike(ask.like)
  },[ask.like])

  const handleDownLikeQuestion =async (askId)=>{
    if(statusUpLike==="liked"&&statusDownLike==="haven't downliked"){
      setCountLike(countLike-2)
      setStatusUpLike("haven't liked")
      setStatusDownLike("downliked")
      await privateClient.put('/answers/downlike', {askId, userId})
      return
    }
    if(statusDownLike==="downliked"){
      setCountLike(countLike+1)
      setStatusDownLike("haven't downliked")
    }else{
      setCountLike(countLike-1)
      setStatusDownLike("downliked")
    }
    await privateClient.post('/questions/downlike', {questionId, userId})
  }
  const handleUpLikeQuestion = async(askId)=>{
    if(statusDownLike==="downliked"&&statusUpLike==="haven't liked"){
      setCountLike(countLike+2)
      setStatusDownLike("haven't downliked")
      setStatusUpLike("liked")
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",askId, userId);
      await privateClient.put('/answers/uplike', {askId, userId})
      return
    }
    if(statusUpLike==="liked"){
      setCountLike(countLike-1)
      setStatusUpLike("haven't liked")
    }else{
      setCountLike(countLike+1)
      setStatusUpLike("liked")
    }
  }
  
 
  useEffect(()=>{
    const askId = ask.id

    const fetchStatusUpLike = async()=>{
    try {
        const resultUpLike = await privateClient.post(`/answers/getuplike`, {askId,userId})
        setStatusUpLike(resultUpLike.data)
        const resultDownLike = await privateClient.post(`/answers/getdownlike`, {askId,userId})
        setStatusDownLike(resultDownLike.data)
      }
     catch (error) {
      console.log(error);}
    }
    fetchStatusUpLike()


  },[ask.id, userId])

  

  return (
    <div className="basis-[7%] flex flex-col items-center gap-4">
        <div style={{background:statusUpLike==='liked'?'rgb(255, 204, 204)':''}} onClick={()=>handleUpLikeQuestion(ask.id)} className="p-[10.4px] w-10 rounded-full border border-[hsl(210,8%,15%] hover:bg-red-100 cursor-pointer">
          <img className="object-cover w-full h-full" src={upIcon} />
        </div>
        <div className="text-xl font-semibold">{countLike}</div>
        <div style={{background:statusDownLike==='downliked'?'rgb(255, 204, 204)':''}} onClick={()=>handleDownLikeQuestion(ask.id)} className="p-[10.4px] w-10 rounded-full border border-[hsl(210,8%,15%] hover:bg-red-100 cursor-pointer">
          <img src={downIcon} />
        </div>
        <div   className="cursor-pointer">
          <img src={saveIcon} />
        </div>

      </div>
  )
}
