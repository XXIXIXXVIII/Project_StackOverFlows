import { Link } from "react-router-dom";
import openEye from '../assets/tagdetail/openEye.png'
import moment from "moment";

export default function Questions({ question, currenUserId }) {
  const timeAgo = moment(question?.createdAt).fromNow();

  return (
    <div className="mx-auto py-4 flex gap-5">
      <div className="basis-[16%] flex flex-col items-end gap-1">
        <div>{question?.like} votes</div>
        <div className="text-gray-500">{question?.totalAnswers} answers</div>
        <div className="text-gray-500">{question?.view} views</div>
      </div>
      <div className="flex-1">
        <Link to={`question/${question?.id}`}
          className="text-[17px] text-blue-600 hover:text-blue-400"
          dangerouslySetInnerHTML={{ __html: question?.title }}
        ></Link>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {question?.Tags?.map((tag) => (
              <div key={tag.id} className="mt-1 flex gap-1">
                <Link to={`/questions/tagged/${tag.nameTag}`} className="bg-[hsl(205,46%,92%)] flex items-center justify-center gap-1 text-[hsl(205,47%,42%)] rounded px-[6px] py-[4.8px] text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
                {tag?.userTag?.some(item=>item.userId===currenUserId)&&<img className="w-4" src={openEye}/>}{tag.nameTag}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-1">
            <Link className="w-4 h-4 overflow-hidden">
              <img
                className="object-cover"
                src={
                  question?.User?.avatar !==
                  "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg"
                    ? `http://localhost:8080/${question?.User?.avatar}`
                    : "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg"
                }
              />
            </Link>
            <Link className="text-blue-500 hover:text-blue-300">
              {question?.User?.username}
            </Link>
            <div>
              <div className="text-[hsl(210,8%,45%)] dark:text-[hsl(210,8%,70%)]">
                {timeAgo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
