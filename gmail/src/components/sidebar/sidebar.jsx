
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
      <div className="sidebar__compose">
        <compose className="sidebar__compose-button" onClick={toggleComposeModal}>
          <span className="sidebar__compose-button-pencil">{icons.pencil}</span>
          <span className="sidebar__compose-button-text">Compose</span>
        </compose>
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
            variant="sidebar"
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
