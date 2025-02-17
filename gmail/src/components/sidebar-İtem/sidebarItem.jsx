
import React from "react";
import "./sidebarItem.scss";
import icons from "../variables/variables";

function SidebarItem({icon, text, path, isToggle, onClick, color }) {
  return (
    <div className="snavigation">
      <div
        className="snavigation__button"
        onClick={isToggle ? onClick : undefined}
      >
        <span style={{color}}>{icon}</span>
        {isToggle ? (
          <p className="snavigation__button-text">{text}</p>
        ) : (
          <a href={path} className="snavigation__button-text">
            {text}
          </a>
        )}
      </div>
    </div>
  );
}

export default SidebarItem;