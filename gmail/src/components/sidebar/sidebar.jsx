
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./sidebar.scss"; 
// import icons from "../variables/variables";
// import Labels from "../labels/labels";

// function Sidebar() {
//   const [isMoreExpanded, setIsMoreExpanded] = useState(false); // "More" butonunun genişlemesini takip eden state

//   const navigationItems = [
//     { icon: icons.inbox, text: "Inbox", path: "/gmail/ınbox" },
//     { icon: icons.star, text: "Starred", path: "/gmail/starred" },
//     { icon: icons.clock, text: "Snoozed", path: "/snoozed" },
//     { icon: icons.paper, text: "Sent", path: "/gmail/sent" },
//     { icon: icons.file, text: "Drafts", path: "/drafts" },
//   ];

//   const additionalItems = [
//     { icon: icons.label, text:"Labels" , path:"/labels"},
//     { icon: icons.spam, text:"Spam" , path:"/spam"},
//     { icon: icons.mail, text:"Mail" , path:"/mail"},
//     { icon: icons.setting, text:"Manage Tags" , path:"/manage tags"},
//     { icon: icons.bin, text:"Bin" , path:"/gmail/bin"},
//   ];

//   return (
//     <div className="sidebar">
//       {/* Compose butonu */}
//       <div className="sidebar__button">
//         <NavLink to="/compose" className="sidebar__button-compose" id="composeButton">
//           <span className="sidebar__button-compose-pencil">{icons.pencil}</span>
//           <span className="sidebar__button-compose-text">Compose</span>
//         </NavLink>
//       </div>

//       {/* Navigasyon butonları */}
//       <div className="sidebar__navigation">
//         {navigationItems.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="sidebar__navigation-button"
//             // React Router v6'da aktif olma durumu için inline style kullanıyoruz
//             style={({ isActive }) => ({
//               backgroundColor: isActive ? '#f0f0f0' : '', // Aktif olan buton için örnek stil
//             })}
//           >
//             {item.icon}
//             <span className="sidebar__navigation-text">{item.text}</span>
//           </NavLink>
//         ))}

//         {/* More butonu - ek öğelerin açılması için toggle */}
//         <div
//           className="sidebar__navigation-button"
//           onClick={() => setIsMoreExpanded(prevState => !prevState)} // Toggle işlemi
//         >
//           {icons.more}
//           <span className="sidebar__navigation-text">More</span>
//         </div>

//         {/* More butonu açıldığında ek öğeleri render ediyoruz */}
//         {isMoreExpanded &&
//           additionalItems.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               className="sidebar__navigation-button"
//               style={({ isActive }) => ({
//                 backgroundColor: isActive ? '#f0f0f0' : '', // Ek öğeler için aktif stil
//               })}
//             >
//               {item.icon}
//               <span className="sidebar__navigation-text">{item.text}</span>
//             </NavLink>
//           ))}
//       </div>

//       {/* Labels bileşeni */}
//       <Labels />
//     </div>
//   );
// }

// export default Sidebar;






import { useState } from "react";
import "./sidebar.scss";
import icons from "../variables/variables";
import SidebarItem from "../sidebar-İtem/sidebarItem";
import Labels from "../labels/labels"; // Buraya ekledik
import ComposeModal from "../composeModal/composeModal"; 


function Sidebar() {
  const [isMoreExpanded, setIsMoreExpanded] = useState(false);
  const [isComposeModalOpen, setIsComposeModalOpen] = useState(false); // State to control modal visibility

  const toggleMenu = () => {
    setIsMoreExpanded(!isMoreExpanded);
  };

  const toggleComposeModal = () => {
    setIsComposeModalOpen(!isComposeModalOpen); // Toggle the modal
  };

  const sidebarItems = [
    { icon: icons.inbox, text: "Inbox", path: "/gmail/inbox", isAdditional: false },
    { icon: icons.star, text: "Starred", path: "/gmail/starred", isAdditional: false },
    { icon: icons.clock, text: "Snoozed", path: "/snoozed", isAdditional: false },
    { icon: icons.paper, text: "Sent", path: "/gmail/sent", isAdditional: false },
    { icon: icons.file, text: "Drafts", path: "/drafts", isAdditional: false },
    { icon: isMoreExpanded ? icons.less : icons.more, text: isMoreExpanded ? "Less" : "More", path: "#", isToggle: true },
    { icon: icons.label, text: "Labels", path: "/labels", isAdditional: true },
    { icon: icons.spam, text: "Spam", path: "/spam", isAdditional: true },
    { icon: icons.mail, text: "Mail", path: "/mail", isAdditional: true },
    { icon: icons.setting, text: "Manage Tags", path: "/manage tags", isAdditional: true },
    { icon: icons.bin, text: "Bin", path: "/gmail/bin", isAdditional: true },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__button">
        <button className="sidebar__button-compose" onClick={toggleComposeModal}>
          <span className="sidebar__button-compose-pencil">{icons.pencil}</span>
          <span className="sidebar__button-compose-text">Compose</span>
        </button>
      </div>

      {sidebarItems.map((item, index) => {
        if (!isMoreExpanded && item.isAdditional) return null;
        return (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            path={item.path}
            isToggle={item.isToggle}
            onClick={item.isToggle ? toggleMenu : undefined}
          />
        );
      })}

      <Labels />

      {/* Add ComposeModal here */}
      <ComposeModal modalOpen={isComposeModalOpen} toggleModal={toggleComposeModal} />
    </div>
  );
}

export default Sidebar;






