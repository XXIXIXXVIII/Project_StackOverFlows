import { Link, useParams } from "react-router-dom";
import openEye from "../assets/tagdetail/openEye.png";
import closeEye from "../assets/tagdetail/closeEye.png";
import delBlack from "../assets/tagdetail/delBlack.png";
import delGray from "../assets/tagdetail/delGray.png";
import { useEffect, useState } from "react";
import publicClient from "./../configAPIClient/publicClient";
import QuestionCard from "../component/Questions/QuestionCard";

export default function TagDetail() {
  const { tagName } = useParams();

  const [data, setData] = useState([]);
  const [dataTagDetail, setDataTagDetail] = useState()
  const [totalQuestions, setTotalQuestions] = useState();
  const [showEye, setShowEye] = useState(false);
  const [showIgnore, setShowIgnore] = useState(false);

  const fetch = async () => {
    const result = await publicClient.get(`/tags/tagged/${tagName}`);
    setData(result.data.tag.Questions);
    setTotalQuestions(result.data.totalQuestions);
    setDataTagDetail(result.data.tag)
  };

  console.log(totalQuestions);
  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleEye = () => {
    if (showIgnore === false) {
      console.log("object");
      setShowEye(!showEye);
    }
    if (showIgnore === true) {
      setShowIgnore(false);
      setShowEye(true);
    }
  };

  const handleIgnore = () => {
    if (showEye === false) {
      console.log("object");
      setShowIgnore(!showIgnore);
    }
    if (showEye === true) {
      setShowIgnore(true);
      setShowEye(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-2xl">Questions tagged [{dataTagDetail?.nameTag}]</div>
        <div>
          <Link
            to={"/questions/ask"}
            className="bg-[hsl(206,100%,52%)] rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none text-xs"
          >
            Ask Question
          </Link>
        </div>
      </div>
      <div className="text-[13px] mt-6">
        {dataTagDetail?.content}
      </div>
      <div className="mt-5">
        <div className="flex gap-3">
          <button onClick={handleEye} className="">
            {showEye ? (
              <div className="bg-[hsl(205,57%,81%)] border border-[hsl(205,47%,42%)] text-[hsl(205,46%,22%)] px-[10.4px] py-2 rounded flex gap-2 justify-center items-center text-xs">
                <img src={closeEye} /> <span> Unwatch tag</span>
              </div>
            ) : (
              <div className="bg-[hsl(205,46%,92%)] hover:bg-[hsl(205,57%,81%)] hover:text-[hsl(205,46%,32%)] border border-[hsl(205,41%,63%)] text-[hsl(205,47%,42%)] px-[10.4px] py-2 rounded flex gap-2 justify-center items-center text-xs">
                <img src={openEye} /> <span>Watch tag</span>
              </div>
            )}
          </button>
          <button onClick={handleIgnore} className="">
            {showIgnore ? (
              <div className="bg-[hsl(210,8%,90%)] border border-[hsl(210,8%,45%)] text-[hsl(210,8%,25%)] px-[10.4px] py-2 rounded flex gap-2 justify-center items-center text-xs">
                <img src={delBlack} /> Unignore tag
              </div>
            ) : (
              <div className="border border-[hsl(210,8%,65%)] hover:bg-[hsl(210,8%,97.5%)] hover:text-[hsl(210,8%,35%)] text-[hsl(210,8%,45%)] px-[10.4px] py-2 rounded flex gap-2 justify-center items-center text-xs">
                <img src={delGray} /> Ignore tag
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="mb-2 mt-10"><span className="text-lg">{totalQuestions} questions</span></div>
      <div>
        {data?.map((question) => (
          <div key={question.id}>
          <QuestionCard id={question.id} like={question.like} title={question.title} totalAnswers={question.totalAnswers} content={question.content} view={question.view} tick={question.tick} createdAt={question.createdAt} avatar={question.User?.avatar} username={question.User?.username} userId={question.UserId} tags={question.Tags} fetch={fetch}/>
          </div>
        ))}
      </div>
    </div>
  );
}

