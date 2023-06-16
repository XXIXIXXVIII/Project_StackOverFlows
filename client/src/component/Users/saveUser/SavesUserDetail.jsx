import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import flusIcon from "../../../assets/iconUserDetail/flusIcon.png";
import xIcon from "../../../assets/xIcon.png";
import SaveItem from "./SaveItem";
import privateClient from "../../../configAPIClient/privateClient";
import Alert from '../../ModalAlert/Alert'

export default function SavesUserDetail({ user }) {
  const userId = user?.id;
  const [pickSave, setPickSave] = useState("All saves");
  const [saveName, setSaveName] = useState("All saves");
  const [showCreateList, setShowCreateList] = useState(false);
  const [saveItemData, setSaveItemData] = useState();
  const [saveNameData, setSaveNameData] = useState();
  const [valueNewList, setValueNewList] = useState("");
  const theme = useSelector((state) => state.theme.themeMode);
  const [statusCreateSave, setStatusCreateSave] = useState()

  const handleAllSave = () => {
    setPickSave("All saves");
    setSaveName("allSave");
  };


  const fetchSaveItem = async (saveName) => {
    try {
      const result = await privateClient.post(
        `/follow/getFollowQuestionForUser`,
        { userId, saveName }
      );
      setSaveItemData(result.data);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchSaveName = async () => {
    try {
      const result = await privateClient.get(`/user/getSave/${userId}`);
      setSaveNameData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSaveName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(()=>{
    if(statusCreateSave==='New list created.'){
      setShowCreateList(false)
      fetchSaveName()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ statusCreateSave])

  useEffect(() => {
    fetchSaveItem(pickSave);

  }, [pickSave]);

  const handleClickSave = (name)=>{
    setPickSave(name);
  }
  const handleCreateSave = async()=>{
    try {
      const result = await privateClient.post('/user/createSave',{userId, valueNewList})
      setStatusCreateSave(result.data);
    } catch (error) {
      setStatusCreateSave(error.response.data);
    }
  }

  const showHideAlert = ()=>{
    setStatusCreateSave('')
  }
 

  return (
    <div className="flex">
    {statusCreateSave==='New list created.'&&<Alert title={'New list created.'} showHideAlert={showHideAlert}/>}
      {showCreateList && (
        <div
          className="fixed z-30 w-full h-full bg-gray-900 top-0 left-0 opacity-60"
          onClick={() => setShowCreateList(false)}
        ></div>
      )}
      {showCreateList && (
        <div className="fixed z-40 bg-white rounded-xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[316px] h-[210px] ">
          <div className="p-6 flex flex-col gap-3 relative">
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setShowCreateList(false)}
            >
              <img src={xIcon} />
            </div>
            <div className="text-black text-2xl font-semibold">New List</div>
            {statusCreateSave==='List name already exists.'&&<div className="text-red-700">{statusCreateSave}</div>}
            <div>
              <input
                onChange={(e) => setValueNewList(e.target.value)}
                placeholder="Enter list name"
                autoComplete="off"
                className="placeholder:text-gray-400 w-full text-[13px] outline-none border border-[hsl(210,8%,75%)] focus:border-blue-500 rounded p-2 focus:shadow-lg focus:shadow-blue-500/50"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCreateSave}
                to={"/questions/ask"}
                className="bg-[hsl(206,100%,52%)] rounded border shadow-sm py-2 px-3 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
              >
                Save
              </button>
              <button
                onClick={() => setShowCreateList(false)}
                to={"/questions/ask"}
                className="rounded py-2 px-3 text-blue-500 hover:bg-blue-100 dark:border-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="basis-[20%] flex flex-col text-[13px] gap-4">
        <div className="flex flex-col">
          <button
            style={{
              background: pickSave === "All saves" ? "hsl(27,90%,55%,1)" : "",
              color:
                pickSave === "All saves"
                  ? theme === "white"
                    ? "white"
                    : "black"
                  : theme === "dark"
                  ? "hsl(210,7%,78.5%)"
                  : "black",
            }}
            onClick={handleAllSave}
            className="px-3 ml-1 py-[6px] text-start rounded-2xl  text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
          >
            All saves
          </button>

        </div>
        <div>
          <div className="flex items-center justify-between px-4">
            <span className="font-semibold">MY LISTS</span>
            <div onClick={()=>setShowCreateList(true)} className="cursor-pointer hover:bg-slate-100 p-1 rounded">
              <img src={flusIcon} />
            </div>
          </div>
          <div className="mt-1">
            {saveNameData?.map((item) => (
              <div className="mt-1" key={item.id}><button
            style={{
              background: pickSave === `${item.saveName}` ? "hsl(27,90%,55%,1)" : "",
              color:
                pickSave === `${item.saveName}`
                  ? theme === "white"
                    ? "white"
                    : "black"
                  : theme === "dark"
                  ? "hsl(210,7%,78.5%)"
                  : "black",
            }}
            onClick={()=>handleClickSave(item.saveName)}
            className="px-3 ml-1 py-[6px] text-start rounded-2xl w-full text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,90%)] dark:hover:bg-[hsl(210,4%,26%)]"
          >
            {item.saveName}
          </button></div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 ml-8">
        <div className="flex items-center justify-between">
          <div className="font-medium text-[19px]">{pickSave}</div>
          <div
            onClick={() => setShowCreateList(true)}
            to={"/questions/ask"}
            className="bg-[hsl(206,100%,52%)] cursor-pointer rounded border shadow-sm py-2 px-3 text-white hover:bg-[hsl(206,100%,40%)] dark:border-none"
          >
            Create new list
          </div>
        </div>
        <div>
          <div className="text-lg mb-4">{saveItemData?.length} saved items</div>
          <div className="border border-gray-300 rounded-md">
            {saveItemData?.map((item) => (
              <div key={item.id} className="p-4 border-b border-gray-300">
                <SaveItem  tem item={item} fetchSaveItem={fetchSaveItem} pickSave={pickSave} saveNameData={saveNameData}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
