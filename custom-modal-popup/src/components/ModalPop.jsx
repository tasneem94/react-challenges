import { useState } from "react";

const ModalPop = () => {
  const [showModalPop, setShowModalPop] = useState(false);
  const handleToggleModalPop = () => {
    setShowModalPop((prevShowModalPop) => !prevShowModalPop);
  };
  const handleClose = () => {
    setShowModalPop((prevShowModalPop) => !prevShowModalPop);
  };
  return (
    <div className="container">
      {!showModalPop && (
        <button onClick={handleToggleModalPop}>Open Modal Pop Up</button>
      )}
      {showModalPop && (
        <div className="modal-body">
          <div className="close-btn" onClick={handleClose}>
            &times;
          </div>
          <h1 className="header">Hello, there!</h1>
        </div>
      )}
    </div>
  );
};

export default ModalPop;
