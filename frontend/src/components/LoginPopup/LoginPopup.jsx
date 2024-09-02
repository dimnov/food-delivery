import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");

  const setShowLoginHandler = () => {
    setShowLogin((prev) => !prev);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={setShowLoginHandler} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" name="name" id="name" placeholder="Steve Johnson" required />
          )}
          <input type="email" name="email" id="email" placeholder="steve@email.com" required />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="steven123password"
            required
          />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>I agree to the Terms and Conditions and Privacy Policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
