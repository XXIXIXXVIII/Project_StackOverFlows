import { Link } from "react-router-dom";
import logoNoName from "../assets/logoNoName.png";

export default function FooterDefauLayout() {
  return (
    <div className="bg-[hsl(210,8%,15%)] w-full text-[hsl(210,8%,75%)] text-base pb-10">
      <div className="w-[84%] mx-auto flex justify-between pt-8 px-3 gap-8">
        <div>
          <img src={logoNoName} />
        </div>
        <nav className="flex flex-1 justify-between">
          <div>
            <Link className="font-semibold mb-3 block">STACK OVERFLOW</Link>
            <div className="font-normal text-xs flex flex-col gap-2 ">
              <Link className="hover:text-[hsl(210,8%,65%)]">Question</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Help</Link>
            </div>
          </div>

          <div>
            <Link className="font-semibold mb-3 block">PRODUCTS</Link>
            <div className="font-normal text-xs flex flex-col gap-2 ">
              <Link className="hover:text-[hsl(210,8%,65%)]">Teams</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Advertising</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Collectives</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Talent</Link>
            </div>
          </div>
          <div>
            <Link className="font-semibold mb-3 block">COMPANY</Link>
            <div className="font-normal text-xs flex flex-col gap-2 ">
              <Link className="hover:text-[hsl(210,8%,65%)]">About</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Press</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Work Here</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Legal</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Privacy Policy</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Terms of Service</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Contact Us</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Cookie Settings</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Cookie Policy</Link>
            </div>
          </div>
          <div>
            <Link className="font-semibold mb-3 block">STACK EXCHANGE NETWORK</Link>
            <div className="font-normal text-xs flex flex-col gap-2 ">
              <Link className="hover:text-[hsl(210,8%,65%)]">Technology</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Culture & recreation</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Life & arts</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Science</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Professional</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Business</Link>
              <Link className="hover:text-[hsl(210,8%,65%)] block mt-3">API</Link>
              <Link className="hover:text-[hsl(210,8%,65%)]">Data</Link>
            </div>
          </div>

        </nav>
        <div className="flex flex-col text-[11px] pl-20 justify-between">
          <div className="basis-[30%] flex justify-start gap-3 ">
            <Link className="hover:text-[hsl(210,8%,65%)]">Blog</Link>
            <a href="https://www.facebook.com/officialstackoverflow/" className="hover:text-[hsl(210,8%,65%)]">Facebook</a>
            <a href="https://twitter.com/stackoverflow" className="hover:text-[hsl(210,8%,65%)]">Twitter</a>
            <a href="https://www.linkedin.com/company/stack-overflow" className="hover:text-[hsl(210,8%,65%)]">Linkedin</a>
            <a href="https://www.instagram.com/thestackoverflow/" className="hover:text-[hsl(210,8%,65%)]">Instagram</a>
          </div>
          <div><span className="whitespace-normal">Site design / logo © 2023 Stack Exchange Inc; user contributions<br/> licensed under <Link className="underline">CC BY-SA</Link>. rev 2023.5.25.43461</span></div>
        </div>
      </div>
    </div>
  );
}
