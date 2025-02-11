
import "./labels.scss";
import icons from "../variables/variables";


function labels() {
  return (
    <div className="labels">
      <div className="labels__wrapper">
        <div className="labels__header">
          <span className="labels__title">Labels</span>
        </div>

        <button className="labels__add">
          {icons.plus}
        </button>
      </div>

      <div className="labels__modal labels__modal--hidden">
        <div className="labels__modal-content">
          <span className="labels__modal-close" id="close">&times;</span>
          <span className="labels__modal-title">Yeni etiket</span>
        </div>

        <div className="labels__modal-input-container">
          <span className="labels__modal-label">Lütfen yeni bir etiket adı girin:</span>
          <input type="text" className="labels__modal-input" id="newLabel" placeholder="Etiket adını yazın..." />
        </div>

        <div className="labels__modal-nested-container">
          <span className="labels__modal-nested-label">Etiketi iç içe düzenle:</span>
          <input type="text" className="labels__modal-input" id="nestedLabel" />
        </div>

        <div className="labels__modal-color-container">
          <span className="labels__modal-color-label">Etiket rengi seçin:</span>
          <input type="color" className="labels__modal-color-picker" id="labelColor" />
        </div>

        <div className="labels__modal-actions">
          <button className="labels__modal-cancel">Cancel</button>
          <button className="labels__modal-create">Create</button>
        </div>
      </div>

      <div className="labels__items">
        {/* Etiket öğeleri burada yer alacak */}
      </div>
    </div>
  )
}



export default labels







// function labels() {
//   return (
//     <div className="labels">
//       <div className="labels__wrapper">
//         <div className="labels-header">
//           <span className="labels-title">Labels</span>
//         </div>

//       <button className="labels-add">
//         {/* <i className="icons fa-solid fa-plus"></i> */}
//       </button>
//     </div>

//     <div className="labels__modal-hidden">
//       <div className="modal-content">
//         <span className="modal-close" id="close">&times;</span>
//         <span className="modal-title">Yeni etiket</span>
//       </div>

//       <div className="modal-input-container">
//         <span className="modal-label">Lütfen yeni bir etiket adı girin:</span>
//         <input type="text" className="modal-input" id="newLabel" placeholder="Etiket adını yazın..." />
//       </div>

//       <div className="modal-nested-container">
//         <span className="modal-nested-label">Etiketi iç içe düzenle:</span>
//         <input type="text" className="modal-input" id="nestedLabel" />
//       </div>

//       <div className="modal-color-container">
//         <span className="modal-color-label">Etiket rengi seçin:</span>
//         <input type="color" className="modal-color-picker" id="labelColor" />
//       </div>

//       <div className="modal-actions">
//         <button className="modal-cancel">Cancel</button>
//         <button className="modal-create">Create</button>
//       </div>
//     </div>

//     <div className="labels-items">

//     </div>
//   </div>
//   )
// }
