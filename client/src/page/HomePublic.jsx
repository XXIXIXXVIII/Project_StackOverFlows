import buildIcon from "../assets/buildIcon.png";
import searchIconLogo from "../assets/searchIconLogo.png";
import groubIcon from "../assets/groubIcon.png";
import { Link } from "react-router-dom";
import "./index.css";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import logo from "../assets/so-logo.png";
import forTeams from "../assets/forTeams.png";
import LogoSlick from "../component/LogoSlick";
import logoForTeam from "../assets/logoForTeam.png";
import lock from "../assets/lock.png";
import logoCheck from "../assets/iconCheck.png";
import Zoom from "react-reveal/Zoom";
import PickHomePublic from "../component/PickHomePublic";


import loudspeaker from "../assets/pickHomePublic/cardIcon/loudspeaker.png";
import keyIcon from "../assets/pickHomePublic/cardIcon/keyIcon.png";
import Structured from "../assets/pickHomePublic/cardIcon/Structured.png";
import keyLockIcon from "../assets/pickHomePublic/cardIcon/keyLockIcon.png";
import chartIcon from "../assets/pickHomePublic/cardIcon/chartIcon.png";
import chatIcon from "../assets/pickHomePublic/cardIcon/chatIcon.png";
import noteIcon from "../assets/pickHomePublic/cardIcon/noteIcon.png";
import plusIcon from "../assets/pickHomePublic/cardIcon/plusIcon.png";
import settingIcon from "../assets/pickHomePublic/cardIcon/settingIcon.png";
import shieldIcon from "../assets/pickHomePublic/cardIcon/shieldIcon.png";
import changeIcon from "../assets/pickHomePublic/cardIcon/changeIcon.png";
import groubIcon1 from "../assets/pickHomePublic/cardIcon/groubIcon.png";
import mountain from "../assets/pickHomePublic/cardIcon/mountain.png";
import copyLinkIcon from "../assets/pickHomePublic/cardIcon/copyLinkIcon.png";
import askIcon from "../assets/pickHomePublic/cardIcon/askIcon.png";
import buildingIcon from "../assets/pickHomePublic/cardIcon/buildingIcon.png";
import logoGithub from "../assets/pickHomePublic/logoNetwork/logoGithub.png";
import logoJira from "../assets/pickHomePublic/logoNetwork/logoJira.png";
import logoMicrosofTeam from "../assets/pickHomePublic/logoNetwork/logoMicrosofTeam.png";
import logoOkta from "../assets/pickHomePublic/logoNetwork/logoOkta.png";
import logoSlack from "../assets/pickHomePublic/logoNetwork/logoSlack.png";
import keyColor from "../assets/pickHomePublic/keyColor.png";
import lockColor from "../assets/pickHomePublic/lockColor.png";
import groubColor from "../assets/pickHomePublic/groubColor.png";
import spColor from "../assets/pickHomePublic/spColor.png";
import iconTenTen from "../assets/pickHomePublic/iconTenTen.png";
import advertisingLogo from "../assets/advertisingLogo.png";
import collectivesLogo from "../assets/collectivesLogo.png";
import talentLogo from "../assets/talentLogo.png";
import stackExchange from "../assets/stackExchange.png";
import lockIconBottom from "../assets/lockIconBottom.png";



