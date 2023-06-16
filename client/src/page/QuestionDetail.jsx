import { Link, useParams } from "react-router-dom";
import NavBarRightHome from "../component/NavBarRightHome";
import QuestionComment from "../component/Questions/QuestionComment";
import AnswersComent from "../component/Questions/AnswersComent";
import ReactQuill from "react-quill";
import xIcon from "../assets/xIcon.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import privateClient from "../configAPIClient/privateClient";
import publicClient from "../configAPIClient/publicClient";
import Paginate from "../component/Paginate";
import moment from "moment";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

export default function QuestionDetail() {
  const { questionId } = useParams();
  const [thanks, setThanks] = useState(false);
  const [valueAsk, setValueAsk] = useState();
  const [dataAsk, setDataAsk] = useState();
  const [countAnswer, setCountAnswer] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataQuestionDetail, setDataQuestionDetail] = useState();

  const user = useSelector((state) => state.auth.login.currentUser?.id);

  const handleAddAnswer = () => {
    try {
      const fetch = async () => {
        await privateClient.post("/answers", {
          user,
          valueAsk,
          questionId,
        });
        fetchDataAnswers();
        setValueAsk("");
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  };

  const fetDataQuestion = async () => {
    try {
      const result = await publicClient.get(`/questions/${questionId}`);
      setDataQuestionDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCountAnswers = async () => {
    try {
      const result = await publicClient.get(
        `/answers/countForQuestion/${questionId}`
      );
      setCountAnswer(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataAnswers = async () => {
    try {
      const result = await publicClient.get(`/answers/${questionId}`);
      setDataAsk(result.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchDataAnswers();
    fetDataQuestion();
    fetchCountAnswers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId]);

  const createdQuestion = moment(dataQuestionDetail?.createdAt).fromNow();
  const updateQuestion = moment(dataQuestionDetail?.updateAt).fromNow();
  
  return (
    <div>
      <div className="flex justify-between items-center gap-3">
        <Link
          className="text-[1.7rem] text-[hsl(210,8%,25%)] break-words"
          dangerouslySetInnerHTML={{ __html: dataQuestionDetail?.title }}
          
        ></Link>
        <Link
          to={"/questions/ask"}
          className="bg-[hsl(206,100%,52%)] text-sm block w-28 text-center rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
        >
          Ask Question
        </Link>
      </div>
      <div className="border-b border-[hsl(210,8%,90%)] text-xs flex gap-5 py-4">
        <div className="flex gap-2">
          <span className="text-[hsl(210,8%,45%)]">Asked</span> {createdQuestion}
        </div>
        <div className="flex gap-2">
          <span className="text-[hsl(210,8%,45%)]">Modified</span> {updateQuestion}
        </div>
        <div className="flex gap-2">
          <span className="text-[hsl(210,8%,45%)]">Viewed</span> {dataQuestionDetail?.view} times
        </div>
      </div>

      <div className="flex justify-between mt-4 gap-5">
        <div className="flex-1 ">
          <div>
            <QuestionComment dataQuestionDetail={dataQuestionDetail} />
          </div>
          <div className="mt-10">
            <div className="text-2xl">{countAnswer} Answers</div>
            <div className="mt-5"><Paginate countAllQuestion={countAnswer} setCurrentPage={setCurrentPage} currentPage={currentPage} perPage={20}/></div>
          </div>
          <div className="my-10">
            <AnswersComent
              dataAsk={dataAsk}
              useId={user}
              fetchDataAnswers={fetchDataAnswers}
            />
          </div>
          <div>
            <div className="py-6 border-t border-gray-200 text-xl">
              Your Answer
            </div>
            <ReactQuill
              className="break-all"
              theme="snow"
              value={valueAsk}
              onChange={setValueAsk}
              modules={modules}
              onFocus={() => setThanks(true)}
            />
          </div>
          {thanks && (
            <div className="text-xs flex flex-col relative gap-4 rounded border border-[hsl(47,69%,69%)] bg-[hsl(47,87%,94%)] pl-4 py-2 mt-3">
              <ul>Thanks for contributing an answer to Stack Overflow!</ul>
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setThanks(false)}
              >
                <img src={xIcon} />
              </div>
              <li>
                Please be sure to answer the question. Provide details and share
                your research!
              </li>
              But avoid …
              <li>
                Asking for help, clarification, or responding to other answers.
              </li>
              <li>
                Making statements based on opinion; back them up with references
                or personal experience.
              </li>
              <li>
                To learn more, see our{" "}
                <span className="text-blue-500">
                  tips on writing great answers
                </span>
                .
              </li>
            </div>
          )}
          <div className="my-6">
            <button
              onClick={handleAddAnswer}
              className="bg-[hsl(206,100%,52%)] text-sm rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
            >
              Post Your Answer
            </button>
          </div>
          <div className=" my-6 flex gap-2 items-center">
            <div>Browse other questions tagged</div>
            <div className="flex gap-1 text-sm">
              {dataQuestionDetail?.Tags?.map((tag) => (
                <Link
                  key={tag.id}
                  to={`/questions/tagged/${tag.nameTag}`}
                  className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]"
                >
                  {tag.nameTag}
                </Link>
              ))}
            </div>
            <div>
              <Link
                to={"/questions/ask"}
                className=" text-blue-500 hover:text-blue-700"
              >
                ask your own question
              </Link>
            </div>
            .
          </div>
        </div>
        <div className="basis-[28%]">
          <NavBarRightHome />
        </div>
      </div>
    </div>
  );
}
