import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome" element={<WelcomeComponent />}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("admin");

  const [password, setPassword] = useState("");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const navigate = useNavigate();

  function changeUserName(event) {
    setUsername(event.target.value);
  }

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "admin" && password === "pass") {
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      navigate("/welcome");
    } else {
      setShowFailureMessage(true);
      setShowSuccessMessage(false);
    }
  }

  return (
    <div className="Login">
      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully.</div>
      )}
      {showFailureMessage && (
        <div className="failureMessage">
          Authentication failed. Please check your credentials.
        </div>
      )}
      <div className="LoginForm">
        <h1>Time to Login !!</h1>
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
  return (
    <div className="WelcomeComponent">
      <h1>Welcome Admin</h1>
      <div>Welcome Component.</div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>Oops You are trying to access an Invalid Link</h1>
      <div>Please reach out to our Support team at ABC-DEF-GHIJ.</div>
    </div>
  );
}
