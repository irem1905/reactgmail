
// import { useState } from "react";
// import "./mailContent.scss";
// import icons from "../variables/variables";
// import SidebarItem from "../sidebar-İtem/sidebarItem";

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

//   // const setActive = (tab) => {
//   //   setActiveTab(tab);
//   // };

//   const tapOptions = [
//     {icon: icons.inbox , text:"Primary" , category:"Primary"},
//     {icon: icons.tag , text:"Promotions" , category:"Promotions"},
//     {icon: icons.user , text:"Social" , category:"Social"},
//   ]

//   return (
//     <div className="content">
//       <div className="content__toolbar">
//         <div className="content__toolbar-actions">
//           <div className="content__toolbar-actions-selection">
//             <i className="content__toolbar-actions-selection-icon fa-regular fa-square"></i> {icons.checkbox}
//             <i className="content__toolbar-actions-selection-icon fa-solid fa-caret-down"></i> {icons.ArrowDropdown}
//           </div>
//           <div className="content__toolbar-actions-icons">
//             <i className="content__icon fa-solid fa-rotate-right"></i> {icons.refresh}
//             <i className="content__icon fa-solid fa-ellipsis-vertical"></i> {icons.ellipsis}
//           </div>
//         </div>
//         <div className="content__controls">
//           <div className="content__controls-arrows">
//             <span className="content__controls-text">1-16 of 16</span>
//             <i className="content__icon fa-solid fa-chevron-left"></i> {icons.left}
//             <i className="content__icon fa-solid fa-chevron-right"></i> {icons.rigt}
//           </div>
//         </div>
//       </div>

//       <div className="snavigation__categories">
//   {tapOptions.map((tap, index) => (
//     <SidebarItem
//       key={index}
//       icon={tap.icon}
//       text={tap.text}
//       onClick={() => setActiveTab(tap.category)}
//       variant="categories" 
//     />
//   ))}
// </div>

// <table className="content__table">
//   {mails[activeTab].map((mail, index) => (
//     <tbody key={index}> {/* tbody'ye key ekledik */}
//       <tr className={`content__table-item ${mail.read ? "read" : ""}`}>
//         <td className="content__table-item-select">
//           <i className="fa-regular fa-square content__table-item-select-checkbox">{icons.checkbox}</i>
//           <i className="fa-regular fa-star content__table-item-select-star">{icons.star}</i>
//         </td>
//         <td className="content__table-item-user">
//           <span className="content__table-item-user-sender">{mail.sender}</span>
//           <span className="content__table-item-user-subject">{mail.subject}</span>
//         </td>
//         <td className="content__table-item-date">
//           <span>{mail.date}</span>
//         </td>
//       </tr>
//     </tbody>
//   ))}
// </table>

//     </div>
//   );
// };

// export default MailContent;




                    //  = checbox çalışır durumda =

// import { useState } from "react";
// import "./mailContent.scss";
// import icons from "../variables/variables";
// import SidebarItem from "../sidebar-İtem/sidebarItem";

// const mails = {
//   primary: [
//     { sender: "Acme Inc.", subject: "Insights: The latest in industrial equipment and tools", date: "Jan 26", read: false },
//     { sender: "Travel Tales", subject: "Our latest Adventures and Destinations", date: "Jan 25", read: true },
//     { sender: "Fashion Forward", subject: "See what's Trending at Fashion Forward! Style Inspiration and Trends", date: "Jan 25", read: true },
//   ],
//   promotions: [
//     { sender: "Delta Enterprises.", subject: "Delta Weekly News: Learn about important safety tips before you fly!", date: "Jan 24", read: false },
//     { sender: "Epsilon Solutions.", subject: "Insights: Industry trends and best practices", date: "Jan 23", read: false },
//     { sender: "Tech Savvy", subject: "Are you ready this year? Check out our Popular Gadgets and Software from last year!", date: "Jan 25", read: true },
//   ],
//   social: [
//     { sender: "Foodie Finds", subject: "Our Complete list of Recipe Ideas and Restaurant Reviews!", date: "Jan 22", read: true },
//     { sender: "irem", subject: "Lorem ipsum dolor sit amet consectetur.", date: "Jan 21", read: false },
//     { sender: "Company Name", subject: "Lorem ipsum dolor sit amet consectetur.", date: "Jan 25", read: true },
//   ],
// };

