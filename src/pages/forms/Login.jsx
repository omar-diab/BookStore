import "./forms.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.warning("Please enter a valid email");
    if (password.trim() === "")
      return toast.warning("Please enter a valid password");
  };

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="form-title">Login</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ? (
          <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
        ) : (
          <i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>
        )}
        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        Don't have an account?{" "}
        <Link to="/register" className="form-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
