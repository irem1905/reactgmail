// /src/components/Navbar/Navbar.jsx

import "./navbar.scss";
import icons from "../variables/variables";
import gmailIcon from "../../assets/images/gmail.svg";
import profileIcon from "../../assets/images/small-profile.svg"

function Navbar() {

  return (
  <div className="navbar">
    <div className="navbar__logo">
      <button className="navbar__logo-button" id="toggleSidebar">
        {icons.menu}
      </button>
      <img className="navbar__logo-img" src={gmailIcon} alt="Gmail Logo"/>
      <span className="navbar__logo-text">Gmail</span>
    </div>

    <div className="navbar__search">
      <span className="navbar__search-icons">{icons.search}</span>
      <input className="navbar__search-input" type="text" placeholder="Search mail"/>
      <span className="navbar__search-icons">{icons.tune}</span>
    </div>

    <div className="navbar__actions">
      <div className="navbar__actions-item">
        {icons.help} 
      </div>
      <div className="navbar__actions-item">
        {icons.settings}
      </div>
      <div className="navbar__actions-item">
        {icons.grid}
      </div>
      <div className="navbar__profile">
        <img src={profileIcon} alt="user" className="navbar__profile-img"/>
      </div>
    </div>
  </div>
  );
}

export default Navbar;


