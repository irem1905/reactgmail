
// import React from 'react'
// import icons from "../variables/variables";
// import "./mailContent.scss"

// function mailContent() {
//   return (
//     <div>mailContent</div>
//   )
// }

// export default mailContent






// import { useState } from "react";
// import "./mailContent.scss"

// const mails = {
//   primary: [
//     { sender: "Acme Inc.", 
//       subject: "Insights: The latest in industrial equipment and tools", 
//       date: "Jan, 26", 
//       read: false },

//     { sender: "Travel Tales", 
//       subject: "Our latest Adventures and Destinations", 
//       date: "Jan, 25", 
//       read: true },

//     { sender: "Fashion Forward", 
//       subject: "See what's Trending at Fashion Forward! Style Inspiration and Trends", 
//       date: "Jan, 25", 
//       read: true },
//   ],
//   promotions: [
//     { sender: "Delta Enterprises.", 
//       subject: "Delta Weekly News: Learn about important safety tips before you fly!", 
//       date: "Jan, 24", 
//       read: false },

//     { sender: "Epsilon Solutions.", 
//       subject: "Insights: Industry trends and best practices", 
//       date: "Jan, 23", 
//       read: false },

//     { sender: "Tech Savvy", 
//       subject: "Are you ready this year? Check out our Popular Gadgets and Software from last year!", 
//       date: "Jan, 25", 
//       read: true },
//   ],
//   social: [
//     { sender: "Foodie Finds", 
//       subject: "Our Complete list of Recipe Ideas and Restaurant Reviews!", 
//       date: "Jan, 22", 
//       read: true },

//     { sender: "irem", 
//       subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
//       date: "Jan, 21", 
//       read: false },

//     { sender: "Company Name", 
//       subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
//       date: "Jan, 25", 
//       read: true },
//   ],
// };

// const MailContent = () => {
//   const [activeTab, setActiveTab] = useState("primary");

//   const setActive = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="content-mails">
//       <div className="content-mails__toolbar">
//         <div className="content-mails__toolbar-actions">
//           <div className="content-mails__toolbar-actions-selection">
//             <i className="content-mails__toolbar-actions-selection-icon fa-regular fa-square"></i>
//             <i className="content-mails__toolbar-actions-selection-icon fa-solid fa-caret-down"></i>
//           </div>
//           <div className="content-mails__toolbar-actions-icons">
//             <i className="content-mails__icon fa-solid fa-rotate-right"></i>
//             <i className="content-mails__icon fa-solid fa-ellipsis-vertical"></i>
//           </div>
//         </div>
//         <div className="content-mails__controls">
//           <div className="content-mails__controls-arrows">
//             <span className="content-mails__controls-text">1-16 of 16</span>
//             <i className="content-mails__icon fa-solid fa-chevron-left"></i>
//             <i className="content-mails__icon fa-solid fa-chevron-right"></i>
//           </div>
//         </div>
//       </div>

//       <div className="content-mails__tabs">
//         {Object.keys(mails).map((tab) => (
//           <button
//             key={tab}
//             className={`content-mails__tabs-button ${activeTab === tab ? "active" : ""}`}
//             onClick={() => setActive(tab)}
//           >
//             <i className={`content-mails__tabs-button-icons ${
//               tab === "primary" ? "fa-solid fa-inbox" :
//               tab === "promotions" ? "fa-solid fa-tag" :
//               "fa-solid fa-user-group"
//             }`}></i>
//             <span className="content-mails__tabs-text">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
//           </button>
//         ))}
//       </div>

//       <div className="content-mail">
//         {mails[activeTab].map((mail, index) => (
//           <div key={index} className={`content-mail__item ${mail.read ? "read" : ""}`}>
//             <span className="content-mail__sender">{mail.sender}</span>
//             <span className="content-mail__subject">{mail.subject}</span>
//             <span className="content-mail__date">{mail.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MailContent;






// import { useState } from "react";
// import "./mailContent.scss"

// const mails = {
//   primary: [
//     { sender: "Acme Inc.", 
//       subject: "Insights: The latest in industrial equipment and tools", 
//       date: "Jan, 26", 
//       read: false },

