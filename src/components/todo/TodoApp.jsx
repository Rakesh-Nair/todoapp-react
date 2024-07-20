import { useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      {/* Todo Management Application */}
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("admin");

  const [password, setPassword] = useState("");

  function changeUserName(event) {
    setUsername(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="Login">
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeUserName}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />
        </div>
        <div>
          <button type="button" name="login">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className="Welcome">Welcome Component</div>;
}
