import "./forms.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (name.trim() === "") return toast.warning("Please enter a valid name");
    if (email.trim() === "") return toast.warning("Please enter a valid email");
    if (password.trim() === "") return toast.warning("Please enter a valid password");
  };

  return (
    <div className="form-wrapper">
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="form-title">Register</h1>
      <form onSubmit={formSubmitHandler} className="form">
      <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type='password'
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-btn" type="submit">
          Register
        </button>
      </form>
      <div className="form-footer">
        Alraedy have an account?{" "}
        <Link to="/login" className="form-link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
