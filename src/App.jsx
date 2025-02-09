import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import InstructorDashboard from "./pages/InstructorDashboard";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import AddCourse from "./components/AddCourse";
import ProtectedRoute from "./components/ProtectedRoute";
import EditCourse from "./pages/EditCourse";
import GetAllCourses from "./pages/GetAllCourses";
import CourseList from "./components/CourseList";
import UserList from "./components/UserList";
import AdminDashboard from "./components/AdminDashboard";
import UpdateDetails from "./pages/UpdateDetails";
import MyCourses from "./pages/MyCourses";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/update-profile" element={<UpdateDetails />} />
          <Route path="/my-courses/:id" element={<MyCourses />} />
          {/* Protected Routes */}
          <Route
            path="/InstructorDash/:id"
            element={
              <ProtectedRoute requiredRole="INSTRUCTOR">
                <InstructorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/getAllCourses/:instructorId"
            element={
              <ProtectedRoute requiredRole="INSTRUCTOR">
                <GetAllCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addcourse"
            element={
              <ProtectedRoute requiredRole="INSTRUCTOR">
                <AddCourse />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-course/:id/:instructorId"
            element={
              <ProtectedRoute requiredRole="INSTRUCTOR">
                <EditCourse />
              </ProtectedRoute>
            }
          />
          {/* Protected Routes for Admin */}
          <Route
            path="/admin-dashboard/:id"
            element={
              <ProtectedRoute requiredRole="ADMIN">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard/:id/users"
            element={
              <ProtectedRoute requiredRole="ADMIN">
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard/:id/courses"
            element={
              <ProtectedRoute requiredRole="ADMIN">
                <CourseList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}


export default App;
