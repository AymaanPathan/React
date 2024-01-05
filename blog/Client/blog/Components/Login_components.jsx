import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      alert("LoggedIN SucessFull!!🟢");
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      return alert("invalid Credentials While Login");
    }
  }
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <form onSubmit={login} className="form_container">
        <div className="title_container">
          <p className="title">Login to your Account</p>
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
            placeholder="example:-James_007"
            title="Input title"
            name="input-name"
            type="text"
            className="input_field"
            id="username-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button title="Sign In" className="sign-in_btn">
          <span>log In</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
