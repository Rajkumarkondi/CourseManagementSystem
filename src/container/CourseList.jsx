import React, { useEffect, useState } from "react";
import "./CourseList.css";
import CourseCard from "../components/CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/cms/api/courses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched courses:", data); // Debugging: Check data structure
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container course-list">
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 course-item">
            <CourseCard
              title={course.courseName || "No Title"} // Use courseName instead of title
              description={course.description || "No Description Available"}
              instructor={course.instructor} // Pass the full instructor object
              link={`/course/${course.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
