import { Link } from "react-router-dom";

export default function Questions() {
  return (
    <div className="mx-auto py-4 flex gap-5">
      <div className="basis-[16%] flex flex-col items-end gap-1">
        <div>0 votes</div>
        <div className="text-gray-500">0 answers</div>
        <div className="text-gray-500">2 views</div>
      </div>
      <div className="flex-2">
        <Link className="text-[17px] text-blue-600 hover:text-blue-400">
          Why is the useTranslation hook not working even after correctly
          wrapping appWithTranslation?
        </Link>
        <div className="flex justify-between items-center">
          <div className="mt-1 flex gap-1">
            <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-[4.8px] text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
              Nextjs13
            </Link>
            <Link className="bg-[hsl(205,46%,92%)] text-[hsl(205,47%,42%)] rounded px-[6px] py-[4.8px] text-xs hover:text-[hsl(205,46%,32%)] hover:bg-[hsl(205,53%,88%)] dark:bg-[hsl(205,14%,28%)] dark:text-[hsl(205,46.5%,73.5%)] dark:hover:bg-[hsl(205,17.5%,32%)] dark:hover:text-[hsl(205,49.5%,87%)]">
              Nextjs13
            </Link>
          </div>
          <div className="flex gap-1">
            <Link className="w-4 h-4 overflow-hidden">
              <img className="object-cover" src="https://smilemedia.vn/wp-content/uploads/2022/09/cach-chup-hinh-the-dep.jpeg"/>
            </Link>
            <Link className="text-blue-500 hover:text-blue-300">
            Weihong Saw
            </Link>
            <div>
              <span className="text-[hsl(210,8%,35%)] font-medium dark:text-[hsl(210,7%,78.5%)]">1</span> <Link className="text-[hsl(210,8%,45%)] dark:text-[hsl(210,8%,70%)]">asked 1 min ago</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
