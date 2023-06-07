import { Link } from "react-router-dom";
import cupIcon from "../../assets/iconUserDetail/cupIcon.png";
import { LogoGoogleIcloud } from "../IconsImg";
import iconLogo from "../../assets/iconUserDetail/iconLogo.png";
import goldMedal from "../../assets/iconUserDetail/goldMedal.png";
import silverMedal from "../../assets/iconUserDetail/silverMedal.png";
import bronzeMedal from "../../assets/iconUserDetail/bronzeMedal.png";
import { RxDotFilled } from "react-icons/rx"

export default function Profile() {
  return (
    <div className="flex gap-6 text-[hsl(210,8%,35%)]">
      <div className="basis-[22%] ">
        <div className="mb-4">
          <h3 className="text-black text-xl mb-2">Stats</h3>
          <div className="p-1 border border-[hsl(210,8%,85%)] flex flex-wrap rounded">
            <div className="basis-1/2 p-2">
              <div className="text-black">1,405,951</div>
              <div className="text-xs">reputation</div>
            </div>
            <div className="basis-1/2 p-2">
              <div className="text-black">1,405,951</div>
              <div className="text-xs">reputation</div>
            </div>
            <div className="basis-1/2 p-2">
              <div className="text-black">1,405,951</div>
              <div className="text-xs">reputation</div>
            </div>
            <div className="basis-1/2 p-2">
              <div className="text-black">1,405,951</div>
              <div className="text-xs">reputation</div>
            </div>
            <div className=" p-2">
              <div>
                <img src={cupIcon} />
              </div>
              <span>1,405,951</span>
              <span>reputation</span>
            </div>
          </div>
        </div>

        <div className="my-4 rounded">
          <h3 className="text-black text-xl mb-2">Collectives</h3>
          <div>
            <div className="p-1 border border-[hsl(210,8%,85%)] ">
              <Link className="p-2 flex gap-2">
                <LogoGoogleIcloud />
                <div>
                  <div className="text-black">Google Cloud</div>
                  <div className="text-xs">2021 • Member</div>
                </div>
              </Link>
            </div>
            <div className="p-1 border border-[hsl(210,8%,85%)]">
              <div className="p-2">
                <LogoGoogleIcloud />
              </div>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-black text-xl mb-2">Communities</h3>
          <div>
            <div className="p-1 border border-[hsl(210,8%,85%)] rounded">
              <Link className="m-2 flex justify-between items-center">
                <div className="flex items-center text-xs gap-1 text-blue-600">
                  <div className="w-3">
                    <img src={iconLogo} />
                  </div>
                  Stack Overflow
                </div>
                <div>1.2m</div>
              </Link>
              <Link className="m-2 flex justify-between items-center">
                <div className="flex items-center text-xs gap-1 text-blue-600">
                  <div className="w-3">
                    <img src={iconLogo} />
                  </div>
                  Stack Overflow
                </div>
                <div>1.2m</div>
              </Link>
              <Link className="m-2 flex justify-between items-center">
                <div className="flex items-center text-xs gap-1 text-blue-600">
                  <div className="w-3">
                    <img src={iconLogo} />
                  </div>
                  Stack Overflow
                </div>
                <div>1.2m</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="pb-3">
          <h3 className="text-black text-xl mb-2">About</h3>
          <div className="break-words ml-1">
            Nostrud ipsum quis occaecat ut nisi laboris occaecat reprehenderit
            ullamco. Aute non occaecat eiusmod voluptate reprehenderit cillum
            commodo Lorem pariatur. Commodo consequat laborum minim voluptate
            minim irure reprehenderit ullamco mollit ut culpa. Elit ad eiusmod
            dolor officia ea incididunt sunt consectetur velit nostrud. In velit
            ullamco ut excepteur labore commodo esse commodo sit culpa dolore
            nisi esse. Dolor sint aliquip sunt ad consectetur amet tempor
            aliquip. Incididunt reprehenderit occaecat ipsum non consectetur
            elit enim reprehenderit dolore enim. Labore id amet esse voluptate.
            Anim esse tempor ut sunt ipsum sint culpa tempor cillum ut do. Sunt
            fugiat pariatur consectetur nulla. Ullamco ad eiusmod adipisicing
            irure occaecat est labore in.
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-black text-xl py-3">Badges</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-1 border border-[hsl(210,8%,85%)] rounded">
                <div className="p-2">
                  <div className="flex gap-3"><img src={goldMedal} /><div><div className="text-lg font-semibold">518</div><div className="text-xs">gold badges</div></div></div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-yellow-400" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-yellow-400" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-yellow-400" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                  </div>
                </div>
              </div>

              <div className="p-1 border border-[hsl(210,8%,85%)] rounded">
                <div className="p-2">
                  <div className="flex gap-3"><img src={silverMedal} /><div><div className="text-lg font-semibold">518</div><div className="text-xs">gold badges</div></div></div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-gray-400" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-gray-400" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-gray-400" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                  </div>
                </div>
              </div>

              <div className="p-1 border border-[hsl(210,8%,85%)] rounded">
                <div className="p-2">
                  <div className="flex gap-3"><img src={bronzeMedal} /><div><div className="text-lg font-semibold">518</div><div className="text-xs">gold badges</div></div></div>
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-orange-300" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-orange-300" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                    <div className="flex justify-between items-center text-[10px] my-2"><Link className="flex items-center  pr-4 border border-[hsl(210,8%,85%)] bg-[hsl(210,8%,95%)] rounded"><RxDotFilled className="text-orange-300" size={18}/> Clearcase</Link> <div>Apr 21, 2012</div></div>
                  </div>
                </div>
              </div>

              

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
