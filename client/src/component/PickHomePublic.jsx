import { useState } from "react";
import devOpsEngineers from "../assets/pickHomePublic/DevOps engineers.png";
import dataScientists from "../assets/pickHomePublic/Data scientists.png";
import Software from "../assets/pickHomePublic/Software engineers.png";
import spIMG from "../assets/pickHomePublic/Support teams.png";
import EngineeringImg from "../assets/pickHomePublic/Engineering leaders.png";


import pickDevOpsEngineers from "../assets/pickHomePublic/Pick DevOps engineers.png";
import pickDataScientists from "../assets/pickHomePublic/Pick Data scientists.png";
import pickSoftwareImg from "../assets/pickHomePublic/Pick Software engineers.png";
import pickSpIMG from "../assets/pickHomePublic/Pick Support teams.png";
import pickEngineeringImg from "../assets/pickHomePublic/Pick Engineering leaders.png";


import "./index.css";

export default function PickHomePublic() {
  let [pickDev, setPickDev] = useState(false);
  let [pickData, setPickData] = useState(false);
  let [pickSoftware, setPickSoftware] = useState(true);
  let [pickSp, setPickSp] = useState(false);
  let [pickEngineering, setPickEngineering] = useState(false);

  let handlePickDev = () => {
    setPickDev(true);
    setPickData(false);
    setPickSoftware(false);
    setPickSp(false);
    setPickEngineering(false);
  };
  let handlePickData = () => {
    setPickDev(false);
    setPickData(true);
    setPickSoftware(false);
    setPickSp(false);
    setPickEngineering(false);
  };
  let handlePickSoftware = () => {
    setPickDev(false);
    setPickData(false);
    setPickSoftware(true);
    setPickSp(false);
    setPickEngineering(false);
  };
  let handlePickSp = () => {
    setPickDev(false);
    setPickData(false);
    setPickSoftware(false);
    setPickSp(true);
    setPickEngineering(false);
  };
  let handlePickEngineering = () => {
    setPickDev(false);
    setPickData(false);
    setPickSoftware(false);
    setPickSp(false);
    setPickEngineering(true);
  };

  return (
    <div className="w-[75%] h-72 mx-auto grid grid-flow-col text-white gap-0 py-8 items-center">

      <div  className="wrapper"  onClick={handlePickDev}>
        <div style={{background:pickDev?"hsl(210,8%,25%)":""}} className="abc">
          <div className="pb-6">
            {!pickDev?<img src={devOpsEngineers} />:<img src={pickDevOpsEngineers}/>}
          </div>
          <div>
            <span className="text-xl font-bold">DevOps engineers</span>
          </div>
          {pickDev && (
            <div className="pb-4 pt-2">
              <p className="text-base px-6">
                Shipping new products and features requires teamwork and{" "}
                coordination. Forget checklists and
                long docs no one ever reads.
              </p>
            </div>
          )}
        </div>
      </div>


      <div className="wrapper" onClick={handlePickData}>
        <div style={{background:pickData?"hsl(210,8%,25%)":""}} className="abc">
          <div className="pb-6">
          {!pickData?<img src={dataScientists} />:<img src={pickDataScientists}/>}
          </div>
          <div>
            <span className="text-xl font-bold">DevOps engineers</span>
          </div>
          {pickData && (
            <div className="pb-4 pt-2">
              <p className="text-base px-6">
              Business decisions are better when backed by data. Give visibility to the data that support your strategies.
              </p>
            </div>
          )}
        </div>
      </div>


      <div className="wrapper" onClick={handlePickSoftware}>
        <div style={{background:pickSoftware?"hsl(210,8%,25%)":""}} className="abc">
          <div  className="pb-6">
          {!pickSoftware?<img src={Software} />:<img src={pickSoftwareImg}/>}
          </div>
          <div>
            <span className="text-xl font-bold">DevOps engineers</span>
          </div>
          {pickSoftware && (
            <div className="pb-4 pt-2">
              <p className="text-base px-6">
              Help engineers be more efficient an streamline knowledge sharing using  a tool  they already love and trust.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="wrapper" onClick={handlePickSp}>
        <div style={{background:pickSp?"hsl(210,8%,25%)":""}} className="abc">
          <div className="pb-6">
          {!pickSp?<img src={spIMG} />:<img src={pickSpIMG}/>}
          </div>
          <div>
            <span className="text-xl font-bold">DevOps engineers</span>
          </div>
          {pickSp && (
            <div className="pb-4 pt-2">
              <p className="text-base px-6">
              Level up your support by providing information to your customers using a natural interface: questions and answers.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="wrapper" onClick={handlePickEngineering}>
        <div style={{background:pickEngineering?"hsl(210,8%,25%)":""}} className="abc">
          <div className="pb-6">
          {!pickEngineering?<img src={EngineeringImg} />:<img src={pickEngineeringImg}/>}
          </div>
          <div>
            <span className="text-xl font-bold">DevOps engineers</span>
          </div>
          {pickEngineering && (
            <div className="pb-4 pt-2">
              <p className="text-base px-6">
              Help your team get the information they need to do their job - reduce burnout and help engineers grow and learn together.
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
