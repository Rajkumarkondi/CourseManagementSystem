import React, { useState, useEffect } from "react";

const AddCourse = () => {
  const [course, setCourse] = useState({
    courseName: "",
    description: "",
    instructorId: "", // Will be set from localStorage
  });

  useEffect(() => {
    // Get instructorId from localStorage
    const storedInstructorId = localStorage.getItem("userId");
    if (storedInstructorId) {
      setCourse((prevCourse) => ({
        ...prevCourse,
        instructorId: storedInstructorId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/cms/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName: course.courseName,
          description: course.description,
          instructor: { id: course.instructorId }, // Sending instructor ID correctly
        }),
      });

      if (response.ok) {
        alert("Course added successfully!");
        setCourse({
          courseName: "",
          description: "",
          instructorId: course.instructorId,
        }); // Reset fields but keep instructorId
      } else {
        alert("Failed to add course.");
      }
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ width: "30rem" }}>
        <h2 className="text-center mb-4">Add a New Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Course Title</label>
            <input
              type="text"
              className="form-control"
              name="courseName"
              value={course.courseName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={course.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
