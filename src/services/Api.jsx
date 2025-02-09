import axios from "axios";

const API_URL = "http://localhost:8080/cms/api";

// Users
export const getAllUsers = () => axios.get(`${API_URL}/users`);
export const getUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const addUser = (user) => axios.post(`${API_URL}/users`, user);
export const updateUser = (id, user) =>
  axios.put(`${API_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Courses
export const getAllCourses = () => axios.get(`${API_URL}/courses`);
export const getCourseById = (id) => axios.get(`${API_URL}/courses/${id}`); // ✅ ADDED FUNCTION
export const addCourse = (course) => axios.post(`${API_URL}/courses`, course);
export const updateCourse = (id, course) =>
  axios.put(`${API_URL}/courses/${id}`, course);
export const deleteCourse = (id) => axios.delete(`${API_URL}/courses/${id}`);

// Enrollments
export const getAllEnrollments = () => axios.get(`${API_URL}/enrollments`);
export const getEnrollmentById = (id) =>
  axios.get(`${API_URL}/enrollments/${id}`);
export const getEnrollmentsByUserId = (userId) =>
  axios.get(`${API_URL}/enrollments/user/${userId}`);
export const addEnrollment = (enrollment) =>
  axios.post(`${API_URL}/enrollments`, enrollment);
export const updateEnrollment = (id, enrollment) =>
  axios.put(`${API_URL}/enrollments/${id}`, enrollment);
export const deleteEnrollment = (id) =>
  axios.delete(`${API_URL}/enrollments/${id}`);
