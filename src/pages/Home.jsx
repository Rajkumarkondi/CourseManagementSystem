import React from "react";
import Navbar from "../components/Navbar";
import CourseList from "../container/CourseList";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Course Management</h1>
      </div>

      {/* Course List */}
      <CourseList />
    </div>
  );
};

export default Home;
