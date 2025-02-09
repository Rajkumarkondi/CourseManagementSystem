import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCourseById,
  getEnrollmentsByUserId,
  addEnrollment,
} from "../services/Api";
import "bootstrap/dist/css/bootstrap.min.css";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollMessage, setEnrollMessage] = useState("");
  const [isEnrolled, setIsEnrolled] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getCourseById(id)
      .then((response) => {
        setCourse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(
          error.response?.data?.message || "Failed to fetch course details"
        );
        setLoading(false);
      });

    if (userId) {
      getEnrollmentsByUserId(userId)
        .then((response) => {
          const enrolledCourses = response.data.map(
            (enrollment) => enrollment.course.id
          );
          setIsEnrolled(enrolledCourses.includes(parseInt(id)));
        })
        .catch((error) => console.error("Error fetching enrollments:", error));
    }
  }, [id, userId]);

  const handleEnroll = async () => {
    if (!userId) {
      setEnrollMessage("You need to log in to enroll the course.");
      return;
    }
    setEnrolling(true);
    setEnrollMessage("");

    const enrollmentData = {
      student: { id: userId },
      course: { id: parseInt(id) },
      enrollmentDate: new Date().toISOString(),
    };

    try {
      await addEnrollment(enrollmentData);
      setEnrollMessage("Successfully enrolled in the course!");
      setIsEnrolled(true);
    } catch (error) {
      setEnrollMessage(
        error.response?.data?.message || "Error enrolling in the course."
      );
    } finally {
      setEnrolling(false);
    }
  };

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!course)
    return <h2 className="text-center text-danger">Course not found!</h2>;

  const instructorName =
    course.instructor?.user?.firstName && course.instructor?.user?.lastName
      ? `${course.instructor.user.firstName} ${course.instructor.user.lastName}`
      : "Unknown Instructor";

  return (
    <div className="container">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center ">
          <h2 className="mb-0">{course.courseName}</h2>
        </div>
        <div className="card-body">
          <p>
            <strong>Description:</strong> {course.description}
          </p>
          <p>
            <strong>Instructor:</strong> {instructorName}
          </p>
          <p>
            <strong>Expertise:</strong>{" "}
            {course.instructor?.expertise || "Not provided"}
          </p>
          <p>
            <strong>Qualification:</strong>{" "}
            {course.instructor?.qualification || "Not available"}
          </p>
          <p>
            <strong>Bio:</strong> {course.instructor?.bio || "No bio available"}
          </p>
          <div className="mt-4">
            {!isEnrolled ? (
              <button
                onClick={handleEnroll}
                className="btn btn-success"
                disabled={enrolling}
              >
                {enrolling ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>{" "}
                    Enrolling...
                  </>
                ) : (
                  "Enroll in Course"
                )}
              </button>
            ) : (
              <p className="text-success fw-bold">
                You are already enrolled in this course.
              </p>
            )}
          </div>

          {enrollMessage && (
            <div className="alert alert-info mt-3">{enrollMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
