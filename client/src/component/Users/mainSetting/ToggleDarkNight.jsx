import { useDispatch, useSelector } from "react-redux";
import "./toggleDark.css";
import { themeModeRedux } from "../../../redux/themeSilce";

export default function ToggleDarkNight() {
  const dispatch = useDispatch()
  let theme = useSelector((state) => state.theme.themeMode);

  const handleClick = ()=>{
    if (theme === "dark") {
      dispatch(themeModeRedux("white"));
    } else {
      dispatch(themeModeRedux("dark"));
    }
  }

  return (
    <div >
      <label>
        <input type="checkbox" className="slider" />
        <div onClick={handleClick} className="switch">
          <div className="suns" />
          <div className="moons">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
            <div className="star star-4" />
            <div className="star star-5" />
            <div className="first-moon" />
          </div>
          <div className="sand" />
          <div className="bb8">
            <div className="antennas">
              <div className="antenna short" />
              <div className="antenna long" />
            </div>
            <div className="head">
              <div className="stripe one" />
              <div className="stripe two" />
              <div className="eyes">
                <div className="eye one" />
                <div className="eye two" />
              </div>
              <div className="stripe detail">
                <div className="detail zero" />
                <div className="detail zero" />
                <div className="detail one" />
                <div className="detail two" />
                <div className="detail three" />
                <div className="detail four" />
                <div className="detail five" />
                <div className="detail five" />
              </div>
              <div className="stripe three" />
            </div>
            <div className="ball">
              <div className="lines one" />
              <div className="lines two" />
              <div className="ring one" />
              <div className="ring two" />
              <div className="ring three" />
            </div>
            <div className="shadow" />
          </div>
        </div>
      </label>
    </div>
  );
}
