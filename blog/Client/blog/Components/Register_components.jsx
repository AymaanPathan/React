import { useState } from "react";
import { Navigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Registration SucessFull!!🟢");
    } else {
      // Handle error response
      alert("Registration failed");
    }
    if (response.ok) {
      setRedirect(true);
    } else {
      return alert("invalid Credentials While Login");
    }
  }
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <form className="form_container">
        <div className="title_container">
          <p className="title">Register to your Account</p>
          <span className="subtitle">
            Seamless Access to a Universe of Ideas: Your Personal Portal to
            Explore, Learn, and Connect
          </span>
        </div>
        <br />
        <div className="input_container">
          <label className="input_label" htmlFor="email_field">
            UserName
          </label>
          <img className="user-icon" src="../src/user.png" alt="" />
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="example:-James_007"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="username-field"
          />
        </div>
        <div className="input_container">
          <label className="input_label" htmlFor="password_field">
            Password
          </label>
          <img className="pass-icon" src="../src/locked.png" alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            title="Input title"
            name="input-name"
            type="password"
            className="input_field"
            id="password_field"
          />
        </div>
        <button
          onClick={register}
          title="Sign In"
          type="submit"
          className="sign-in_btn"
        >
          <span>Sign In</span>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
