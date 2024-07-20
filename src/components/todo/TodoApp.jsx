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

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [showFailureMessage, setShowFailureMessage] = useState(false);

  function changeUserName(event) {
    setUsername(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function SuccessMessageComponent() {
    if (showSuccessMessage) {
      return <div className="successMessage">Authenticated Successfully.</div>;
    }
    return null;
  }

  function FailureMessageComponent() {
    if (showFailureMessage) {
      return (
        <div className="failureMessage">
          Authentication failed. Please check your credentials.
        </div>
      );
    }
    return null;
  }

  function handleSubmit() {
    if (username === "admin" && password === "pass") {
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
    } else {
      setShowFailureMessage(true);
      setShowSuccessMessage(false);
    }
  }

  return (
    <div className="Login">
      <div className="LoginForm">
        <SuccessMessageComponent />
        <FailureMessageComponent />
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
          <button type="button" name="login" onClick={handleSubmit}>
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
