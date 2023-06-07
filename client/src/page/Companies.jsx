import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import addressIcon from "../assets/Companies/addressIcon.png";
import companyIcon from "../assets/Companies/companyIcon.png";

export default function Companies() {
  return (
    <div className="">
      <div className="text-[27px]">Companies</div>
      <div className="text-[hsl(210,8%,45%)] text-xs">
        Learn about what its like to work at companies
      </div>
      <div className="flex gap-1 justify-center text-[hsl(210,8%,60%)] mt-4">
        <div className="flex items-center flex-1">
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
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded block w-full pl-10 p-2 outline-blue-500 dark:bg-[hsl(0,0%,17.5%)] dark:border-gray-600 dark:placeholder-gray-600 dark:text-[hsl(210,8%,82.5%)]"
              placeholder="Filter by user"
            />
          </div>
        </div>

        <div className="flex items-center flex-1">
          <div className="relative w-full">
            <input
              type="text"
              id="search"
              className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded block w-full pl-4 p-2 outline-blue-500 dark:bg-[hsl(0,0%,17.5%)] dark:border-gray-600 dark:placeholder-gray-600 dark:text-[hsl(210,8%,82.5%)]"
              placeholder="Search company by location"
            />
          </div>
        </div>

        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">
          Search
        </button>
        <div className="px-3 py-2 ml-4 border border-[hsl(210,8%,60%)] flex items-center justify-center gap-1">
          Filter by tag <AiFillCaretDown />
        </div>
      </div>
      <div className="mt-2 text-[15px] py-3 border-b boder-[hsl(210,8%,95%)] dark:border-[hsl(210,4.5%,30.5%)]">
        104 companies
      </div>

      <div>
        <div className="flex p-6 gap-6 border-b boder-[hsl(210,8%,95%)] dark:border-[hsl(210,4.5%,30.5%)]">
          <div className="w-4 mt-1 basis-[6%] overflow-hidden">
            <img
              className="object-cover w-full rounded"
              src="https://i.stack.imgur.com/9TiKB.jpg?s=128"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div>
              <Link className="text-blue-500 hover:text-blue-600">
                PayPay Corporation.
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-[hsl(210,8%,45%)] dark:text-[hsl(210,8%,70%)]">
              <div className="flex items-center gap-1">
                <div>
                  <img src={addressIcon} />
                </div>
                <div>No office location</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <img src={companyIcon} />
                </div>
                <div>Financial Technology</div>
              </div>
            </div>
            <div>
              <p className="text-[hsl(210,8%,25%)] text-xs dark:text-[hsl(210,8%,82.5%)]">
                About PayPay We are a fintech company that achieved more than
                55M users in 4 years since our launch in 2018, hugely
                diversifying employees from 50 different countries. The number
                of employees by now is more than 1,000 staff members, and yet,
                the company is still incomplete and at a growing stage. PayPay
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
                  Nextjs13
                </Link>
              </div>
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
                  Nextjs13
                </Link>
              </div>
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
                  Nextjs13
                </Link>
              </div>
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
                  Nextjs13
                </Link>
              </div>
              <div className="text-[hsl(27,90%,55%)] text-xs font-medium">New content</div>
            </div>
          </div>
        </div>
        <div className="flex p-6 gap-6 border-b boder-[hsl(210,8%,95%)] dark:border-[hsl(210,4.5%,30.5%)]">
          <div className="w-4 mt-1 basis-[6%] overflow-hidden">
            <img
              className="object-cover w-full rounded"
              src="https://i.stack.imgur.com/9TiKB.jpg?s=128"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <div>
              <Link className="text-blue-500 hover:text-blue-600">
                PayPay Corporation.
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-[hsl(210,8%,45%)]">
              <div className="flex items-center gap-1">
                <div>
                  <img src={addressIcon} />
                </div>
                <div>No office location</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <img src={companyIcon} />
                </div>
                <div>Financial Technology</div>
              </div>
            </div>
            <div>
              <p className="text-[hsl(210,8%,25%)] text-xs">
                About PayPay We are a fintech company that achieved more than
                55M users in 4 years since our launch in 2018, hugely
                diversifying employees from 50 different countries. The number
                of employees by now is more than 1,000 staff members, and yet,
                the company is still incomplete and at a growing stage. PayPay
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)]">
                  Nextjs13
                </Link>
              </div>
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)]">
                  Nextjs13
                </Link>
              </div>
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)]">
                  Nextjs13
                </Link>
              </div>
              <div>
                <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-1 text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)]">
                  Nextjs13
                </Link>
              </div>
              <div className="text-[hsl(27,90%,55%)] text-xs font-medium">New content</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
