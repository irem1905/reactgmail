import "./labelsModal.scss";

function LabelsModal({
  modalOpen,
  toggleModal,
  labelName,
  setLabelName,
  labelColor,
  setLabelColor,
  addLabel,
}) {
  return (
    <div className={`labelsModal ${modalOpen ? "open" : ""}`}>
      <div className="labelsModal__content">
        <span className="labelsModal__close" onClick={toggleModal}>
          &times;
        </span>
        <h2 className="labelsModal__title">Yeni Etiket</h2>

        <div className="labelsModal__input-group">
          <label htmlFor="labelName">Etiket Adı:</label>
          <input
            id="labelName"
            type="text"
            placeholder="Etiket adı girin"
            value={labelName}
            onChange={(e) => setLabelName(e.target.value)} // Updates parent state
          />
        </div>



        <div className="labelsModal__color-picker">
          <label htmlFor="labelColor">Etiket Rengi:</label>
          <input
            id="labelColor"
            type="color"
            value={labelColor}
            onChange={(e) => setLabelColor(e.target.value)} // Updates parent state
          />
        </div>

        <div className="labelsModal__actions">
          <button className="cancel" onClick={toggleModal}>
            Cancel
          </button>
          <button className="create" onClick={addLabel}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default LabelsModal;


