import React, { useState, useEffect } from "react";
import { deleteUser, getAllUsers } from "../services/Api";
import "./UserList.css";
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => setUsers(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div>
      <h1 className="user-heading">User List</h1>
      <div className="container-lg mt-5">
        <div className="table-responsive">
          {" "}
          {/* Makes the table scrollable on smaller screens */}
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