export default function HomePublic() {
  let [number, setNumber] = useState(0);
  let [flag, setFlag] = useState(true);
  let [value, setValue] = useState();
  let [priceBasic, setPriceBasic] = useState("7.70");
  let [priceBusiness, setPriceBusiness] = useState("15.40");

  


  // eslint-disable-next-line react-hooks/exhaustive-deps
  let array = [
    "developer",
    " data scientist",
    " mobile developer",
    " game developer",
    "system admin",
  ];

  useEffect(() => {
    const inter = setInterval(() => {
      if (number < array.length - 1) {
        setNumber((prev) => prev + 1);
      } else {
        setNumber(0);
      }
    }, 2000);
    setValue(array[number]);
    return () => clearInterval(inter);
  }, [array, number]);

  useEffect(() => {
    let inter1 = setInterval(() => {
      setFlag(!flag);
    }, 2000);
    return () => clearInterval(inter1);
  }, [flag]);

  const handleSwitch = () => {
    if (priceBasic === "7.70" && priceBusiness === "15.40") {
      setPriceBasic("6.50");
      setPriceBusiness("13.50");
    } else {
      setPriceBasic("7.70");
      setPriceBusiness("15.40");
    }
  };



  return (
    <div className="bg-slate-100 relative pt-12">
      <div className="w-16 h-16 bg-indigo-900 opacity-50 absolute -top-1 left-3 rounded-lg"></div>
      <div className="w-16 h-16 bg-fuchsia-400 opacity-50 absolute -top-1 left-3/4 rounded-lg"></div>
      <section className="backgroundTop bg-[hsl(210,8%,18%)] rounded-md w-[94%] mx-auto min-h-screen overflow-hidden relative">
        <div className="pt-12 flex mx-auto justify-center gap-9 relative">
          <div className="findSearch bg-[hsl(27,95%,90%)] w-[442px] h-[252px] rounded-md p-6 flex flex-col items-center justify-center gap-3 relative z-10">
            {/* <BsSearch size={48} className="text-[hsl(27,90%,50%)]" /> */}
            <img src={searchIconLogo} />
            <span className="text-center text-xl">
              Find the best answer to your technical question, help others
              answer theirs
            </span>
            <Link className="font-semibold text-white bg-[hsl(27,90%,50%)] rounded-md px-9 py-2 ">
              Join the community
            </Link>
            <div className="text-xs">
              <span>or</span>{" "}
              <Link className="hover:text-[hsl(27,90%,50%)] text-gray-400 underline">
                search content
              </Link>
            </div>
          </div>

          <div className="locksecure bg-[hsl(206,96%,90%)] w-[442px] h-[252px] rounded-md p-6 flex flex-col items-center gap-3 relative z-10">
            <img src={lock} />
            {/* <CiLock size={50} className="text-[hsl(206,100%,52%)]" /> */}
            <span className="text-center text-xl">
              Want a secure, private space for your technical knowledge?
            </span>
            <Link className="font-semibold text-white bg-[hsl(206,100%,52%)] rounded-md px-9 py-2">
              Discover Teams
            </Link>
          </div>
          <div>
            <img
              className="absolute left-28 top-52 "
              src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
            />
            <img
              className="absolute right-40 top-[-10px]"
              src="https://cdn.sstatic.net/Img/home/illo-code.svg?v=b7ee00fff9d8"
            />
          </div>
        </div>
        <div className="text-white font-bold text-[55px] text-center my-20 ">
          <div className="flex justify-center gap-4">
            <span>Every </span>
            <Fade className="inline" top opposite cascade when={flag}>
              <span className="text-[hsl(27,90%,50%)]">{value}</span>
            </Fade>
            <span>has a</span>
          </div>
          <span>tab open to Stack Overflow</span>
        </div>
        <span className="block w-16 h-2 mx-auto bg-[hsl(210,8%,45%)] rounded-lg">
          {" "}
        </span>
        <div className="text-white flex w-8/12 mx-auto">
          <div className="p-8 text-center">
            <div className="font-bold text-xl pb-1">100+ million</div>
            <span className="text-[hsl(210,8%,65%)] text-sm">
              monthly visitors to Stack Overflow & Stack Exchange
            </span>
          </div>
          <div className="p-8 text-center">
            <div className="font-bold text-xl pb-1">45.1+ billion</div>
            <span className="text-[hsl(210,8%,65%)] text-sm">
              Times a developer got help since 2008
            </span>
          </div>
          <div className="p-8 text-center">
            <div className="font-bold text-xl pb-1">191% ROI</div>
            <span className="text-[hsl(210,8%,65%)] text-sm">
              from companies using Stack Overflow for Teams
            </span>
          </div>
          <div className="p-8 text-center">
            <div className="font-bold text-xl pb-1">5,000+</div>
            <span className="text-[hsl(210,8%,65%)] text-sm">
              Stack Overflow for Teams instances active every day
            </span>
          </div>
        </div>
        <svg width="0" height="300">
          <defs>
            <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
              <path
                d="M 0,1
									L 0,0
									L 1,0
									L 1,1
									C .65 .8, .35 .8, 0 1
									Z"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="w-16 h-16 bg-fuchsia-400 opacity-50 absolute -top-1 left-3/4 rounded-lg"></div>
      </section>

      <section className="w-[70%] mx-auto flex relative -top-64 gap-8 ">
        <div className="showdownHomel bg-[hsl(27,100%,97%)] w-full rounded-lg shadow-2xl shadow-gray-300">
          <div className="flex flex-col items-center justify-center w-[85%] mx-auto py-12">
            <div className="w-52">
              <img src={logo} />
            </div>
            <div className="my-8">
              <img src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009" />
            </div>
            <span className="text-center font-semibold text-3xl">
              A public platform building the definitive collection of coding
              questions & answers
            </span>
            <br />
            <span className="text-center text-lg text-[hsl(210,8%,35%)] block mb-8">
              A community-based space to find and contribute answers to
              technical challenges, and one of the most popular websites in the
              world.
            </span>
            <Link className="font-semibold text-white bg-[hsl(27,90%,50%)] rounded-md px-9 py-2 ">
              Join the community
            </Link>
            <div className="text-xs mt-3 text-[hsl(210,8%,55%)]">
              <span>or</span>{" "}
              <Link className="hover:text-[hsl(27,90%,50%)] underline">
                search content
              </Link>
            </div>
          </div>
        </div>

        <div className="showdownHomel  bg-[hsla(208,100%,97%,1)]  w-full rounded-lg shadow-2xl shadow-gray-300">
          <div className="flex flex-col items-center justify-center w-[85%] mx-auto py-12">
            <div className="w-52">
              <img className="w-full" src={forTeams} />
            </div>
            <div className="my-8">
              <img src="https://cdn.sstatic.net/Img/home/illo-teams.svg?v=7e543f14fcc0" />
            </div>
            <span className="text-center font-semibold text-3xl block mt-3">
              A private collaboration & knowledge sharing SaaS platform for
              companies
            </span>
            <br />
            <span className="text-center text-lg text-[hsl(210,8%,35%)] block mb-8">
              A web-based platform to increase productivity, decrease cycle
              times, accelerate time to market, and protect institutional
              knowledge.
            </span>
            <div className="flex w-3/5 gap-4 items-center mb-3">
              <span className="border-[0.25px] border-[hsl(206,90%,69.5%)] basis-2/5 h-0 w-16"></span>
              <span className="text-[hsl(210,8%,35%)] text-xs whitespace-nowrap">
                Get started
              </span>
              <span className="border-[0.25px] border-[hsl(206,90%,69.5%)] basis-2/5  h-0  w-16"></span>
            </div>
            <div className="w-4/5 flex gap-2 font-semibold text-sm">
              <Link className=" text-white bg-[hsl(206,100%,52%)] rounded-md p-3 flex gap-1 items-center">
                For large organizations
                <img src={buildIcon} />
              </Link>
              <Link className=" text-white bg-[hsl(206,100%,52%)] rounded-md p-3 flex gap-1 items-center">
                For small teams
                <img src={groubIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full text-center -mt-24 ">
        <span className="text-lg mb-8 block text-[hsl(210,8%,45%)] ">
          Thousands of organizations around the globe use Stack Overflow for
          Teams
        </span>
        <div className="w-[80%] mx-auto object-cover h-64 ">
          <LogoSlick />
        </div>
      </section>

      <section className="relative w-4/5 mx-auto">
        <div className="w-[480px] mx-auto z-20 relative border-t-[1px] rounded overflow-hidden border-[hsl(27,90%,50%)] shadow-lg shadow-gray-500">
          <img src="https://cdn.sstatic.net/Img/product/teams/screens/illo-for-you.png?v=ab49238abe04" />
        </div>
        <div className="w-[320px] absolute top-16 left-16 border-t-[1px] rounded overflow-hidden border-[hsl(27,90%,50%)]  shadow-lg shadow-gray-500">
          <img src="https://cdn.sstatic.net/Img/product/teams/screens/illo-question.png?v=14c5863a5550" />
        </div>
        <div className="w-[320px] absolute top-16 right-16 border-t-[1px] rounded overflow-hidden border-[hsl(27,90%,50%)]  shadow-lg shadow-gray-500">
          <img src="https://cdn.sstatic.net/Img/product/teams/screens/illo-home-search.png?v=1ccd850cd929" />
        </div>
      </section>

      <section className="backgroundBot bg-[hsl(216,8%,12%)] rounded-lg w-[94%] mx-auto -mt-24 relative pb-24">
        <div className="w-48 mx-auto pt-40 pb-8">
          <img src={logoForTeam} />
        </div>
        <div className="text-[27px] font-bold text-white w-[740px] mx-auto text-center pb-8">
          <p>
            Capture your company’s knowledge and context in a discoverable
            format to{" "}
            <span className="text-[hsl(27,90%,50%)]">unblock your team</span>
          </p>
        </div>
        <div className="flex justify-center">
          <Link className="font-semibold text-white hover:bg-blue-600  bg-[hsl(206,100%,52%)] rounded-md px-8 py-3 text-sm">
            Take a tour of Teams
          </Link>
        </div>
        <div>
          <div></div>
        </div>

        <div className="flex w-4/5 mx-auto mt-9 pb-16">
          <Zoom>
            <div className="text-white text-center m-6 flex flex-col items-center gap-3">
              <div>
                <img src={logoCheck} />
              </div>
              <div>
                <p className="fbold text-[27px]">In1rease productivity</p>
              </div>
              <div>
                <span className="text-[hsl(210,8%,65%)]">
                  If somebody somewhere has the right answer, suddenly you have
                  it too. Collaborate better in a remote-first world.
                </span>
              </div>
            </div>
          </Zoom>
          <div className="text-white text-center m-6 flex flex-col items-center gap-3">
            <Zoom>
              <div>
                <img src={logoCheck} />
              </div>
              <div>
                <p className="font-bold text-2xl">Accelerate time to market</p>
              </div>
              <div>
                <span className="text-[hsl(210,8%,65%)]">
                  Shorten the time between initial idea and complete product.
                  Take delays and misinformation out of the equation.
                </span>
              </div>
            </Zoom>
          </div>
          <div className="text-white text-center m-6 flex flex-col items-center gap-3">
            <Zoom>
              <div>
                <img src={logoCheck} />
              </div>
              <div>
                <p className="font-bold text-2xl">
                  Protect institutional knowledge
                </p>
              </div>
              <div>
                <span className="text-[hsl(210,8%,65%)]">
                  People come and people go, but if you capture their
                  contributions in one central place, that expertise sticks
                  around.
                </span>
              </div>
            </Zoom>
          </div>
        </div>

        <div className="w-[78%] mx-auto text-center pt-16 mb-3 border-t border-[rgba(255,255,255,0.1)] text-white">
          <div className="mb-3">
            <span className="text-4xl">
              Ensure your company stays on course
            </span>
          </div>
          <div className="mb-3">
            <span>
              Here are just a few types of technologists that we help.
            </span>
          </div>
        </div>

        <div className="w-full pb-56">
          <PickHomePublic />
        </div>

        <label className="relative ml-6 pb-6 inline-flex items-center cursor-pointer gap-4">
          <span className="ml-3 text-sm font-normal text-white">
            Annual billing discount
          </span>
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={() => handleSwitch()}
          />
          <div className="w-11 h-6 bg-[hsl(210,8%,65%)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[171px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[hsl(140,40%,55%)]"></div>
        </label>

        <div className="w-[99%] mx-auto grid grid-flow-col gap-6 pb-10">
          {/* item1 */}
          <div>
            <div className="p-6 bg-white rounded-lg min-h-[560px] flex flex-col justify-between">
              <div className="text-sm">
                <div className="py-1 px-2 rounded inline bg-[hsl(27,90%,50%)] text-white">
                  Free
                </div>
                <div className="pb-6 border-b-[1px] border-[hsl(27,90%,55%)]">
                  <div className="font-bold text-[27px] mb-1 pt-7">Free</div>
                  <div className="text-[hsl(210,8%,60%)] text-sm mt-2">
                    No credit card required
                  </div>
                </div>
                <div className="flex gap-3 mb-3 mt-6 ">
                  <div className="mt-1 w-6">
                    <img className="w-full" src={loudspeaker} />
                  </div>
                  <div>
                    <span>ChatOps integrations - Slack & Microsoft Teams</span>
                  </div>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={keyIcon} />
                  </div>
                  <span>
                    Your own private space hosted on stackoverflowteams.com
                  </span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={Structured} />
                  </div>
                  <span>Structured and searchable knowledge base</span>
                </div>
              </div>
              <div className="text-center">
                <Link>
                  <div className="font-semibold text-white bg-[hsl(27,90%,50%)] rounded-md py-3 ">
                    Create a free Team
                  </div>
                </Link>
                <div className="text-[hsl(210,8%,65%)] text-sm pt-3">
                  Always free up to 50 teammates
                </div>
              </div>
            </div>
          </div>
          {/* item2 */}
          <div>
            <div className="p-6 bg-white rounded-lg min-h-[560px] flex flex-col justify-between">
              <div className="text-sm">
                <div className="py-1 px-2 rounded inline bg-[hsl(210,8%,80%)]">
                  Basic
                </div>
                <div className="pb-6 border-b-[1px] border-[hsl(210,8%,90%)]">
                  <div className="font-bold text-[27px] mb-1 pt-7">
                    ${priceBasic} USD
                  </div>
                  <div className="text-[hsl(210,8%,60%)] text-sm mt-2">
                    per teammate / month
                  </div>
                </div>
                <div className="flex gap-3 mb-3 mt-6">
                  <div className="mt-1 w-6">
                    <img className="" src={keyLockIcon} />
                  </div>
                  <span>Single sign-on (SSO) with SAML + Okta integration</span>
                </div>
                <div className="flex gap-3 mb-3 ">
                  <div className="mt-1 w-6">
                    <img className="" src={loudspeaker} />
                  </div>
                  <span>ChatOps integrations - Slack & Microsoft Teams</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={keyIcon} />
                  </div>
                  <span>
                    Your own private space hosted on stackoverflowteams.com
                  </span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={Structured} />
                  </div>
                  <span>Structured and searchable knowledge base</span>
                </div>
              </div>
              <div className="text-center">
                <Link>
                  <div className="font-semibold bg-[hsl(210,8%,90%)] rounded-md py-3 ">
                    Get Starteded
                  </div>
                </Link>
                <div className="text-[hsl(210,8%,65%)] text-sm pt-3">
                  Up to 250 teammates
                </div>
              </div>
            </div>
          </div>
          {/* item3 */}
          <div className="relative">
            <div className="absolute bg-[hsl(210,8%,95%)] flex w-full justify-between items-center py-2 -top-10 rounded-t-lg">
              <span className="ml-3 font-semibold">RECOMMENDED</span>
              <div className="mr-3">
                <img src={buildingIcon} />
              </div>
            </div>
            <div className="p-6 min-w-[332px] bg-white rounded-b-lg min-h-[560px] flex flex-col justify-between ">
              <div className="text-sm">
                <div className="py-1 px-2 rounded inline bg-[hsl(210,8%,25%)] text-white">
                  Business
                </div>
                <div className="pb-6 border-b-[1px] border-[hsl(210,8%,90%)]">
                  <div className="font-bold text-[27px] mb-1 pt-7">
                    ${priceBusiness} USD
                  </div>
                  <div className="text-[hsl(210,8%,60%)] text-sm mt-2">
                    per teammate / month
                  </div>
                </div>
                <div className="flex gap-3 mb-6 mt-6 text-[hsl(210,8%,55%)]">
                  <div className="w-6">
                    <img className="" src={plusIcon} />
                  </div>
                  <span>All the features of Basic plus…</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="w-6">
                    <img className="" src={noteIcon} />
                  </div>
                  <span>Long-form knowledge with Articles</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={changeIcon} />
                  </div>
                  <span>
                    Additional integrations — ChatOps, Jira,
                    <br /> GitHub & Okta
                  </span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={chatIcon} />
                  </div>
                  <span>Group content together into Collections</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={chartIcon} />
                  </div>
                  <span>Usage and adoption metrics</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={shieldIcon} />
                  </div>
                  <span>Priority customer support</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={settingIcon} />
                  </div>
                  <span>Content Health tools</span>
                </div>
              </div>
              <div className="text-center">
                <Link>
                  <div className="font-semibold text-white bg-[hsl(27,90%,50%)] rounded-md py-3 ">
                    Create a free Team
                  </div>
                </Link>
                <div className="text-[hsl(210,8%,65%)] text-sm pt-3">
                  Always free up to 50 teammates
                </div>
              </div>
            </div>
          </div>
          {/* item4 */}
          <div>
            <div className="p-6 bg-white rounded-lg min-h-[560px] w-[335px] flex flex-col justify-between">
              <div className="text-sm">
                <div className="py-1 px-2 rounded inline bg-[#2b2d6e] text-white">
                  Enterprise
                </div>
                <div className="pb-6 border-b-[1px] border-[hsl(210,8%,90%)]">
                  <div className="font-bold text-[27px] mb-1 pt-7">
                    Custom pricing
                  </div>
                  <div className="text-[hsl(210,8%,60%)] text-sm mt-2">
                    Let’s talk about what you need
                  </div>
                </div>
                <div className="flex gap-3 mb-6 mt-6 text-[hsl(210,8%,55%)]">
                  <div className="w-6">
                    <img className="" src={plusIcon} />
                  </div>
                  <span>All the features of Basic plus…</span>
                </div>
                <div className="flex gap-3 mb-3 mt-6">
                  <div className="mt-1 w-6">
                    <img className="" src={groubIcon1} />
                  </div>
                  <span>Unlimited Teams within your instance</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={mountain} />
                  </div>
                  <span>Flexible hosting options — cloud or on-premises</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={copyLinkIcon} />
                  </div>
                  <span>Robust read and write API</span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={askIcon} />
                  </div>
                  <span>
                    Your own customer success and community building
                    representative
                  </span>
                </div>
                <div className="flex gap-3 mb-3">
                  <div className="mt-1 w-6">
                    <img className="" src={shieldIcon} />
                  </div>
                  <span>99.5% uptime SLA and priority support</span>
                </div>
              </div>
              <div className="text-center">
                <Link>
                  <div className="font-semibold text-white bg-[hsl(27,90%,50%)] rounded-md py-3 ">
                    Create a free Team
                  </div>
                </Link>
                <div className="text-[hsl(210,8%,65%)] text-sm pt-3">
                  Always free up to 50 teammates
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[86%] text-white text-[17px] mx-auto flex gap-6 py-8">
          <div className="p-6 border border-[rgba(255,255,255,0.1)] rounded-lg text-center">
            <span>
              A Forrester Consulting study shows{" "}
              <strong className="text-blue-500 font-bold text-xl">
                191% return on investment
              </strong>{" "}
              with Stack Overflow for Teams.
            </span>
          </div>
          <div className="p-6 border border-[rgba(255,255,255,0.1)] rounded-lg text-center">
            <span>
              The world’s largest telecom firm{" "}
              <strong className="text-blue-500 font-bold text-xl">
                saved $10M
              </strong>{" "}
              in deflected support cases with our centralized knowledge base.
            </span>
          </div>
          <div className="p-6 border border-[rgba(255,255,255,0.1)] rounded-lg text-center">
            <span>
              Subject-matter experts at software platform Unqork had{" "}
              <strong className="text-blue-500 font-bold text-xl">
                27% more time
              </strong>{" "}
              to work on projects after using Teams.
            </span>
          </div>
          <Link className="p-6 border border-[rgba(255,255,255,0.1)] rounded-lg text-center hover:shadow-2xl whitespace-nowrap">
            <div>
              <span>
                You can save time and money
                <br />
                with Stack Overflow for Teams.
              </span>
            </div>
            <div className="py-2 mt-5 px-8 rounded-lg border text-blue-500 border-blue-500 hover:border-blue-700 hover:text-blue-700">
              <span className="text-sm font-semibold">Calculate your ROI</span>
            </div>
          </Link>
        </div>

        <div className="flex gap-2 pt-6">
          <div className="w-[66%]">
            <div>
              <img src="	https://cdn.sstatic.net/Img/home/illo-integrations-left.png?v=0a97d470e180" />
            </div>
            <div className="text-white flex gap-2 justify-center items-center">
              <div className="w-8 h-8 flex font-semibold text-xl ml-24">
                <img src={logoMicrosofTeam} />
              </div>
              Microsoft Teams
            </div>
          </div>
          <div className="text-white w-full h-full m-auto">
            <div className="w-full flex flex-col justify-center m-auto text-center px-6">
              <div className="mb-3">
                <span className="font-bold text-[2.2rem]">
                  Integrates with and improves other tools
                </span>
              </div>
              <div className="mb-6">
                <p className="text-[hsl(210,8%,75%)]">
                  All plans come with integrations for ChatOps tools{" "}
                  <a
                    className="text-blue-500 text-lg"
                    href="https://stackoverflow.co/teams/integrations/slack/"
                  >
                    Slack
                  </a>{" "}
                  &{" "}
                  <a
                    className="text-blue-500 text-lg"
                    href="https://stackoverflow.co/teams/integrations/microsoft-teams/"
                  >
                    Microsoft Teams
                  </a>{" "}
                  in order to cut down on pings, limit distractions and make the
                  tools even more powerful. Business and Enterprise customers
                  get access to Jira, GitHub & Okta integrations.
                </p>
              </div>
              <ul className="flex flex-auto w-[60%] mx-auto gap-4">
                <li className="bg-white rounded-lg w-16 h-16">
                  <a href="https://stackoverflow.com/teams/integrations/slack">
                    <img
                      className="w-full h-full p-2 object-cover"
                      src={logoSlack}
                    />
                  </a>
                </li>
                <li className="bg-white rounded-lg w-16 h-16">
                  <a href="https://stackoverflow.co/teams/integrations/microsoft-teams/">
                    <img
                      className="w-full h-full p-2 object-cover"
                      src={logoMicrosofTeam}
                    />
                  </a>
                </li>
                <li className="bg-white rounded-lg w-16 h-16">
                  <a
                    href="https://stackoverflow.co/teams/integrations/github/"
                    className="block w-[70%] h-[70%] mx-auto mt-3"
                  >
                    <img className=" object-cover" src={logoGithub} />
                  </a>
                </li>
                <li className="bg-white rounded-lg w-16 h-16">
                  <a
                    href="https://stackoverflow.co/teams/integrations/jira/"
                    className="block w-[70%] h-[70%] mx-auto mt-3"
                  >
                    <img className=" object-cover" src={logoJira} />
                  </a>
                </li>
                <li className="bg-white rounded-lg w-16 h-16">
                  <a
                    href="https://stackoverflow.co/teams/integrations/okta/"
                    className="block w-[70%] h-[70%] mx-auto mt-3"
                  >
                    <img className=" object-cover" src={logoOkta} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[66%] text-white flex flex-col gap-3">
            <div className="w-8 h-8 flex font-semibold text-xl ml-24">
              <img src={logoSlack} />
              Slack
            </div>
            <div>
              <img src="https://cdn.sstatic.net/Img/home/illo-integrations-right.png?v=90c26b9154c7" />
            </div>
          </div>
        </div>
        <div className="text-[hsl(210,8%,75%)] text-center text-lg mt-5">
          Some of the premium features available with paid tiers
        </div>
      </section>

      <section>
        <div className="flex flex-auto w-[63%] mx-auto justify-center items-center gap-5 -mt-12 relative z-20">
          <Fade top cascade>
            <div className="p-6 flex flex-col flex-1 text-center justify-center items-center bg-[hsl(210,8%,85%)] rounded-md gap-3 shadow-lg">
              <img src={keyColor} />
              <span>Robust read and write API</span>
            </div>
            <div className="p-6 flex flex-col flex-1 text-center justify-center items-center bg-[hsl(210,8%,85%)] rounded-md gap-3 shadow-lg">
              <img src={lockColor} />
              <span>Single sign-on with AD or SAML</span>
            </div>
            <div className="p-6 flex flex-col flex-1 text-center justify-center items-center bg-[hsl(210,8%,85%)] rounded-md gap-3 shadow-lg">
              <img src={groubColor} />
              <span>Your own customer success representative</span>
            </div>
            <div className="p-6 flex flex-col flex-1 text-center justify-center items-center bg-[hsl(210,8%,85%)] rounded-md gap-3 shadow-lg">
              <img src={spColor} />
              <span>99.5% uptime SLA and priority support</span>
            </div>
          </Fade>
        </div>

        <div className="grid grid-flow-col w-[85%] mx-auto gap-10 mt-28 pb-32">
          <div>
            <div className="mb-3">
              <img src={iconTenTen} />
            </div>
            <div className="pb-12 block">
              <p className="text-[hsl(210,8%,35%)]">
                Stack Overflow for Teams has been a resource for our entire
                company. Not only for developers to solve problems, it’s also
                enabled our sales field to answer technical questions that help
                them close deals.
              </p>
            </div>
            <div>
              <div className="">
                <span className="text-base font-bold pt-4 border-t border-[hsl(210,8%,90%)]">
                  Director of Product Management
                </span>
              </div>
              <div>
                <span>Microsoft</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <img src={iconTenTen} />
            </div>
            <div className="pb-12 block">
              <p className="text-[hsl(210,8%,35%)]">
                Engineers should help solve the hardest questions, the unknowns,
                where being familiar with how the product was built is
                essential. But we don’t want to keep answering solved problems
                over and over again. That’s where Stack Overflow for Teams
                really helps.
              </p>
            </div>
            <div>
              <div className="">
                <span className="text-base font-bold pt-4 border-t border-[hsl(210,8%,90%)]">
                  Director of Engineering
                </span>
              </div>
              <div>
                <span>Elastic Cloud</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <img src={iconTenTen} />
            </div>
            <div className="pb-12 block">
              <p className="text-[hsl(210,8%,35%)]">
                As we started to use [Stack Overflow for Teams] and saw how nice
                it was to have a repository of information, we started to see it
                spread to other teams. Our customer support team started using
                it, our people success team started using it, next thing we
                knew, we had [Slack] integrations all over the place.
              </p>
            </div>
            <div>
              <div className="">
                <span className="text-base font-bold pt-4 border-t border-[hsl(210,8%,90%)]">
                  Engineering
                </span>
              </div>
              <div>
                <span>Expensify</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <img src={iconTenTen} />
            </div>
            <div className="pb-12 block">
              <p className="text-[hsl(210,8%,35%)] font-medium text-lg">
                What we love about Stack Overflow for Teams is that it’s a very
                dynamic tool…there’s just so many ways to use this as a liaison
                between different teams and different knowledge bases.
              </p>
            </div>
            <div>
              <div className="">
                <span className="text-base font-bold pt-4 border-t border-[hsl(210,8%,90%)]">
                  Software Engineer
                </span>
              </div>
              <div>
                <span>Box</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen relative">
        <div className="w-[40%] mx-auto flex flex-col justify-center items-center text-center">
          <div className="w-48 pb-8 border-b border-gray-400">
            <img src={logo} />
          </div>
          <div className="text-[2rem] font-normal mt-8">
            Additional products that reach and engage developers &
            technologists…
          </div>
        </div>
        <div className="w-1/2 mx-auto flex flex-wrap justify-center gap-6 my-8">
          <Link className="basis-[48%] px-6 py-8 bg-white rounded-xl shadow-lg flex flex-col gap-6 justify-center items-center text-center text-lg">
            <div>
              <img className="object-cover w-full" src={advertisingLogo} />
            </div>
            <div className="text-[hsl(210,8%,45%)]">
              Reach the world’s largest audience of developers and technologists
            </div>
          </Link>
          <Link className="basis-[48%] px-6 py-8 bg-white rounded-xl shadow-lg flex flex-col gap-6 justify-center items-center text-center text-lg">
            <div>
              <img src={collectivesLogo} />
            </div>
            <div className="text-[hsl(210,8%,45%)]">
              Connecting communities with the specific technologies they use the
              most
            </div>
          </Link>
          <Link className="basis-1/2 px-6 py-8 bg-white rounded-xl shadow-lg flex flex-col gap-8 justify-center items-center text-center text-lg">
            <div>
              <img src={talentLogo} />
            </div>
            <div className="text-[hsl(210,8%,45%)]">
              Build your employer brand
            </div>
          </Link>
        </div>
        <Link className="mt-14 block">
          <div className="font-semibold text-white bg-[hsl(27,90%,50%)] rounded-md py-3 w-52 px-8 hover:bg-orange-600 mx-auto">
            About the company
          </div>
        </Link>
        <div className="text-center mt-5">
          <Link className=" text-sm hover:bg-gray-400  pt-3 px-8 ">
            <span className="text-gray-500">Want to work here? </span>
            <span className="text-blue-500">Current job openings </span>
          </Link>
        </div>
        <div className="bg-[url(https://cdn.sstatic.net/Img/home/illo-about-left.png?v=586391c9162b)] w-96 h-96 bg-cover top-5 absolute"></div>
        <div className="bg-[url(https://cdn.sstatic.net/Img/home/illo-about-right.png?v=209eaa986298)] w-96 h-96 right-0 top-5 bg-cover absolute"></div>
      </section>

      <section className="relative">
        <div className="w-[94%] rounded-md bg-[hsl(209,100%,26%)] mx-auto">
          <div className="w-20 h-20 bg-blue-600 opacity-50 absolute top-[60%] left-14 rounded-lg"></div>
          <div className="w-8 h-8 bg-blue-600 opacity-50 absolute top-[63%] left-44 rounded"></div>
          <div className="w-20 h-20 bg-blue-600 opacity-50 absolute top-[40%] left-72 rounded-lg"></div>
          <div className="w-14 h-14 bg-blue-600 opacity-50 absolute top-[50%] left-44 rounded-lg"></div>
          <div className="w-8 h-8 bg-blue-600 opacity-50 absolute top-[45%] left-20 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[35%] left-56 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[75%] left-64 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[37%] left-36 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[26%] left-44 rounded-lg"></div>

          <div className="w-20 h-20 bg-blue-600 opacity-50 absolute top-[60%] right-14 rounded-lg"></div>
          <div className="w-8 h-8 bg-blue-600 opacity-50 absolute top-[63%] right-44 rounded"></div>
          <div className="w-20 h-20 bg-blue-600 opacity-50 absolute top-[40%] right-72 rounded-lg"></div>
          <div className="w-14 h-14 bg-blue-600 opacity-50 absolute top-[50%] right-44 rounded-lg"></div>
          <div className="w-8 h-8 bg-blue-600 opacity-50 absolute top-[45%] right-20 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[35%] right-56 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[75%] right-64 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[37%] right-36 rounded-lg"></div>
          <div className="w-11 h-11 bg-blue-600 opacity-50 absolute top-[26%] right-44 rounded-lg"></div>
          <div className="pt-56 pb-24 flex relative">
            <Zoom>
              <div className="flex flex-wrap basis-1/4 mx-auto justify-center gap-5">
                <div className="flex items-center">
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-32 h-32 bg-white rounded ml-10">
                      <img
                        className="p-6"
                        src="https://cdn.sstatic.net/Sites/apple/Img/apple-touch-icon.png?v=daa7ff1d953e"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-16 h-16 bg-white rounded ml-10">
                      <img
                        className="p-4"
                        src="https://cdn.sstatic.net/Sites/unix/Img/apple-touch-icon.png?v=5cf7fe716a89"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-16 h-16 bg-white rounded ml-10">
                      <img
                        className="p-4"
                        src="https://cdn.sstatic.net/Sites/ai/Img/apple-touch-icon.png?v=f14d741b295c"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-16 h-16 bg-white rounded ml-10">
                      <img
                        className="p-4"
                        src="https://cdn.sstatic.net/Sites/softwareengineering/Img/apple-touch-icon.png?v=5e581fc45e58"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-32 h-32 bg-white rounded ml-10">
                      <img
                        className="p-6"
                        src="https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon.png?v=e16e1315edd6"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-16 h-16 bg-white rounded ml-10">
                      <img
                        className="p-4"
                        src="https://cdn.sstatic.net/Sites/salesforce/Img/apple-touch-icon.png?v=4c87c90207b3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>

            <div className="flex flex-col flex-1 items-center text-white">
              <div className="pb-8 mb-8 border-b border-b-gray-500 inline">
                <img src={stackExchange} />
              </div>
              <div className="w-[80%] text-center mb-6">
                <p className="text-4xl">
                  Explore technical topics and other disciplines across 170+ Q&A
                  communities
                </p>
              </div>
              <div className="w-[82%] text-center">
                <p>
                  From{" "}
                  <a
                    href="https://serverfault.com/"
                    className="text-[hsl(206,90%,69.5%)] hover:text-blue-500"
                  >
                    Server Fault
                  </a>{" "}
                  to{" "}
                  <a
                    className="text-[hsl(206,90%,69.5%)] hover:text-blue-500"
                    href="https://superuser.com/"
                  >
                    Super User
                  </a>
                  , much of the Stack Exchange network continues our mission to
                  empower the world to develop technology through collective
                  knowledge. Other sites on the Stack Exchange network further
                  encourage knowledge sharing across topics such as cooking and
                  medicine.
                </p>
              </div>
              <a
                href="https://stackexchange.com/sites"
                className="mt-14 block text-black"
              >
                <div className="font-semibold bg-[#ffb500] rounded-md py-3 w-56 px-8 hover:bg-[#ffb700b0] mx-auto">
                  Explore the network
                </div>
              </a>
            </div>

            <Zoom>
              <div className="flex flex-wrap basis-1/4 mx-auto justify-center gap-5">
                <div className="flex items-center mt-4">
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-24 h-24 bg-white rounded ml-10">
                      <img
                        className="p-6"
                        src="https://cdn.sstatic.net/Sites/serverfault/Img/apple-touch-icon.png?v=6c3100d858bb"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-16 h-16 bg-white rounded ml-10">
                      <img
                        className="p-4"
                        src="	https://cdn.sstatic.net/Sites/superuser/Img/apple-touch-icon.png?v=0ad5b7a83e49"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-[60%] mx-auto">
                  <div className="w-1/2 py-4 rounded-xl">
                    <div className="w-16 h-16 bg-white rounded ">
                      <img
                        className="p-4"
                        src="	https://cdn.sstatic.net/Sites/dba/Img/apple-touch-icon.png?v=cdcd5ff7b29e"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 py-4 rounded-xl">
                    <div className="w-32 h-32 bg-white rounded">
                      <img
                        className="p-6"
                        src="https://cdn.sstatic.net/Sites/quantumcomputing/Img/apple-touch-icon.png?v=2af3cc2b87e8"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-16 h-16 bg-white rounded ml-10">
                      <img
                        className="p-4"
                        src="https://cdn.sstatic.net/Sites/gamedev/Img/apple-touch-icon.png?v=0cfb55927bd2"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 p-4 rounded-xl">
                    <div className="w-24 h-24 bg-white rounded">
                      <img
                        className="p-3"
                        src="https://cdn.sstatic.net/Sites/networkengineering/Img/apple-touch-icon.png?v=d66b1118cec8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
        <div className="custom-shape-divider-top-1685097279">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <div className="w-3/4 flex items-center mx-auto justify-center pt-8 pb-16 mt-8 gap-5">
        <img src={lockIconBottom} />{" "}
        <div>
          Build a <span className="font-semibold">private community</span> to
          share technical or non-technical knowledge.{" "}
        </div>
        <Link className="py-2 px-5 border border-blue-400 rounded-md hover:bg-blue-100 hover:border-blue-500 ">
          Create a free Team
        </Link>
      </div>
    </div>
  );
}
