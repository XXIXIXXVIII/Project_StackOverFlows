import penIcon from "../assets/penIcon.png";
import exchangeIcon from "../assets/exchangeIcon.png";
import metaStackIcon from "../assets/metaStackIcon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import privateClient from './../configAPIClient/privateClient';

export default function NavBarRightHome() {
  const [userFollowTag, setUserFollowTag]= useState()
  const userId = useSelector(state=>state.auth.login.currentUser?.id)

  const fetchTag = async()=>{
    try {
      const result = await privateClient.get(`/user/${userId}`)
    setUserFollowTag(result.data.Tags)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchTag()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="flex flex-col gap-5 dark:text-white text-sm">
      <div className="bg-[hsl(47,87%,94%)]">
        <div className="px-[15px] py-3 bg-[hsl(47,83%,91%)] font-bold text-xs border border-[hsl(47,65%,84%)] text-[hsl(210,8%,35%)] dark:bg-[hsl(47,19%,27%)] dark:text-white dark:border-[hsl(47,30.5%,31%)]">
          <span>The Overflow Blog</span>
        </div>

        <div className="flex gap-3 flex-col py-3 dark:bg-[#474336]">
          <div className="flex gap-2 px-4">
            <div className="w-6 mt-1 text-white">
              <img src={penIcon} />
            </div>
            <div>How to use marketing techniques to build a better resume</div>
          </div>
          <div className="flex gap-2 px-4 dark:bg-[#474336]">
            <div className="w-6 mt-1">
              <img src={penIcon} />
            </div>
            <div>How to use marketing techniques to build a better resume</div>
          </div>
        </div>

        <div>
          <div className="px-[15px] py-3 bg-[hsl(47,83%,91%)] font-bold text-xs border border-[hsl(47,65%,84%)] text-[hsl(210,8%,35%)] dark:bg-[hsl(47,19%,27%)] dark:text-white dark:border-[hsl(47,30.5%,31%)]">
            <span>Featured on Meta</span>
          </div>

          <div className="flex gap-3 flex-col py-3 dark:bg-[#474336]">
            <div className="flex gap-2 px-4">
              <div className="w-6 text-blue-500">
                <img src={exchangeIcon} />
              </div>
              <div>AI/ML Tool examples part 3 - Title-Drafting Assistant</div>
            </div>

            <div className="flex gap-2 px-4">
              <div className="w-6 text-blue-500">
                <img src={exchangeIcon} />
              </div>
              <div>AI/ML Tool examples part 3 - Title-Drafting Assistant</div>
            </div>

            <div className="flex gap-2 px-4">
              <div className="w-6 text-blue-500">
                <img src={exchangeIcon} />
              </div>
              <div>AI/ML Tool examples part 3 - Title-Drafting Assistant</div>
            </div>

            <div className="flex gap-2 px-4">
              <div className="w-6 text-blue-500">
                <img src={metaStackIcon} />
              </div>
              <div>AI/ML Tool examples part 3 - Title-Drafting Assistant</div>
            </div>
            <div className="flex gap-2 px-4">
              <div className="w-6 text-blue-500">
                <img src={metaStackIcon} />
              </div>
              <div>AI/ML Tool examples part 3 - Title-Drafting Assistant</div>
            </div>
            <div className="flex gap-2 px-4">
              <div className="w-6 text-blue-500">
                <img src={metaStackIcon} />
              </div>
              <div>AI/ML Tool examples part 3 - Title-Drafting Assistant</div>
            </div>
            <div className="flex gap-2 px-4">
              <div className="w-6 text-blue-500">
                <img src={metaStackIcon} />
              </div>
              <div>AI/ML Tool examples part 3 - Title-Drafting Assistant</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[hsl(210,8%,85%)] rounded dark:border-[hsl(210,4%,26%)]">
        <div className="bg-[hsl(210,8%,97.5%)] px-[15px] py-3 border-b text-[hsl(210,8%,35%)] text-[15px] border-[hsl(210,8%,85%)] dark:bg-[hsl(0,0%,22.5%)] dark:border-[hsl(210,4%,26%)] dark:text-[hsl(210,7%,78.5%)]">Custom Filters</div>
        <div className="px-[15px] py-3 text-[hsl(206,100%,40%)]">
          <Link>Create a custom filter</Link>
        </div>
      </div>

      <div  className="border border-[hsl(210,8%,85%)] rounded dark:border-[hsl(210,4%,26%)]">
        <div className="bg-[hsl(210,8%,97.5%)] px-[15px] py-3 border-b text-[hsl(210,8%,35%)] text-[15px] border-[hsl(210,8%,85%)] flex justify-between dark:bg-[hsl(0,0%,22.5%)] dark:border-[hsl(210,4%,26%)] dark:text-[hsl(210,7%,78.5%)]"><div>Watched Tags</div><div className="cursor-pointer">edit</div></div>
        <div className="px-[15px] py-5">
        {userFollowTag?.map(tag=><Link key={tag.id} onClick={()=>fetchTag()} to={`/questions/tagged/${tag.nameTag}`} className=" ml-1 bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
              {tag.nameTag}
            </Link>)}
        </div>
      </div>

    </div>
  );
}
