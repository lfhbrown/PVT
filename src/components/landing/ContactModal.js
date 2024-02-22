import React from "react";
import ContactForm from "./ContactForm";
import Pivot from "../assets/Pivot.png";

const ContactModal = ({ modal, onClose }) => {
  if (!modal) return null;
  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="modal-left">
          <img src={Pivot} alt="login-background" />
        </div>
        <div className="modal-right">
          <p onClick={onClose}>X</p>
        </div>
      </div>
      ;
    </div>
  );
};

export default ContactModal;
