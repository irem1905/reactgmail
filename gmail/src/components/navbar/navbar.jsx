// // /src/components/Navbar/Navbar.jsx

// import "./navbar.scss";
// import icons from "../variables/variables";
// import gmailIcon from "../../assets/images/gmail.svg";
// import profileIcon from "../../assets/images/profile.svg"

// function Navbar() {

//   return (
//   <div className="navbar">
//     <div className="navbar__logo">
//       <button className="navbar__logo-button" id="toggleSidebar">
//         {icons.menu}
//       </button>
//       <img className="navbar__logo-img" src={gmailIcon} alt="Gmail Logo"/>
//       <span className="navbar__logo-text">Gmail</span>
//     </div>

//     <div className="navbar__search">
//       <span className="navbar__search-icons">{icons.search}</span>
//       <input className="navbar__search-input" type="text" placeholder="Search mail"/>
//       <span className="navbar__search-icons">{icons.tune}</span>
//     </div>

//     <div className="navbar__actions">
//       <div className="navbar__actions-item">
//         {icons.help} 
//       </div>
//       <div className="navbar__actions-item">
//         {icons.settings}
//       </div>
//       <div className="navbar__actions-item">
//         {icons.grid}
//       </div>
//       <div className="navbar__profile">
//         <img src={profileIcon} alt="user" className="navbar__profile-img"/>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default Navbar;





import React, { useState } from "react";
import "./navbar.scss";
import icons from "../variables/variables";
import gmailIcon from "../../assets/images/gmail.svg";
import profileIcon from "../../assets/images/profile.svg";

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
        <img className="navbar__logo-img" src={gmailIcon} alt="Gmail Logo" />
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
        <div className="navbar__profile">
          <img src={profileIcon} alt="user" className="navbar__profile-img" />
        </div>
      </div>

      {/* Pop-up görünürlüğünü kontrol et */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={togglePopup} className="close-btn">
              &times; {/* Kapatma butonu */}
            </button>
            {/* Pop-up içine img'ler veya diğer içerikler ekleyebilirsin */}
            <img src="img1.jpg" alt="Image 1" />
            <img src="img2.jpg" alt="Image 2" />
            <img src="img3.jpg" alt="Image 3" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
