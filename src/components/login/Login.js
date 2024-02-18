import React, { useState } from "react";
import "./Login.css";
import SignUpForm from "./SignUpForm";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import Pivot from "../assets/Pivot.png";
import PivotLogo from "../assets/PivotLogo.png";

const Login = () => {
  const [selectedComponent, setSelectedComponent] = useState(1);

  const signIn = () => {
    setSelectedComponent(1);
  };

  const signUp = () => {
    setSelectedComponent(2);
  };

  const forgotPassword = () => {
    setSelectedComponent(3);
  };
  const fadeIn = () => {
    return "fade-in";
  };

  return (
    <div className="container">
      <div className="login-background">
        <img
          className="image-fade-in"
          src={Pivot}
          alt="login-background"
          style={{ width: "100%" }}
        />
      </div>
      <div className="form-outer">
        <div className="pivot-logo-container">
          <img className="logo-fade-in" src={PivotLogo} alt="PivotLogo" />
          {selectedComponent === 1 && (
            <div className={fadeIn()}>
              <LoginForm
                signIn={signIn}
                signUp={signUp}
                forgotPassword={forgotPassword}
              />
            </div>
          )}
          {selectedComponent === 2 && (
            <div className={fadeIn()}>
              <SignUpForm
                signIn={signIn}
                signUp={signUp}
                forgotPassword={forgotPassword}
              />
            </div>
          )}
          {selectedComponent === 3 && (
            <div className={fadeIn()}>
              <ForgotPassword
                signIn={signIn}
                signUp={signUp}
                forgotPassword={forgotPassword}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
