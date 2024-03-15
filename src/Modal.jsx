import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  modalWidth,
  modalBackgroundColor,
  modalBorderColor,
  modalTitle,
  modalTitleColor,
  modalTitleFontSize,
  modalTitleFontWeight,
  modalTitleFont,
  closeButtonColor,
  closeButtonSize,
  lineColor,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="modal-overlay" onClick={onClose}></div>
      <div
        className="modal"
        style={{
          backgroundColor: modalBackgroundColor,
          width: modalWidth,
          borderColor: modalBorderColor,
        }}
      >
        <div className="modal-header" style={{ borderColor: lineColor }}>
          <h2
            style={{
              color: modalTitleColor,
              fontSize: modalTitleFontSize,
              fontWeight: modalTitleFontWeight,
              fontFamily: modalTitleFont,
            }}
          >
            {modalTitle}
          </h2>
          <button
            onClick={onClose}
            className="close-button"
            style={{ color: closeButtonColor, fontSize: closeButtonSize }}
          >
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalWidth: PropTypes.string,
  modalBackgroundColor: PropTypes.string,
  modalBorderColor: PropTypes.string,
  modalTitle: PropTypes.string,
  modalTitleColor: PropTypes.string,
  modalTitleFontSize: PropTypes.string,
  modalTitleFontWeight: PropTypes.string,
  modalTitleFont: PropTypes.string,
  closeButtonColor: PropTypes.string,
  closeButtonSize: PropTypes.string,
  lineColor: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
