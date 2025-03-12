
import  { useState } from "react";
import "./navbar.scss";
import icons from "../variables/variables";
import gmailIcon from "../../assets/images/gmail.svg";
import profileIcon from "../../assets/images/profile.svg";
import GoogleApp from "../googleApp/googleApp";

function Navbar() {
  // Pop-up'ın görünürlüğünü kontrol eden state
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Pop-up'ı açma ve kapama fonksiyonu
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

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
        <input className="navbar__search-input" type="text" placeholder="Search mail" />
        <span className="navbar__search-icons">{icons.tune}</span>
      </div>

      <div className="navbar__actions">
        <div className="navbar__actions-item">
          {icons.help}
        </div>
        <div className="navbar__actions-item">
          {icons.settings}
        </div>
        <div className="navbar__actions-item" onClick={togglePopup}>
          {icons.grid} {/* 6 Noktalı Icon'a onClick event handler'ı ekledik */}
        </div>
        <div className="navbar__action-profile">
          <img src={profileIcon} alt="user" className="navbar__action-profile-img" />
        </div>
      </div>

      {/* Pop-up'ı koşullu olarak render et */}
      {isPopupVisible && <GoogleApp closePopup={togglePopup} />}
    </div>
  );
}

export default Navbar;
