import { useState } from "react";
import { assets } from "../../assets/assets";
import { useLogin } from "../../hooks/useLogin";
import { useRegister } from "../../hooks/useRegister";
import "./LoginPopup.css";
import Spinner from "../Spinner";
// import { useSession } from "../../hooks/useSession";

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setShowLoginHandler = () => {
    setShowLogin((prev) => !prev);
  };

  const { login, error: errorLogin, isPending: isPendingLogin } = useLogin(setShowLoginHandler);
  const {
    register,
    error: errorRegister,
    isPending: isPendingRegister,
  } = useRegister(setShowLoginHandler);

  const isPending = isPendingLogin || isPendingRegister;
  const error = errorLogin || errorRegister;
  // const { session } = useSession();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (currState === "Login") {
      login({ email, password });
    } else {
      register({ username, email, password });
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onSubmitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={setShowLoginHandler} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isPending ? (
          <button className="form-spinner-button">
            <Spinner size="small" />
          </button>
        ) : (
          <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        )}
        {error ? error.message : ""}

        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <>
            <p>
              Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>

            <p>
              By continuing, you agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>.
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
