import tickIcon from "../../../assets/iconUserDetail/tickIcon.png";
import menuIcon from "../../../assets/iconUserDetail/menuIcon.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import privateClient from "../../../configAPIClient/privateClient";
import xIcon from "../../../assets/xIcon.png";
import moment from "moment";

export default function SaveItem({
  item,
  fetchSaveItem,
  pickSave,
  saveNameData,
}) {
  console.log(item);
  const [dataQuestion, setDataQuestion] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const [statusUnsave, setStatusUnsave] = useState("");
  const [showMoveSave, setShowMoveSave] = useState(false);
  const [pickMovieList, setPickMovieList] = useState();
  useEffect(() => {
    setDataQuestion(item?.Question);
  }, [item?.Question]);
  const saveId = item?.SaveId  ;
  const userId = item?.UserId;

  const handleUnsave = async () => {
    const questionId = item?.Question.id
    console.log(questionId);
    const result = await privateClient.post("/follow/unfollow", {
      saveId,
      userId,
      questionId
    });
    setStatusUnsave(result.data);
  };
  useEffect(() => {
    if (statusUnsave === "Unsave successful") {
      fetchSaveItem(pickSave);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusUnsave]);

  const timeAgo = moment(dataQuestion?.createdAt).fromNow();
  console.log(item);
  const handleMoveListSave = async () => {
    try {
      const result = await privateClient.post("follow/moveListFollow", {
        saveId,
        userId,
        pickMovieList,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    fetchSaveItem(pickSave)
  };


  return (
    <div>
      {showMoveSave && (
        <div
          className="fixed z-30 w-full h-full bg-gray-900 top-0 left-0 opacity-60"
          onClick={() => setShowMoveSave(false)}
        ></div>
      )}
      {showMoveSave && (
        <div className="fixed z-40 bg-white rounded-xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[316px] h-[180px] ">
          <div className="p-6 flex flex-col gap-3 relative">
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setShowMoveSave(false)}
            >
              <img src={xIcon} />
            </div>
            <div className="text-black text-2xl font-semibold">Move to</div>
            <div>
              <select
                onChange={(e) => setPickMovieList(e.target.value)}
                className="placeholder:text-gray-400 w-full text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-2 focus:shadow-lg focus:shadow-blue-500/50"
              >
                {saveNameData?.map((item) => (
                  <option key={item.id}>{item.saveName}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleMoveListSave}
                to={"/questions/ask"}
                className="bg-[hsl(206,100%,52%)] rounded border shadow-sm py-2 px-3 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
              >
                Done
              </button>
              <button
                onClick={() => setShowMoveSave(false)}
                to={"/questions/ask"}
                className="rounded py-2 px-3 text-blue-500 hover:bg-blue-100 dark:border-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between text-xs">
        <div className="flex gap-2 items-center justify-center">
          <div>{dataQuestion?.like} votes</div>
          <div className="flex gap-1 items-center rounded justify-center text-white text-sm px-1 py-[2px] bg-[hsl(140,41%,31%)]">
            <div>
              <img src={tickIcon} />
            </div>
            {dataQuestion?.Answers?.length} answers
          </div>
          <div className="text-red-900">{dataQuestion?.view} views</div>
        </div>
        <Tippy
          onClickOutside={() => setShowMenu(false)}
          visible={showMenu}
          interactive
          placement="bottom-end"
          render={(attrs) => (
            <div className="box" tabIndex="2" {...attrs}>
              <div className="border bg-white shadow-lg  border-gray-300 rounded text-sm w-[150px]">
                <div
                  onClick={handleUnsave}
                  className=" p-2  cursor-pointer hover:bg-gray-200"
                >
                  Unsave
                </div>
                <div
                  onClick={() => setShowMoveSave(true)}
                  className=" p-2  cursor-pointer hover:bg-gray-200"
                >
                  Move to...
                </div>
              </div>
            </div>
          )}
        >
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer inline hover:bg-gray-200 rounded p-2"
          >
            <img src={menuIcon} />
          </div>
        </Tippy>
      </div>

      <Link
        to={`/question/${dataQuestion?.id}`}
        className="text-blue-500 hover:text-blue-300 text-lg"
        dangerouslySetInnerHTML={{ __html: dataQuestion?.title }}
      ></Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {dataQuestion?.Tags.map((tag) => (
            <Link
              // onClick={() => fetch()}
              to={`/questions/tagged/${tag.nameTag}`}
              key={tag.id}
              className="bg-[hsl(205,46%,92%)] flex justify-center items-center gap-1 text-[hsl(205,47%,42%)] rounded px-[6px] py-[4.8px] text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]"
            >
              {tag.nameTag}
            </Link>
          ))}
        </div>
        <div className="flex items-end justify-center gap-1">
          <Link to={`/users/${dataQuestion?.User?.id}/${dataQuestion?.User?.username}`} className="flex items-end justify-center gap-1 text-blue-500 hover:text-blue-300">
            <div className="w-8 h-8 rounded overflow-hidden">
              <img
                className="object-cover"
                src={
                  dataQuestion?.User?.avatar !==
                  "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg"
                    ? `http://localhost:8080/${dataQuestion?.User?.avatar}`
                    : "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg"
                }
              />
            </div>
            <div>{dataQuestion?.User?.username}</div>
          </Link>
          <div>{timeAgo}</div>
        </div>
      </div>
    </div>
  );
}
