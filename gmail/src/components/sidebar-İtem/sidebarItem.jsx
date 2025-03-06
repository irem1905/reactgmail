
// import React from "react";
// import "./sidebarItem.scss";
// import icons from "../variables/variables";

// function SidebarItem({icon, text, path, isToggle, onClick, color, variant}) {
//   return (
//     <div className="snavigation">
//       <div
//         className="snavigation__${variant}"
//         onClick={isToggle ? onClick : undefined}
//       >
//         <span style={{color}}>{icon}</span>
//         {isToggle ? (
//           <p className="snavigation__${variant}-text">{text}</p>
//         ) : (
//           <a href={path} className="snavigation__${variant}-text">
//             {text}
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SidebarItem;




// import React from "react";
// import "./sidebarItem.scss";

// function SidebarItem({icon, text, path, isToggle, onClick, color, variant}) {
//   return (
//     <div className="snavigation">
//       <div
//         className={`snavigation__${variant}`}
//         onClick={isToggle ? onClick : undefined}
//       >
//         <span style={{ color }}>{icon}</span>
//         {isToggle ? (
//           <p className={`snavigation__${variant}-text`}>
//             {text}
//           </p>
//         ) : (
//           <a href={path} className={`snavigation__${variant}-text`}>
//             {text}
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SidebarItem;




import React from "react";
import "./sidebarItem.scss";

function SidebarItem({icon, text, path, isToggle, onClick, color, variant}) {
  return (
    <div className="snavigation">
      <div className={`snavigation__${variant}`}>
        <div
          className={`snavigation__${variant}-wrapper`}
          onClick={isToggle ? onClick : undefined}
        >
          <span style={{ color }}>{icon}</span>
          {isToggle ? (
            <p className={`snavigation__${variant}-wrapper-text`}>
              {text}
            </p>
          ) : (
            <a href={path} className={`snavigation__${variant}-wrapper-text`}>
              {text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
