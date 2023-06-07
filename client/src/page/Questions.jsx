import { useEffect, useState } from "react";
import iconFilter from '../assets/iconFilter.png'
import QuestionCard from "../component/Questions/QuestionCard";
import { Link } from "react-router-dom";
import publicClient from './../configAPIClient/publicClient';
import queryString from 'query-string';

export default function Questions() {
  const [arrange, setArrange] = useState("Newest");
  const [dataAllQuestions, setDataAllQuestions] = useState()
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [sortBy, setSortBy] = useState()

  const handleClickNewest = () => {
    setArrange("Newest");
    setSortBy("")
  };
  const handleClickActive = () => {
    setArrange("Active");

  };
  const handleClickVotes = () => {
    setArrange("Votes");
    setSortBy("like")
  };
  const handleClickUnanswered = () => {
    setArrange("Unanswered");
    setSortBy("Unanswered")
  };
  const handleClickMore = () => {
    setArrange("More");
  };
  const url = `?${queryString.stringify({ sortBy })}`
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const AllQuestions = await publicClient.get(`/questions${url}`)
        setDataAllQuestions(AllQuestions.data.dataAllQuestions)
        setTotalQuestions(AllQuestions.data.totalQuestions)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[url])
console.log(dataAllQuestions);

  return (
    <div className="flex justify-between gap-5">
      <div className="flex-1">
        <div className="flex justify-between">
          <h2 className="text-3xl">All Questions</h2>
          <div>
          <Link to={'/questions/ask'} className="bg-[hsl(206,100%,52%)] rounded border text-sm shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none">
            Ask Question
          </Link>
          </div>
        </div>
        <div>
          
          <div className="flex justify-between items-center mt-2">
          <div className="text-lg">{totalQuestions} questions</div>
            <div className="flex text-xs justify-end py-4 border-b border-[hsl(210,8%,85%)] mt-2 items-center cursor-pointer text-[hsl(210,8%,45%)] dark:text-[hsl(210,7%,78.5%)] dark:border-[hsl(210,4.5%,30.5%)]">
              <div
                onClick={handleClickNewest}
                style={{
                  background: arrange === "Newest" && "hsl(210,8%,90%)",
                  color: arrange === "Newest" && "black",
                  border: arrange === "Newest" && "1px solid hsl(210,8%,55%)",
                }}
                className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] rounded-l hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
              >
                Newest
              </div>
              <div
                onClick={handleClickActive}
                style={{
                  background: arrange === "Active" && "hsl(210,8%,90%)",
                  color: arrange === "Active" && "black",
                  border: arrange === "Active" && "1px solid hsl(210,8%,55%)",
                }}
                className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] flex gap-1 hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
              >
                <div className="bg-blue-600 text-white px-2 text-xs rounded-sm flex items-center">
                  227
                </div>
                <div>Active</div>
              </div>
              <div
                onClick={handleClickVotes}
                style={{
                  background: arrange === "Votes" && "hsl(210,8%,90%)",
                  color: arrange === "Votes" && "black",
                  border: arrange === "Votes" && "1px solid hsl(210,8%,55%)",
                }}
                className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
              >
                Votes
              </div>
              <div
                onClick={handleClickUnanswered}
                style={{
                  background: arrange === "Unanswered" && "hsl(210,8%,90%)",
                  color: arrange === "Unanswered" && "black",
                  border:
                    arrange === "Unanswered" && "1px solid hsl(210,8%,55%)",
                }}
                className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
              >
                Unanswered
              </div>
              <div
                onClick={handleClickMore}
                style={{
                  background: arrange === "More" && "hsl(210,8%,90%)",
                  color: arrange === "More" && "black",
                  border: arrange === "More" && "1px solid hsl(210,8%,55%)",
                }}
                className="border border-[hsl(210,8%,85%)] p-[10px] dark:border-[hsl(210,4.5%,30.5%)] rounded-r hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white "
              >
                More
              </div>
            <div className="ml-5"><button className="flex gap-1 p-[9.6px] text-[hsl(205,47%,42%)] bg-[hsl(205,46%,92%)] border border-[hsl(205,41%,63%)] rounded hover:bg-[hsl(205,57%,81%)] hover:text-[hsl(205,46%,32%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:border-[hsl(205,29%,54%)] dark:hover:bg-[hsl(205,19.5%,37%)] dark:hover:text-[hsl(205,49.5%,87%)]"><img src={iconFilter}/>Filter</button></div>
            </div>
          </div>
        </div>

        <div>
        {dataAllQuestions?.map(question=><div key={question.id}> <QuestionCard id={question.id} like={question.like} title={question.title} totalAnswers={question.totalAnswers} content={question.content} view={question.view} tick={question.tick} createdAt={question.createdAt} avatar={question.User?.avatar} username={question.User?.username} userId={question.UserId} tags={question.Tags}/></div>)}
         

        </div>
      </div>
    </div>
  );
}