// const MailContent = () => {
//   const [activeTab, setActiveTab] = useState("primary");
//   const [selectedMails, setSelectedMails] = useState([]);

//   const toggleMailSelection = (index) => {
//     setSelectedMails((prev) => 
//       prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
//     );
//   };

//   const tapOptions = [
//     { icon: icons.inbox, text: "Primary", category: "primary" },
//     { icon: icons.tag, text: "Promotions", category: "promotions" },
//     { icon: icons.user, text: "Social", category: "social" },
//   ];

//   return (
//     <div className="content">
//       <div className="content__toolbar">
//         <div className="content__toolbar-actions">
//           <div className="content__toolbar-actions-selection">
//             <i className="content__toolbar-actions-selection-icon fa-regular fa-square"></i>
//             {icons.checkbox}
//             <i className="content__toolbar-actions-selection-icon fa-solid fa-caret-down"></i>
//             {icons.ArrowDropdown}
//           </div>
//           <div className="content__toolbar-actions-icons">
//             <i className="content__icon fa-solid fa-rotate-right"></i> {icons.refresh}
//             <i className="content__icon fa-solid fa-ellipsis-vertical"></i> {icons.ellipsis}
//           </div>
//         </div>
//         <div className="content__controls">
//           <div className="content__controls-arrows">
//             <span className="content__controls-text">1-16 of 16</span>
//             <i className="content__icon fa-solid fa-chevron-left"></i> {icons.left}
//             <i className="content__icon fa-solid fa-chevron-right"></i> {icons.rigt}
//           </div>
//         </div>
//       </div>

//       <div className="snavigation__categories">
//         {tapOptions.map((tap, index) => (
//           <SidebarItem
//             key={index}
//             icon={tap.icon}
//             text={tap.text}
//             onClick={() => {
//               setActiveTab(tap.category);
//               setSelectedMails([]); // Sekme değişince seçili mailleri sıfırla
//             }}
//             variant="categories"
//           />
//         ))}
//       </div>

//       <table className="content__table">
//         <tbody>
//           {mails[activeTab].map((mail, index) => {
//             const isChecked = selectedMails.includes(index);
//             return (
//               <tr key={index} className={`content__table-item ${mail.read ? "read" : ""}`}>
//                 <td className="content__table-item-select">
//                   <input
//                     type="checkbox"
//                     checked={isChecked}
//                     onChange={() => toggleMailSelection(index)}
//                     className="content__table-item-checkbox"
//                   />
//                   <i className="fa-regular fa-star content__table-item-select-star">
//                     {icons.star}
//                   </i>
//                 </td>
//                 <td className="content__table-item-user">
//                   <span className="content__table-item-user-sender">{mail.sender}</span>
//                   <span className="content__table-item-user-subject">{mail.subject}</span>
//                 </td>
//                 <td className="content__table-item-date">
//                   <span>{mail.date}</span>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MailContent;


                //   = MAİLLERİN YER DEĞİŞMESİ VE CHECKBOX ÇALIŞIYOR =

import { useState } from "react";
import "./mailContent.scss";
import icons from "../variables/variables";
import SidebarItem from "../sidebar-İtem/sidebarItem";
  
