import React from "react";
import ContactForm from "./ContactForm";

const ContactModal = () => {
  return (
    <div className="overlay">
      <div>
        <ContactForm />
      </div>
      ;
    </div>
  );
};

export default ContactModal;
