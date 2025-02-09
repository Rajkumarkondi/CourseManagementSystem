import React from "react";
import CTAButton from "./CTAButton"; // Import your CTAButton component
import "./AdminDashboard.css"; // Import the CSS file for the admin dashboard styles

const AdminDashboard = () => {
  const handleManageUsersClick = () => {
    // Logic for managing users
    console.log("Manage Users clicked");
  };

  const handleManageCoursesClick = () => {
    // Logic for managing courses
    console.log("Manage Courses clicked");
  };
  return (
    <div className="admin">
      <h1 className="admin-heading">Admin Dashboard</h1>
      <div className="admin-button-container">
        <CTAButton
          linkto="users" // Link to the users management page
          active={true} // Make the button active or inactive based on your logic
          onclick={handleManageUsersClick}
        >
          Manage Users
        </CTAButton>
      </div>
      <div className="admin-button-container">
        <CTAButton
          linkto="courses" // Link to the courses management page
          active={false} // Make the button active or inactive based on your logic
          onclick={handleManageCoursesClick}
        >
          Manage Courses
        </CTAButton>
      </div>
    </div>
  );
};

export default AdminDashboard;