const initialMails = {
  primary: [
    { id: 1, sender: "Acme Inc.", subject: "Insights: The latest in industrial equipment and tools", date: "Jan 26", read: false },
    { id: 2, sender: "Travel Tales", subject: "Our latest Adventures and Destinations", date: "Jan 25", read: true },
    { id: 3, sender: "Fashion Forward", subject: "See what's Trending at Fashion Forward! Style Inspiration and Trends", date: "Jan 25", read: true },
  ],
  promotions: [
    { id: 4, sender: "Delta Enterprises.", subject: "Delta Weekly News: Learn about important safety tips before you fly!", date: "Jan 24", read: false },
    { id: 5, sender: "Epsilon Solutions.", subject: "Insights: Industry trends and best practices", date: "Jan 23", read: false },
    { id: 6, sender: "Tech Savvy", subject: "Are you ready this year? Check out our Popular Gadgets and Software from last year!", date: "Jan 25", read: true },
  ],
  social: [
    { id: 7, sender: "Foodie Finds", subject: "Our Complete list of Recipe Ideas and Restaurant Reviews!", date: "Jan 22", read: true },
    { id: 8, sender: "irem", subject: "Lorem ipsum dolor sit amet consectetur.", date: "Jan 21", read: false },
    { id: 9, sender: "Company Name", subject: "Lorem ipsum dolor sit amet consectetur.", date: "Jan 25", read: true },
  ],
};

const MailContent = () => {
  const [activeTab, setActiveTab] = useState("primary");
  const [mails, setMails] = useState(initialMails);
  const [selectedMails, setSelectedMails] = useState([]);
  const [draggedMail, setDraggedMail] = useState(null);

  const toggleMailSelection = (id) => {
    setSelectedMails((prev) =>
      prev.includes(id) ? prev.filter((mailId) => mailId !== id) : [...prev, id]
    );
  };

  const handleDragStart = (index) => {
    setDraggedMail(index);
  };

  const handleDrop = (index) => {
    if (draggedMail === null) return;
    const updatedMails = [...mails[activeTab]];
    const [movedMail] = updatedMails.splice(draggedMail, 1);
    updatedMails.splice(index, 0, movedMail);

    setMails({ ...mails, [activeTab]: updatedMails });
    setDraggedMail(null);
  };

  return (
    <div className="content">
      {/* Toolbar */}
      <div className="content__toolbar">
        <div className="content__toolbar-actions">
          <div className="content__toolbar-actions-selection">
            <i className="content__toolbar-actions-selection-icon fa-regular fa-square"></i>
            {icons.checkbox}
            <i className="content__toolbar-actions-selection-icon fa-solid fa-caret-down"></i>
            {icons.ArrowDropdown}
          </div>
          <div className="content__toolbar-actions-icons">
            <i className="content__icon fa-solid fa-rotate-right"></i> {icons.refresh}
            <i className="content__icon fa-solid fa-ellipsis-vertical"></i> {icons.ellipsis}
          </div>
        </div>
        <div className="content__controls">
          <div className="content__controls-arrows">
            <span className="content__controls-text">1-16 of 16</span>
            <i className="content__icon fa-solid fa-chevron-left"></i> {icons.left}
            <i className="content__icon fa-solid fa-chevron-right"></i> {icons.rigt}
          </div>
        </div>
      </div>

      {/* Kategoriler */}
      <div className="snavigation__categories">
        {["primary", "promotions", "social"].map((category) => (
          <SidebarItem
            key={category}
            icon={icons[category]}
            text={category.charAt(0).toUpperCase() + category.slice(1)}
            onClick={() => {
              setActiveTab(category);
              setSelectedMails([]); // Sekme değişince seçili mailleri sıfırla
            }}
            variant="categories"
          />
        ))}
      </div>

      {/* Mail Listesi */}
      <table className="content__table">
        <tbody>
          {mails[activeTab].map((mail, index) => {
            const isChecked = selectedMails.includes(mail.id);
            return (
              <tr
                key={mail.id}
                className={`content__table-item ${mail.read ? "read" : ""}`}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(index)}
              >
                <td className="content__table-item-select">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleMailSelection(mail.id)}
                    className="content__table-item-checkbox"
                  />
                  <i className="fa-regular fa-star content__table-item-select-star">
                    {icons.star}
                  </i>
                </td>
                <td className="content__table-item-user">
                  <span className="content__table-item-user-sender">{mail.sender}</span>
                  <span className="content__table-item-user-subject">{mail.subject}</span>
                </td>
                <td className="content__table-item-date">
                  <span>{mail.date}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MailContent;
