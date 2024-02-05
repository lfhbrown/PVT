import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state based on the input's name
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <form>
      <div className="form-inner">
        <div className="sign-in-up-container">
          <div className="sign-in">
            <button onClick={props.signIn} type="button">
              Sign In
            </button>
          </div>
          <div className="sign-up">
            <button onClick={props.signUp} type="button">
              Sign Up
            </button>
          </div>
        </div>
        <div className="username-password-input-container">
          <input
            type="text"
            id="username"
            name="email"
            required
            value={email}
            onChange={inputChangeHandler}
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={inputChangeHandler}
            placeholder="Password"
          />
          <input
            type="password"
            id="password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={inputChangeHandler}
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className="enter-forgot-password-container">
        <div className="enter">
          <button id="enter">Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
