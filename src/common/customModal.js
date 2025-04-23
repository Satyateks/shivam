import React, { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

const CustomModal = ({ show, handleClose, title = "", children }) => {
  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstanceRef.current = new Modal(modalRef.current, {
        backdrop: true,
        keyboard: true,
      });

      if (show) {
        modalInstanceRef.current.show();
      } else {
        modalInstanceRef.current.hide();
      }

      modalRef.current.addEventListener("hidden.bs.modal", () => {
        handleClose();
      });
    }

    return () => {
      if (modalInstanceRef.current) {
        modalInstanceRef.current.dispose();
      }
    };
  }, [show, handleClose]);

  return (
    <div ref={modalRef} className="modal fade" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Agar title hai toh header dikhao */}
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="border-0 bg-transparent"
                onClick={handleClose}
                aria-label="Close"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
          )}

          {/* Modal Body (X button top-right par hamesha rahega) */}
          <div className="modal-body position-relative">
            {/* Close Button (Always Visible at Top-Right) */}
            {title =='' && (
              <button
                type="button"
                className="border-0 bg-transparent position-absolute"
                onClick={handleClose}
                aria-label="Close"
                style={{
                  top: "10px",
                  right: "10px",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            )}
            {children}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
