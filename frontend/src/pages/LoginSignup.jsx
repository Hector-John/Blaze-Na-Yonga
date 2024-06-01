import React from "react";
import "./LoginSignup.scss";

const LoginSignup = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <h1>SIGN UP</h1>
        <div className="loginFields">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginLogin">
          Already have an account? <span>Login</span>
        </p>
        <div className="loginAgree">
          <input type="checkbox" name="" id="" />
          <p>
            By continuing, you agree to our <span>Terms and Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
