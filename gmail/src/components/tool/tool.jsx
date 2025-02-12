import "./tool.scss";
import icons from "../variables/variables";
import calendarIcon from "../../assets/images/calendar.svg";
import notetakerIcon from "../../assets/images/notetaker.svg";
import userIcon from "../../assets/images/user.svg"


function tool() {
  return (
    <div className="tool">
      <img src={calendarIcon} alt="calendar"/>
      <img src={notetakerIcon} alt="notetaker"/>
      <img src={userIcon} alt="user"/>
    <div className="tool__divider"></div>
    {icons.plus}
  </div>
  )
}

export default tool;