
// import { useState } from 'react';
// import './composeModal.scss';

// function ComposeModal({ modalOpen, toggleModal }) {
//   return (
//     <div className={`composeModal ${modalOpen ? "open" : ""}`}>
//       <div className="composeModal__content">
//         <span className="composeModal__close" onClick={toggleModal}>
//           &times;
//         </span>
//         <h2 className="composeModal__title">Compose Email</h2>

//         <div className="composeModal__input-group">
//           <label htmlFor="recipient">To:</label>
//           <input id="recipient" type="email" placeholder="Enter recipient's email" />
//         </div>

//         <div className="composeModal__input-group">
//           <label htmlFor="subject">Subject:</label>
//           <input id="subject" type="text" placeholder="Enter subject" />
//         </div>

//         <div className="composeModal__input-group">
//           <label htmlFor="body">Message:</label>
//           <textarea id="body" placeholder="Type your message here..." />
//         </div>

//         <div className="composeModal__actions">
//           <button className="cancel" onClick={toggleModal}>
//             Cancel
//           </button>
//           <button className="send">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ComposeModal;






// import { useState } from 'react';
// import './composeModal.scss';

// function ComposeModal({ modalOpen, toggleModal }) {
//   return (
//     <div className={`composeModal ${modalOpen ? "open" : ""}`}>
//       <div className="composeModal__header">
//         <span className="composeModal__title">New Message</span>
//         <div className="composeModal__controls">
//           <span className="minimize">─</span>
//           <span className="popout">⬈</span>
//           <span className="close" onClick={toggleModal}>&times;</span>
//         </div>
//       </div>

//       <div className="composeModal__content">
//         <input className="composeModal__input" type="email" placeholder="Recipients" />
//         <input className="composeModal__input" type="text" placeholder="Subject" />
//         <textarea className="composeModal__textarea" placeholder="Type your message here..." />
//       </div>

//       <div className="composeModal__footer">
//         <button className="send">Send</button>

//         <div className="icons">
//           <span className="icon">📎</span>
//           <span className="icon">✏️</span>
//           <span className="icon">😊</span>
//           <span className="icon">📷</span>
//           <span className="icon">🔗</span>
//           <span className="icon">🔍</span>
//           <span className="icon">🎨</span>
//           <span className="icon">📅</span>
//         </div>

//         <span className="trash">🗑️</span>
//       </div>
//     </div>
//   );
// }

// export default ComposeModal;




import { useState } from 'react';
import './composeModal.scss';
import icons from '../variables/variables';

function ComposeModal({ modalOpen, toggleModal }) {
  return (
    <div className={`composeModal ${modalOpen ? "open" : ""}`}>
      <div className="composeModal__header">
        <span className="composeModal__title">New Message</span>
        <div className="composeModal__controls">
          <span className="minimize">─</span>
          <span className="close" onClick={toggleModal}>&times;</span>
        </div>
      </div>

      <div className="composeModal__content">
        <input className="composeModal__input" type="email" placeholder="To who" />
        <input className="composeModal__input" type="text" placeholder="Subject" />
        <textarea className="composeModal__textarea" placeholder="Type your message here..." />
      </div>

      <div className="composeModal__footer">
        <button className="send">Send</button>
        <div className="icons">   
          <span className="icon">{icons.paperclip}</span>
          <span className="icon">{icons.link}</span>
          <span className="icon">{icons.smile}</span>
          <span className="icon">{icons.drive}</span>
          <span className="icon">{icons.image}</span>
          <span className="icon">{icons.lock}</span>
          <span className="icon">{icons.linePencil}</span>
          <span className="icon">{icons.ellipsis}</span>
        </div>
        <div className="spacer"></div>
        <span className="trash">{icons.bin}</span>
      </div>
    </div>
  );
}

export default ComposeModal;
