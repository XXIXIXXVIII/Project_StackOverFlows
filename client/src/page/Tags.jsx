import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TagCard from "../component/Tags/tagCard";
import publicClient from "../configAPIClient/publicClient";
import queryString from "query-string";
import useDebounce from "../hook/useDebounce";

export default function Tags() {
  const [tags, setTags] = useState();
  const [searchTag, setSearchTag] = useState();
  const [dataTagsCard, setDataTagsCard] = useState([]);
  const q = useDebounce(searchTag,500)

  const handlePopular = () => {
    setTags("Popular");
  };
  const handleName = () => {
    setTags("Name");
  };
  const handleNew = () => {
    setTags("New");
  };

  useEffect(()=>{
    const fetchTagCard = async ()=>{
      try {
        const res = await publicClient.get(`/tags${url}`)
        setDataTagsCard(res.data)
      } catch (error) {
        return error
      }
    }
    const url = `?${queryString.stringify({ q })}`
    fetchTagCard()
  },[q])

  return (
    <div className="text-[13px] mt-2">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-[27px]">Tags</h1>
        </div>
        <div className="text-base font-light w-2/3">
          <span>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </span>
        </div>
        <div>
          <Link className="text-blue-600 hover:text-blue-400">
            Show all tag synonyms
          </Link>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between w-full">
          <div>
            <form className="flex items-center flex-1">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                  >
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                </div>
                <input
                onChange={(e)=>setSearchTag(e.target.value)}
                  type="text"
                  id="search"
                  className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded block w-full pl-10 p-2 outline-blue-500 dark:bg-[hsl(0,0%,17.5%)] dark:border-gray-600 dark:placeholder-gray-600 dark:text-[hsl(210,8%,82.5%)]"
                  placeholder="Filter by user"
                />
              </div>
            </form>
          </div>

          <div className="flex justify-end py-4 mt-2 items-center cursor-pointer">
            <div
              onClick={handlePopular}
              style={{
                background: tags === "Popular" && "hsl(210,8%,90%)",
                color: tags === "Popular" && "black",
                border: tags === "Popular" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] rounded-l text-[hsl(210,8%,45%)] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
            >
              Popular
            </div>
            <div
              onClick={handleName}
              style={{
                background: tags === "Name" && "hsl(210,8%,90%)",
                color: tags === "Name" && "black",
                border: tags === "Name" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] flex gap-1 text-[hsl(210,8%,45%)] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
            >
              <div>Name</div>
            </div>
            <div
              onClick={handleNew}
              style={{
                background: tags === "New" && "hsl(210,8%,90%)",
                color: tags === "New" && "black",
                border: tags === "New" && "1px solid hsl(210,8%,55%)",
              }}
              className="border border-[hsl(210,8%,85%)] dark:border-[hsl(210,4.5%,30.5%)] p-[10px] text-[hsl(210,8%,45%)] hover:text-[hsl(210,8%,35%)] hover:bg-[hsl(210,8%,97.5%)] dark:hover:bg-[hsl(0,0%,22.5%)] dark:hover:text-white"
            >
              New
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
             {dataTagsCard?.map(item=><div key={item.id}><TagCard props={item}/></div>)} 
      </div>
    </div>
  );
}
