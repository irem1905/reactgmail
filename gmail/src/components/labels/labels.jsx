


// import { useState } from "react";
// import "./labels.scss";
// import icons from "../variables/variables";
// import LabelsModal from "../modal/labelsModal";
// import SidebarItem from "../sidebar-İtem/sidebarItem";

// function Labels() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [labelName, setLabelName] = useState("");
//   const [labelColor, setLabelColor] = useState("#");
//   const [categories, setCategories] = useState([{ name: "Categories", color: "#333333" }]);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const generateRandomColor = () => {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const addLabel = () => {
//     if (labelName.trim() !== "") {
//       const newCategory = {
//         name: labelName,
//         color: labelColor === "#" ? generateRandomColor() : labelColor,
//       };
//       setCategories([...categories, newCategory]);
//       setLabelName("");
//       setLabelColor("#");
//       closeModal();
//     }
//   };

//   return (
//     <div className="labels">
//       <div className="labels__wrapper">
//         <div className="labels__header">
//           <span className="labels__title">Labels</span>
//         </div>

//         <button className="labels__add" onClick={openModal}>
//           {icons.plus}
//         </button>
//       </div>

//       <LabelsModal
//         modalOpen={isModalOpen}
//         toggleModal={closeModal}
//         labelName={labelName}
//         setLabelName={setLabelName}
//         labelColor={labelColor}
//         setLabelColor={setLabelColor}
//         addLabel={addLabel}
//       />

//       <div className="labels__items">
//         {categories.map((category, index) => (
//           <SidebarItem
//             key={index}
//             icon={icons.labels}
//             text={category.name}
//             path="#"
//             isToggle={false}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Labels;




  import { useState } from "react";
  import "./labels.scss";
  import icons from "../variables/variables";
  import LabelsModal from "../modal/labelsModal";
  import SidebarItem from "../sidebar-İtem/sidebarItem";

function Labels() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [labelName, setLabelName] = useState("");
  const [labelColor, setLabelColor] = useState("#");
  const [categories, setCategories] = useState([{ name: "Categories", color: "#333333" }]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to generate random color
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  const addLabel = () => {
    if (labelName.trim() !== "") {
      const newCategory = {
        name: labelName,
        color: labelColor === "#" ? generateRandomColor() : labelColor,
      };
      setCategories([...categories, newCategory]);
      setLabelName("");
      setLabelColor("#");
      closeModal(false);
    }
  };

  return (
    <div className="labels">
      <div className="labels__wrapper">
        <div className="labels__header">
          <span className="labels__title">Labels</span>
        </div>

        <button className="labels__add" onClick={openModal}>
          {icons.plus}
        </button>
      </div>

      <LabelsModal
        modalOpen={isModalOpen}
        toggleModal={closeModal}
        labelName={labelName}
        setLabelName={setLabelName}
        labelColor={labelColor}
        setLabelColor={setLabelColor}
        addLabel={addLabel}
      />

      <div className="labels__items">
        {categories.map((category, index) => (
          <SidebarItem
            key={index}
            icon={icons.labels}
            text={category.name}
            path="#"
            isToggle={false}
            color={category.color} // Pass the category's color to SidebarItem
          />
        ))}
      </div>
    </div>
  );
}

export default Labels;
