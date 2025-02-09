import { useEffect, useState } from "react";
import { getEnrollmentsByUserId } from "../services/Api";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      console.error("User not logged in");
      return;
    }

    getEnrollmentsByUserId(userId)
      .then((response) => {
        console.log("API Response:", response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          const extractedCourses = response.data.map(
            (enrollment) => enrollment.course
          );
          console.log("Extracted Courses:", extractedCourses);
          setCourses(extractedCourses);
        } else {
          console.warn("No courses found for this user");
          setCourses([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching enrolled courses:", error);
      });
  }, [userId]);

  return (
    <div>
      <h2 className="text-center mb-4 mt-5 ">My Courses</h2>

      <div className="container-md mt-4">
        {courses.length === 0 ? (
          <p className="text-center text-muted">No courses found</p>
        ) : (
          <div className="row">
            {courses.map((course, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <h5 className="card-title">
                      {course?.courseName || "Course Title Missing"}
                    </h5>
                    <p className="card-text">
                      <strong>Instructor:</strong>{" "}
                      {course?.instructor.user.firstName ||
                        course?.instructor.user.username ||
                        "Unknown"}
                    </p>
                    <Link
                      to={`/course/${course?.id}`}
                      className="btn btn-primary"
                    >
                      Go to Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
