import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role || !username || !password) {
      setError("All fields (username, password, role) must be filled!");
      return;
    }

    try {
      const requestBody = { username, password, role };

      const response = await axios.post(
        "http://localhost:8080/cms/api/login",
        requestBody
      );

      if (response.status === 200) {
        const { id, role } = response.data;

        localStorage.setItem("userId", id);
        localStorage.setItem("role", role);

        // Redirect based on role with ID in URL
        if (role === "ADMIN") {
          navigate(`/admin-dashboard/${id}`);
        } else if (role === "INSTRUCTOR") {
          navigate(`/InstructorDash/${id}`);
        } else {
          navigate(`/home/${id}`);
        }
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Invalid credentials!";
      setError(errorMessage);
    }
  };

 

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <h3 id="head">Login</h3>
        </div>
        {error && <div className="error-message">{error}</div>}
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
            required
          />
        </div>
        <div className="col-12 button-container">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
        <div id="already">
          <span>
            Not a User? <a href="/register">Register Here</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
