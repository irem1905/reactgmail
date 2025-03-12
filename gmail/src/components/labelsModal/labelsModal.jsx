import "./labelsModal.scss";
import PropTypes from 'prop-types';


function labelsModal({
  modalOpen,
  toggleModal,
  labelName,
  setLabelName,
  labelColor,
  setLabelColor,
  addLabel,
}) {
  return (
    <div className={`lmodal ${modalOpen ? "open" : ""}`}>
      <div className="lmodal__content">
        <span className="lmodal__content-close" onClick={toggleModal}>
          &times;
        </span>
        <h2 className="lmodal__content-title">Yeni Etiket</h2>

        <div className="lmodal__content-input">
          <label htmlFor="labelName">Etiket Adı:</label>
          <input
            id="labelName"
            type="text"
            placeholder="Etiket adı girin"
            value={labelName}
            onChange={(e) => setLabelName(e.target.value)} // Updates parent state
          />
        </div>

        <div className="lmodal__comtent-color">
          <label htmlFor="labelColor">Etiket Rengi:</label>
          <input
            id="labelColor"
            type="color"
            value={labelColor}
            onChange={(e) => setLabelColor(e.target.value)} // Updates parent state
          />
        </div>

        <div className="lmodal__content-actions">
          <button className="lmodal__content-actions-cancel" onClick={toggleModal}>
            Cancel
          </button>
          <button className="lmodal__content-actions-create" onClick={addLabel}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

labelsModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  setLabelName: PropTypes.func.isRequired,
  labelColor: PropTypes.string.isRequired,
  setLabelColor: PropTypes.func.isRequired,
  addLabel: PropTypes.func.isRequired,
};


export default labelsModal;


