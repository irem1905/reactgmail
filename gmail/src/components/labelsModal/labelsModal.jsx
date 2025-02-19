import "./labelsModal.scss";
import PropTypes from 'prop-types';


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

LabelsModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  setLabelName: PropTypes.func.isRequired,
  labelColor: PropTypes.string.isRequired,
  setLabelColor: PropTypes.func.isRequired,
  addLabel: PropTypes.func.isRequired,
};


export default LabelsModal;


