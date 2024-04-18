import React, { useState } from "react";
import "./index.css";
import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <div>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i
          className="ri-fingerprint-line"
          style={{ fontSize: "28px" }}
          id="showlogin"
        ></i>
      </span>
      {showLogin && (
        <div
          className="login-container"
          style={{
            width: 300,
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="form-input"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            style={{
              marginTop: "12px",
            }}
            className="form-input"
          />
          <button
            className="login-button"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
