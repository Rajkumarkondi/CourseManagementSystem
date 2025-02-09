import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/Api";

const UpdateDetails = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" });
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      getUserById(userId)
        .then((response) => {
          setUser({
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
          });
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userId, user)
      .then(() => {
        alert("Details updated successfully!");
        if (localStorage.getItem("role") == "ADMIN") {
          navigate(`/admin-dashboard/${userId}`);
        } else if (localStorage.getItem("role") == "INSTRUCTOR") {
          navigate(`/InstructorDash/${userId}`);
        } else {
          navigate("/");
        }
      })
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div className="container-sm mt-5 mb-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Update Your Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-25">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateDetails;
