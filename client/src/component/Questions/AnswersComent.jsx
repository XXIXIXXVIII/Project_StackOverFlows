
import { Link } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import privateClient from "../../configAPIClient/privateClient";
import AnswersLikeSave from "./AnswersLikeSave";


// eslint-disable-next-line react/prop-types
export default function AnswersComent({dataAsk, useId, fetchDataAnswers}) {
  const [showCmtAnswers, setShowCmtAnswers] = useState([]);
  const [valueCmtQuestion, setValueCmtQuestion] = useState("");

  // const [valueCmtQuestion, setValueCmtQuestion] = useState("");


  const handleAddcmt =async(answersId)=>{
    try {
      await privateClient.post('/comment/answer', {useId, valueCmtQuestion, answersId})
      fetchDataAnswers()
      setValueCmtQuestion("")

    } catch (error) {
      console.log(error);
    }
  } 

  return (
   <div >
   {
    // eslint-disable-next-line react/prop-types
    dataAsk?.map( ask=>{
      const timeAgo = moment(ask?.createdAt).fromNow();
      return(
     <div key={ask.id} className="flex py-8" >
      <AnswersLikeSave ask={ask} fetchDataAnswers={fetchDataAnswers}/>
      <div className="ml-4 w-full">
        <div
          className="text-base font-[350] mt-4"
          dangerouslySetInnerHTML={{ __html: ask?.content }}
        >

        </div>
  
        <div className="flex justify-between text-xs gap-1 w-full mt-4 pb-6 mb-2 border-b border-gray-300">
          <div className="text-xs text-[hsl(210,8%,45%)] flex gap-3">
            <div ><span className="cursor-pointer hover:text-blue-400">Share</span></div>
            <div ><span className="cursor-pointer hover:text-blue-400">Edit</span></div>
            <div ><span className="cursor-pointer hover:text-blue-400">Follow</span></div>
          </div>
          <div className=" w-44   text-[hsl(210,8%,45%)] rounded-sm">
            <div>answered {timeAgo}</div>
            <div className="flex gap-1 mt-2">
              <Link to={`/users/${ask?.User?.id}/${ask?.User?.username}`} className="w-10 h-10 flex items-center justify-center">
                <img src={ask?.User?.avatar!=='https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'?`http://localhost:8080/${ask?.User?.avatar}`:'https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg'} />
                
              </Link>
              <div className="flex flex-col gap-1 text-sm">
                <div className="text-blue-500 ">
                  <Link
                    to={`/users/${ask?.User?.id}/${ask?.User?.username}`}
                  >
                    {ask?.User?.username}
                  </Link>
                </div>
                <div className="font-bold">
                  {ask?.User?.ProfileUsers[0]?.point}
                </div>
              </div>
            </div>
          </div>
        </div>
  
  
        <div>
          {ask?.commentAnswers?.map((cmt) => {
            const timeAgo = moment(cmt.createdAt).fromNow();
            return (
              <div
                key={cmt.id}
                className="text-xs p-4 border-b border-gray-200 ml-4"
              >
                {cmt.content} --{" "}
                <Link
                  className="text-blue-500"
                  to={`/users/${cmt.User?.id}/${cmt.User?.username}`}
                >
                  {cmt.User?.username}
                </Link>
                <span className="ml-2 text-gray-400">{timeAgo}</span>
              </div>
            );
          })}
        </div>

        <div  
         
         className="text-[hsl(210,8%,55%)] cursor-pointer hover:text-blue-300 text-sm my-3"
       >
         <span onClick={() => setShowCmtAnswers(ask.id)}>Add a comment</span>
       </div>

       {showCmtAnswers===ask.id && (
         <div className=" flex gap-3 mt-3">
           <textarea
           value={valueCmtQuestion}
             onChange={(e) =>setValueCmtQuestion(e.target.value)}
             className="border border-blue-400 outline-none rounded-sm basis-[80%] text-sm line-clamp-6 p-2"
             rows="5"
           />
           <div className="flex flex-col gap-3">
             <button
               onClick={()=>handleAddcmt(ask.id)}
               className="bg-[hsl(206,100%,52%)] rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none text-xs"
             >
               Add Comment
             </button>
             <button className="text-blue-400 text-sm text-left">help</button>
           </div>
         </div>
       )}

      </div>
    </div>)
  })
    }
   </div>
  )
}

