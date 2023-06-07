import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

export default function LoginWithGmail() {
  return (
    <div className="flex flex-col gap-2">
      <a
          href="/"
          className="p-[7px] w-full flex gap-2 bg-white hover:bg-[hsl(210,8%,97.5%)] items-center justify-center text-xs border-[1px] rounded-md border-[hsl(210,8%,85%)]"
        >
          <FcGoogle size={20} />
          <span>Log in with Google</span>
        </a>
        <a
          href="/"
          className="p-[7px] w-full flex gap-2 bg-[hsl(210,8%,20%)] hover:bg-[hsl(210,8%,15%)] active:bg-black text-white items-center justify-center text-xs border-[1px] rounded-md border-[hsl(210,8%,85%)]"
        >
          <BsGithub size={20} />
          <span>Log in with GitHub</span>
        </a>
        <a
          href="/"
          className="p-[7px] w-full flex gap-2 text-white bg-[#385499] hover:bg-[#314a86] active:bg-[#2a4074] items-center justify-center text-xs border-[1px] rounded-md border-[hsl(210,8%,85%)]"
        >
          <AiFillFacebook size={20} />
          <span>Log in with Facebook</span>
        </a>
    </div>
  )
}
