import React, { useState } from "react";
import "./RegisterPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("STUDENT"); // default role
  const [error, setError] = useState(""); // state for error message

  const navigate = useNavigate(); // Get navigate function from useNavigate hook

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const user ={
    username:username,
    email:email,
    password:password,
    role:role,

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // Clear any existing errors

    try {
      console.log( user)
      const response = await axios.post("http://localhost:8080/cms/api/users", 
       user
       
  


      );
      

      console.log("User registered successfully:", response.data);

      // Reset the form fields to empty after successful registration
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("Student"); // reset to default role if needed

      // Use navigate to redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Error registering user. Please try again.");
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div id="head">
          <h3>User Registration</h3>
        </div>

        {/* Display error message */}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="col-md-12">
          <label htmlFor="inputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label">Role</label>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="roleAdmin"
              value="ADMIN"
              onChange={handleRoleChange}
              required
            
            />
            <label className="form-check-label" htmlFor="roleAdmin">
              Admin
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="roleStudent"
              value="STUDENT"
              onChange={handleRoleChange}
              required
            />
            <label className="form-check-label" htmlFor="roleStudent">
              Student
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="roleInstructor"
              value="INSTRUCTOR"
              onChange={handleRoleChange}
              required
            />
            <label className="form-check-label" htmlFor="roleInstructor">
              Instructor
            </label>
          </div>
          <div className="invalid-feedback">Please select a role.</div>
        </div>

        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputConfirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Enter Confirm password"
            required
          />
        </div>

        <div className="col-12 button-container">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>

        <div id="already">
          <span>
            Already a User ?<a href="/login">Login</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
