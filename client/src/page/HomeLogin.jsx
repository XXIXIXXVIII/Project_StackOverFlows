import { Link } from "react-router-dom";
import Questions from "../component/QuestionsHome";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function HomeLogin() {
  const [arrange, setArrange] = useState("Interesting");
  const dataQuestion = useSelector(state=>state.questionSlice?.question?.dataAllQuestions)
  const currenUserId = useSelector((state) => state.auth.login?.currentUser?.id)

  const handleClickInteresting = () => {
    setArrange("Interesting");
  };
  const handleClickBountied = () => {
    setArrange("Bountied");
  };
  const handleClickHot = () => {
    setArrange("Hot");
  };
  const handleClickWeek = () => {
    setArrange("Week");
  };
  const handleClickMonth = () => {
    setArrange("Month");
  };

  return (
    <div className="flex text-[13px] gap-5">
      <main className="flex-1">
        <div className="flex justify-between">
          <h1 className="text-3xl font-normal">Top Questions</h1>
          <Link to={'/questions/ask'} className="bg-[hsl(206,100%,52%)] rounded border shadow-sm p-2 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none">
            Ask Question
          </Link>
        </div>
        <div className="flex text-xs justify-end py-4 border-b border-[hsl(210,8%,85%)] mt-2 items-center cursor-pointer text-[hsl(210,8%,45%)] dark:text-[hsl(210,7%,78.5%)] dark:border-[hsl(210,4.5%,30.5%)]">
          <div
          onClick={handleClickInteresting}
            style={{
              background: arrange === "Interesting" && "hsl(210,8%,90%)",
              color: arrange === "Interesting" && "black",
              border: arrange === "Interesting" && "1px solid hsl(210,8%,55%)",
            }}
            className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] rounded-l hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
          >
            Interesting
          </div>
          <div
          onClick={handleClickBountied}
            style={{
              background: arrange === "Bountied" && "hsl(210,8%,90%)",
              color: arrange === "Bountied" && "black",
              border: arrange === "Bountied" && "1px solid hsl(210,8%,55%)",
            }}
            className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] flex gap-1 hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
          >
            <div className="bg-blue-600 text-white px-2 text-xs rounded-sm flex items-center">
              227
            </div>
            <div>Bountied</div>
          </div>
          <div
          onClick={handleClickHot}
            style={{
              background: arrange === "Hot" && "hsl(210,8%,90%)",
              color: arrange === "Hot" && "black",
              border: arrange === "Hot" && "1px solid hsl(210,8%,55%)",
            }}
            className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
          >
            Hot
          </div>
          <div
          onClick={handleClickWeek}
            style={{
              background: arrange === "Week" && "hsl(210,8%,90%)",
              color: arrange === "Week" && "black",
              border: arrange === "Week" && "1px solid hsl(210,8%,55%)",
            }}
            className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
          >
            Week
          </div>
          <div
          onClick={handleClickMonth}
            style={{
              background: arrange === "Month" && "hsl(210,8%,90%)",
              color: arrange === "Month" && "black",
              border: arrange === "Month" && "1px solid hsl(210,8%,55%)",
            }}
            className="border border-[hsl(210,8%,85%)] p-[10px] dark:border-[hsl(210,4.5%,30.5%)] rounded-r hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white "
          >
            Month
          </div>
        </div>

        {dataQuestion?.map(question=><div key={question.id} className="border-b border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)]">
          <Questions question={question} currenUserId={currenUserId} />
        </div>)}

      </main>
    </div>
  );
}
