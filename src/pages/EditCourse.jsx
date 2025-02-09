import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    courseName: "",
    description: "",
    instructorId: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/cms/api/courses/${id}`
        );
        console.log("Fetched Course Data:", res.data); // Debugging

        setCourse({
          courseName: res.data.courseName || "",
          description: res.data.description || "",
          instructorId: res.data.instructor?.id || "", // Ensure instructorId is set correctly
        });
      } catch (error) {
        console.error("Error Fetching Course", error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course.courseName) {
    return <div className="text-center">Loading course data...</div>;
  }

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/cms/api/courses/${id}`, {
        courseName: course.courseName,
        description: course.description,
        instructor: { id: course.instructorId }, // Ensure instructor object is sent correctly
      });

      alert("Course Updated Successfully");
      navigate(`/InstructorDash/${course.instructorId}`);
    } catch (error) {
      console.error("Error Updating Course", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 w-50">
        <h2 className="text-center mb-4">Edit Course</h2>
        <form onSubmit={handleSubmit}>
          {/* Course Name Input */}
          <div className="mb-3">
            <label className="form-label">Course Name</label>
            <input
              type="text"
              className="form-control"
              name="courseName"
              value={course.courseName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="4"
              value={course.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-25">
              Update Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;