//     { sender: "Travel Tales", 
//       subject: "Our latest Adventures and Destinations", 
//       date: "Jan, 25", 
//       read: true },

//     { sender: "Fashion Forward", 
//       subject: "See what's Trending at Fashion Forward! Style Inspiration and Trends", 
//       date: "Jan, 25", 
//       read: true },
//   ],
//   promotions: [
//     { sender: "Delta Enterprises.", 
//       subject: "Delta Weekly News: Learn about important safety tips before you fly!", 
//       date: "Jan, 24", 
//       read: false },

//     { sender: "Epsilon Solutions.", 
//       subject: "Insights: Industry trends and best practices", 
//       date: "Jan, 23", 
//       read: false },

//     { sender: "Tech Savvy", 
//       subject: "Are you ready this year? Check out our Popular Gadgets and Software from last year!", 
//       date: "Jan, 25", 
//       read: true },
//   ],
//   social: [
//     { sender: "Foodie Finds", 
//       subject: "Our Complete list of Recipe Ideas and Restaurant Reviews!", 
//       date: "Jan, 22", 
//       read: true },

//     { sender: "irem", 
//       subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
//       date: "Jan, 21", 
//       read: false },

//     { sender: "Company Name", 
//       subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
//       date: "Jan, 25", 
//       read: true },
//   ],
// };

// const MailContent = () => {
//   const [activeTab, setActiveTab] = useState("primary");

//   const setActive = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="content-mails">
//       <div className="content-mails__toolbar">
//         <div className="content-mails__toolbar-actions">
//           <div className="content-mails__toolbar-actions-selection">
//             <i className="content-mails__toolbar-actions-selection-icon fa-regular fa-square"></i>
//             <i className="content-mails__toolbar-actions-selection-icon fa-solid fa-caret-down"></i>
//           </div>
//           <div className="content-mails__toolbar-actions-icons">
//             <i className="content-mails__icon fa-solid fa-rotate-right"></i>
//             <i className="content-mails__icon fa-solid fa-ellipsis-vertical"></i>
//           </div>
//         </div>
//         <div className="content-mails__controls">
//           <div className="content-mails__controls-arrows">
//             <span className="content-mails__controls-text">1-16 of 16</span>
//             <i className="content-mails__icon fa-solid fa-chevron-left"></i>
//             <i className="content-mails__icon fa-solid fa-chevron-right"></i>
//           </div>
//         </div>
//       </div>

//       <div className="content-mails__tabs">
//         {Object.keys(mails).map((tab) => (
//           <button
//             key={tab}
//             className={`content-mails__tabs-button ${activeTab === tab ? "active" : ""}`}
//             onClick={() => setActive(tab)}
//           >
//             <i className={`content-mails__tabs-button-icons ${
//               tab === "primary" ? "fa-solid fa-inbox" :
//               tab === "promotions" ? "fa-solid fa-tag" :
//               "fa-solid fa-user-group"
//             }`}></i>
//             <span className="content-mails__tabs-text">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
//           </button>
//         ))}
//       </div>

//       <div className="content-mail">
//         {mails[activeTab].map((mail, index) => (
//           <div key={index} className={`content-mail__item ${mail.read ? "read" : ""}`}>
//             <div className="content-mail__icons">
//               <i className="fa-regular fa-square"></i>
//               <i className="fa-regular fa-star"></i>
//             </div>
//             <span className="content-mail__sender">{mail.sender}</span>
//             <span className="content-mail__subject">{mail.subject}</span>
//             <span className="content-mail__date">{mail.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MailContent;







import { useState } from "react";
import "./mailContent.scss";
import icons from "../variables/variables"; // icons dosyasını import ettiğiniz yer
import SidebarItem from "../sidebar-İtem/sidebarItem";

