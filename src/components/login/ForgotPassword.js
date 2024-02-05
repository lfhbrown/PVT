import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const inputChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="forgot-password-form-container">
      <form id="forgot-password-form">
        <div className="forgot-password-message-container">
          <p id="forgot-password-message">
            Please enter the email address you used when you registered and
            we'll email you a link to reset your password.
          </p>
        </div>
        <div className="forgot-password-email-container">
          <input
            type="email"
            id="forgot-password-email"
            name="email"
            required
            value={email}
            onChange={inputChangeHandler}
            placeholder="Email"
          />
        </div>
        <div className="forgot-password-button-container">
          <div className="forgot-password-button-send">
            <button id="forgot-password-button-send">Send</button>
          </div>
          <div className="forgot-password-button-cancel">
            <button
              onClick={props.signIn}
              id="forgot-password-button-cancel"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
