import "./ConfirmModal.css";

function ConfirmModal({ isOpen, onConfirm, onCancel, itemId }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Are you sure you want to remove this item?</p>
        <div className="modal-buttons">
          <button onClick={() => onConfirm(itemId)}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
