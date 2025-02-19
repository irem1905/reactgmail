
import { useState } from 'react';
import './composeModal.scss';

function ComposeModal({ modalOpen, toggleModal }) {
  return (
    <div className={`composeModal ${modalOpen ? "open" : ""}`}>
      <div className="composeModal__content">
        <span className="composeModal__close" onClick={toggleModal}>
          &times;
        </span>
        <h2 className="composeModal__title">Compose Email</h2>

        <div className="composeModal__input-group">
          <label htmlFor="recipient">To:</label>
          <input id="recipient" type="email" placeholder="Enter recipient's email" />
        </div>

        <div className="composeModal__input-group">
          <label htmlFor="subject">Subject:</label>
          <input id="subject" type="text" placeholder="Enter subject" />
        </div>

        <div className="composeModal__input-group">
          <label htmlFor="body">Message:</label>
          <textarea id="body" placeholder="Type your message here..." />
        </div>

        <div className="composeModal__actions">
          <button className="cancel" onClick={toggleModal}>
            Cancel
          </button>
          <button className="send">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComposeModal;
