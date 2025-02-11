import "./tool.scss";
import icons from "../variables/variables";
import calendarIcon from "../../assets/images/calendar.svg";
import notetakerIcon from "../../assets/images/notetaker.svg";


function tool() {
  return (
    <div className="tool">
      <img src={calendarIcon} alt="calendar"/>
      <img src={notetakerIcon} alt="notetaker" />
    <div className="tool__divider"></div>
    {icons.plus}
  </div>
  )
}

export default tool;