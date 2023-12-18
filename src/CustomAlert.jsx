import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set the app root for react-modal
Modal.setAppElement('#root');

function CustomAlert({ isOpen, onClose, message, correctness }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Alert"
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div>
        <img src="src/assets/correct-popup.png" alt="Background" className="custom-background-image" />
        <p className="custom-text">{message}</p>
        <button className="close-button" onClick={onClose}>Close</button>                  
      </div>
    </Modal>
  );
}

// Your component
function YourComponent() {
  const [isCustomAlertOpen, setIsCustomAlertOpen] = useState(false);

  return (
    <div>
      <CustomAlert
        isOpen={isCustomAlertOpen}
        onClose={() => setIsCustomAlertOpen(false)}
        message="Correct!"
      />
    </div>
  );
}
export default CustomAlert;