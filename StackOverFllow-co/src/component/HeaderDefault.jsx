import { HiOutlineMenu } from "react-icons/hi";
import { LogoStackOverFlow } from "./Icons/LogoStackOverFlow";

export default function HeaderDefault() {
  return (
<div className="w-[92%] mx-auto text-base flex justify-between text-black">
      <div className="flex items-center gap-8 py-4 text-[#525960]">
        <div>
          <HiOutlineMenu size={30}/>
        </div>
        <div className="">
          <LogoStackOverFlow color={"#0C0D0E"}/>
        </div>
        <div>Our products</div>
        <div>Our Company</div>
        <div>Careers</div>
        <div>Careers</div>
      </div>
      <div className="flex py-4 justify-center items-center gap-7 text-base">
        <div className="text-[#525960]">Follow us</div>
        <div className="mr-6 px-3 py-1 bg-[#0074cc] rounded text-white">Contact</div>
      </div>
</div>
  );
}