const mails = {
  primary: [
    { sender: "Acme Inc.", 
      subject: "Insights: The latest in industrial equipment and tools", 
      date: "Jan 26", 
      read: false },

    { sender: "Travel Tales", 
      subject: "Our latest Adventures and Destinations", 
      date: "Jan 25", 
      read: true },

    { sender: "Fashion Forward", 
      subject: "See what's Trending at Fashion Forward! Style Inspiration and Trends", 
      date: "Jan 25", 
      read: true },
  ],
  promotions: [
    { sender: "Delta Enterprises.", 
      subject: "Delta Weekly News: Learn about important safety tips before you fly!", 
      date: "Jan 24", 
      read: false },

    { sender: "Epsilon Solutions.", 
      subject: "Insights: Industry trends and best practices", 
      date: "Jan 23", 
      read: false },

    { sender: "Tech Savvy", 
      subject: "Are you ready this year? Check out our Popular Gadgets and Software from last year!", 
      date: "Jan 25", 
      read: true },
  ],
  social: [
    { sender: "Foodie Finds", 
      subject: "Our Complete list of Recipe Ideas and Restaurant Reviews!", 
      date: "Jan 22", 
      read: true },

    { sender: "irem", 
      subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
      date: "Jan 21", 
      read: false },

    { sender: "Company Name", 
      subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
      date: "Jan 25", 
      read: true },
  ],
};

