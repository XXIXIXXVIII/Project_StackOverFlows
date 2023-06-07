import upIcon from "../../assets/questionDetail/upIcon.png";
import downIcon from "../../assets/questionDetail/downIcon.png";
import saveIcon from "../../assets/questionDetail/saveIcon.png";
import saveDoneIcon from "../../assets/questionDetail/saveDoneIcon.png";
import createAtIcon from "../../assets/questionDetail/createAtIcon.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import publicClient from "../../configAPIClient/publicClient";
import moment from "moment";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import privateClient from "../../configAPIClient/privateClient";
import Alert from "../ModalAlert/Alert";

export default function QuestionComment({ dataQuestionDetail }) {
  const { questionId } = useParams();

  const [cmtQuestion, setCmtQuestion] = useState();
  const [followQuestion, setFollowQuestion] = useState();
  const [showCmtQuestion, setShowCmtQuestion] = useState(false);
  const [alertFollow, setAlertFollow] = useState("");
  const [countLike, setCountLike] = useState();
  const userId = useSelector((state) => state.auth.login.currentUser?.id);

  const timeAgo = moment(dataQuestionDetail?.createdAt).fromNow();

  const handleAddCmtQuestion = () => {
    const fetch = async () => {
      try {
        await publicClient.post("/comment", {
          cmtQuestion,
          questionId,
          userId,
        });
      } catch (error) {
        return error;
      }
    };
    fetch();
  };
  console.log(dataQuestionDetail?.like);
  useEffect(() => {
    
    if(userId){
    const fetch = async () => {
      try {
        const result = await privateClient.post("/follow/getfollow", {
          userId,
          questionId,
        });
        setFollowQuestion(result.data);
      } catch (error) {
        return error;
      }
    };
    fetch();}
  }, [questionId, userId]);

  useEffect(()=>{
    setCountLike(dataQuestionDetail?.like)
  },[dataQuestionDetail?.like])

  const showHideAlert =()=>{
    setAlertFollow("")
  }

  const handleFollowQuestion = async () => {
    if (followQuestion === "have") {
      setFollowQuestion("notfound");
    } else {
      setFollowQuestion("have");
    }
    const data = await privateClient.post("/follow", { userId, questionId });
    setAlertFollow(data.data)

  };
  const handleDownLikeQuestion =async ()=>{
    setCountLike(countLike-1)
    await privateClient.post('/questions/downlike', {questionId})
  }
  const handleUpLikeQuestion = async()=>{
    setCountLike(countLike+1)
    await privateClient.post('/questions/uplike', {questionId})
  }


  return (
    <div className="flex">
    {alertFollow&&<Alert title={`${alertFollow}`} showHideAlert={showHideAlert}/>}
      <div className="basis-[7%] flex flex-col items-center gap-4">
        <div onClick={handleUpLikeQuestion} className="p-[10.4px] w-10 rounded-full border border-[hsl(210,8%,15%] hover:bg-red-100 cursor-pointer">
          <img className="object-cover w-full h-full" src={upIcon} />
        </div>
        <div className="text-xl font-semibold">{countLike}</div>
        <div onClick={handleDownLikeQuestion} className="p-[10.4px] w-10 rounded-full border border-[hsl(210,8%,15%] hover:bg-red-100 cursor-pointer">
          <img src={downIcon} />
        </div>
        <div onClick={handleFollowQuestion} className="cursor-pointer">
          {followQuestion === "have" ? (
            <img src={saveDoneIcon} />
          ) : (
            <img src={saveIcon} />
          )}
        </div>
        <div className="cursor-pointer">
          <img src={createAtIcon} />
        </div>
      </div>
      <div className="ml-4">
        <div
          className="text-base font-[350]"
          dangerouslySetInnerHTML={{ __html: dataQuestionDetail?.content }}
        ></div>
        <div className="my-6 flex gap-2">
          {dataQuestionDetail?.Tags.map((tag) => (
            <Link
              to={`/questions/tagged/${tag.nameTag}`}
              key={tag.id}
              className="bg-[hsl(205,46%,92%)]  text-[hsl(205,47%,42%)] rounded px-[6px] py-[4.8px] text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]"
            >
              {tag.nameTag}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 text-xs gap-1">
          <div className="text-xs text-[hsl(210,8%,45%)] flex gap-3">
            <div>
              <span className="cursor-pointer hover:text-blue-400">Share</span>
            </div>
            <div>
              <span className="cursor-pointer hover:text-blue-400">Edit</span>
            </div>
            <div>
              <span className="cursor-pointer hover:text-blue-400">Follow</span>
            </div>
          </div>
          <div>{timeAgo}</div>
          <div className="p-[5px] w-44   text-[hsl(210,8%,45%)] bg-blue-200 rounded-sm">
            <div>asked Jun 27, 2012 at 13:51</div>
            <div className="flex gap-1 mt-1">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={`${dataQuestionDetail?.User?.avatar}`} />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <div className="text-blue-500 ">
                  <Link
                    to={`/users/${dataQuestionDetail?.User?.id}/${dataQuestionDetail?.User?.username}`}
                  >
                    {dataQuestionDetail?.User?.username}
                  </Link>
                </div>
                <div className="font-bold">
                  {dataQuestionDetail?.User?.ProfileUsers[0]?.point}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showCmtQuestion && (
          <div className=" flex gap-3 mt-3">
            <textarea
              onChange={(e) => {
                setCmtQuestion(e.target.value);
              }}
              className="border border-blue-400 outline-none rounded-sm basis-[80%] text-sm line-clamp-6 p-2"
              rows="5"
            />
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddCmtQuestion}
                className="bg-[hsl(206,100%,52%)] rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none text-xs"
              >
                Add Comment
              </button>
              <button className="text-blue-400 text-sm text-left">help</button>
            </div>
          </div>
        )}

        <div>
          {dataQuestionDetail?.commentQuestions.map((cmt) => {
            const timeAgo = moment(cmt.createdAt).fromNow();
            return (
              <div
                key={cmt.id}
                className="text-xs p-4 border-t border-[hsl(210,8%,95%)]"
              >
                {cmt.content} --{" "}
                <Link
                  className="text-blue-500"
                  to={`/user/${cmt.User?.id}/${cmt.User?.username}`}
                >
                  {cmt.User?.username}
                </Link>
                <span className="ml-2">{timeAgo}</span>
              </div>
            );
          })}
        </div>
        <div
          onClick={() => setShowCmtQuestion(true)}
          className="text-[hsl(210,8%,55%)] cursor-pointer hover:text-blue-300 text-sm"
        >
          Add a comment
        </div>
      </div>
    </div>
  );
}

QuestionComment.propTypes = {
  dataQuestionDetail: PropTypes.shape({
    createdAt: PropTypes.string,
    content: PropTypes.string,
    like: PropTypes.number,
    Tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        nameTag: PropTypes.string,
      })
    ),
    commentQuestions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
      })
    ),
    User: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      avatar: PropTypes.string,
      ProfileUsers: PropTypes.arrayOf(
        PropTypes.shape({ point: PropTypes.number })
      ),
    }),
  }),
};
