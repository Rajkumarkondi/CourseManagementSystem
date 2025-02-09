import React, { useState, useEffect } from "react";
import { deleteCourse, getAllCourses } from "../services/Api";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses()
      .then((response) => {
        console.log("Fetched courses:", response.data); // Debugging line
        setCourses(response.data);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleDelete = (id) => {
    deleteCourse(id).then(() => {
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== id)
      );
    });
  };

  return (
    <div>
      <h1 className="text-center mt-4">Courses</h1>
      <div className="container-md mt-5">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Course Title</th>
                <th>Instructor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.length > 0 ? (
                courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.courseName || "N/A"}</td>
                    <td>
                      {course.instructor.user.firstName &&
                      typeof course.instructor === "object"
                        ? course.instructor.user.firstName +
                            " " +
                            course.instructor.user.lastName ||
                          "Unknown Instructor"
                        : "Unknown Instructor"}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(course.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    No courses available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
