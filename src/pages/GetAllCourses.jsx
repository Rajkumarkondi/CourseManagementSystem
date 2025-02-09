import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const GetAllCourses = () => {
  const { instructorId } = useParams();
  const [instructorName, setInstructorName] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch instructor details
    const fetchInstructorDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/cms/api/instructors/${instructorId}` // Make sure the API endpoint is correct
        );
        setInstructorName(res.data.user.firstName); // Assuming the API returns a 'name' field for the instructor
      } catch (error) {
        console.error("Error fetching instructor details:", error);
      }
    };

    // Fetch courses by instructor
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/cms/api/courses/instructors/${instructorId}`
        );
        setCourses(res.data); // Set all the courses for the instructor
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchInstructorDetails();
    fetchCourses();
  }, [instructorId]);

  return (
    <div className="inst mt-4">
      <h1>All Courses by {instructorName}</h1>
      <div className="courseContent container-md">
        {/* Display instructor's name */}
        <div className="row mt-3 mb-5 px-2">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="col-md-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{course.courseName}</h5>
                    <p className="card-text">{course.description}</p>
                    <Link
                      to={`/edit-course/${course.id}/${instructorId}`}
                      className="btn btn-primary"
                    >
                      Update Course
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No courses created yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetAllCourses;
