import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InstructorDash.css";
import CTAButton from "../components/CTAButton";
import { Link, useParams } from "react-router-dom";

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const userId = localStorage.getItem("userId"); // Get Instructor ID

  // Fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/cms/api/courses/instructors/${userId}`
        );
        setCourses(response.data.slice(0, 3)); // Fetch only the first 3 courses for dashboard
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [userId]);

  return (
    <div className="inst">
      <div className="courseBtn">
        <CTAButton linkto={"/addcourse"} active={true}>
          Add Course
        </CTAButton>
        <CTAButton linkto={`/getAllCourses/${userId}`} active={false}>
          View All Courses
        </CTAButton>
      </div>

      <div className="courseContent">
        <h1>My Courses</h1>
        <div className="container-md">
          <div className="row">
            {courses.map((course) => (
              <div key={course.id} className="col-md-4 d-flex  mb-5 mt-3 px-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{course.courseName}</h5>
                    <p className="card-text">{course.description}</p>
                    <Link
                      to={`/edit-course/${course.id}/${userId}`}
                      className="btn btn-primary"
                    >
                      Update Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