const MailContent = () => {
  const [activeTab, setActiveTab] = useState("primary");

  // const setActive = (tab) => {
  //   setActiveTab(tab);
  // };

  const tapOptions = [
    {icon: icons.inbox , text:"Primary" , category:"Primary"},
    {icon: icons.tag , text:"Promotions" , category:"Promotions"},
    {icon: icons.user , text:"Social" , category:"Social"},
  ]

  return (
    <div className="content-mails">
      <div className="content-mails__toolbar">
        <div className="content-mails__toolbar-actions">
          <div className="content-mails__toolbar-actions-selection">
            <i className="content-mails__toolbar-actions-selection-icon fa-regular fa-square"></i> {/* Icon: Checkbox */}
            <i className="content-mails__toolbar-actions-selection-icon fa-solid fa-caret-down"></i> {/* Icon: Caret Down */}
          </div>
          <div className="content-mails__toolbar-actions-icons">
            <i className="content-mails__icon fa-solid fa-rotate-right"></i> {/* Icon: Rotate */}
            <i className="content-mails__icon fa-solid fa-ellipsis-vertical"></i> {/* Icon: Ellipsis */}
          </div>
        </div>
        <div className="content-mails__controls">
          <div className="content-mails__controls-arrows">
            <span className="content-mails__controls-text">1-16 of 16</span>
            <i className="content-mails__icon fa-solid fa-chevron-left"></i> {/* Icon: Chevron Left */}
            <i className="content-mails__icon fa-solid fa-chevron-right"></i> {/* Icon: Chevron Right */}
          </div>
        </div>
      </div>

      <div className="snavigation__menu">
  {tapOptions.map((tap, index) => (
    <SidebarItem
      key={index}
      icon={tap.icon}
      text={tap.text}
      onClick={() => setActiveTab(tap.category)}
      variant="menu"  // Burada variant'ı 'sidebar' olarak belirtiyoruz
    />
  ))}
</div>


      {/* <div className="content-mails__tabs">
        {Object.keys(mails).map((tab) => (
          <button
            key={tab}
            className={`content-mails__tabs-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActive(tab)}
          >
            <i className={`content-mails__tabs-button-icons`}>
              {tab === "primary" && icons.inbox} 
              {tab === "promotions" && icons.tag}
              {tab === "social" && icons.user} 
            </i>
            <span className="content-mails__tabs-text">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
          </button>
        ))}
      </div> */}

      <div className="content-mail">
        {mails[activeTab].map((mail, index) => (
          <div key={index} className={`content-mail__item ${mail.read ? "read" : ""}`}>
            <div className="content-mail__icons">
              <i className="fa-regular fa-square content-mail__icon">{icons.checkbox}</i> {/* Icon: Checkbox */}
              <i className="fa-regular fa-star content-mail__icon">{icons.star}</i> {/* Icon: Star */}
            </div>
            <span className="content-mail__sender">{mail.sender}</span>
            <span className="content-mail__subject">{mail.subject}</span>
            <span className="content-mail__date">{mail.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MailContent;













// import { useState } from "react";
// import "./mailContent.scss"
// import icons from "../variables/variables";

// const mails = {
//   primary: [
//     { sender: "Acme Inc.", 
//       subject: "Insights: The latest in industrial equipment and tools", 
//       date: "Jan 26", 
//       read: false },

//     { sender: "Travel Tales", 
//       subject: "Our latest Adventures and Destinations", 
//       date: "Jan 25", 
//       read: true },

//     { sender: "Fashion Forward", 
//       subject: "See what's Trending at Fashion Forward! Style Inspiration and Trends", 
//       date: "Jan 25", 
//       read: true },
//   ],
//   promotions: [
//     { sender: "Delta Enterprises.", 
//       subject: "Delta Weekly News: Learn about important safety tips before you fly!", 
//       date: "Jan 24", 
//       read: false },

//     { sender: "Epsilon Solutions.", 
//       subject: "Insights: Industry trends and best practices", 
//       date: "Jan 23", 
//       read: false },

//     { sender: "Tech Savvy", 
//       subject: "Are you ready this year? Check out our Popular Gadgets and Software from last year!", 
//       date: "Jan 25", 
//       read: true },
//   ],
//   social: [
//     { sender: "Foodie Finds", 
//       subject: "Our Complete list of Recipe Ideas and Restaurant Reviews!", 
//       date: "Jan 22", 
//       read: true },

//     { sender: "irem", 
//       subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
//       date: "Jan 21", 
//       read: false },

//     { sender: "Company Name", 
//       subject: "Lorem ipsum dolor sit amet consectetur. Ac eget eu eget ullamcorper tellus sem scelerisque sit ante.", 
//       date: "Jan 25", 
//       read: true },
//   ],
// };

// const MailContent = () => {
//   const [activeTab, setActiveTab] = useState("primary");

//   const setActive = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="content-mails">
//       <div className="content-mails__toolbar">
//         <div className="content-mails__toolbar-actions">
//           <div className="content-mails__toolbar-actions-selection">
//             <i className="content-mails__toolbar-actions-selection-icon fa-regular fa-square"></i> {/* Icon: Checkbox */}
//             <i className="content-mails__toolbar-actions-selection-icon fa-solid fa-caret-down"></i> {/* Icon: Caret Down */}
//           </div>
//           <div className="content-mails__toolbar-actions-icons">
//             <i className="content-mails__icon fa-solid fa-rotate-right"></i> {/* Icon: Rotate */}
//             <i className="content-mails__icon fa-solid fa-ellipsis-vertical"></i> {/* Icon: Ellipsis */}
//           </div>
//         </div>
//         <div className="content-mails__controls">
//           <div className="content-mails__controls-arrows">
//             <span className="content-mails__controls-text">1-16 of 16</span>
//             <i className="content-mails__icon fa-solid fa-chevron-left"></i> {/* Icon: Chevron Left */}
//             <i className="content-mails__icon fa-solid fa-chevron-right"></i> {/* Icon: Chevron Right */}
//           </div>
//         </div>
//       </div>

//       <div className="content-mails__tabs">
//         {Object.keys(mails).map((tab) => (
//           <button
//             key={tab}
//             className={`content-mails__tabs-button ${activeTab === tab ? "active" : ""}`}
//             onClick={() => setActive(tab)}
//           >
//             <i className={`content-mails__tabs-button-icons ${
//               tab === "primary" ? "fa-solid fa-inbox" : // Icon: Inbox
//               tab === "promotions" ? "fa-solid fa-tag" : // Icon: Tag
//               "fa-solid fa-user-group" // Icon: User Group
//             }`}></i>
//             <span className="content-mails__tabs-text">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
//           </button>
//         ))}
//       </div>

//       <div className="content-mail">
//         {mails[activeTab].map((mail, index) => (
//           <div key={index} className={`content-mail__item ${mail.read ? "read" : ""}`}>
//             <div className="content-mail__icons">
//               <i className="fa-regular fa-square content-mail__icon">{icons.checkbox}</i> {/* Icon: Checkbox */}
//               <i className="fa-regular fa-star content-mail__icon">{icons.star}</i> {/* Icon: Star */}
//             </div>
//             <span className="content-mail__sender">{mail.sender}</span>
//             <span className="content-mail__subject">{mail.subject}</span>
//             <span className="content-mail__date">{mail.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MailContent;
