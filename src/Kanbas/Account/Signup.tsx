import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as db from "../Database"; // Assumes there's a `users` array in the Database module

export default function Signup() {
  const [credentials, setCredentials] = useState({ username: "", password: "", verifyPassword: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const { username, password, verifyPassword } = credentials;
  
    // pass matches
    if (password !== verifyPassword) {
      return;
    }
  
    // username already exists
    if (db.users.some((u: any) => u.username === username)) {
      return;
    }
  
    // create new user with default or placeholder values for required fields
    const newUser = {
      _id: Date.now().toString(),  // or use a unique ID generator
      username,
      password,
      firstName: "",               // Placeholder value
      lastName: "",                // Placeholder value
      email: "",                   // Placeholder value
      dob: "",                     // Placeholder value
      role: "user",                // Example role, adjust as needed
      loginId: "",                 // Placeholder value
      section: "",                 // Placeholder value
      lastActivity: new Date().toISOString(),
      totalActivity: "0",
    };
  
    // Add new user to the database (mock implementation)
    db.users.push(newUser);
  
    // Navigate to Profile after successful signup
    navigate("/Kanbas/Account/Profile");
  };
  

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        placeholder="username"
        className="form-control mb-2"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
        value={credentials.verifyPassword}
        onChange={(e) => setCredentials({ ...credentials, verifyPassword: e.target.value })}
      />
      <button onClick={handleSignup} className="btn btn-primary w-100">Sign up</button><br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
