import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap 5 is imported
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light ">
      <div className="container-sm">
        <div className="row ">
          {/* Logo Section */}
          <div className="col-lg mt-4">
            <h4 className="text-primary head">Course Management System</h4>
            <p>Empowering Online Learning</p>
            <p>
              Our platform provides high-quality courses to help you upskill and
              achieve your career goals.
            </p>
            <div>
              <i className="fab fa-facebook-f me-3 text-primary"></i>
              <i className="fab fa-twitter me-3 text-primary"></i>
              <i className="fab fa-instagram text-primary"></i>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mt-4">
            <h5 className="text-primary head">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mt-4">
            <h5 className="text-primary head">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 mt-4">
            <h5 className="text-primary head">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-map me-2 text-primary"></i>123 Learning
                Street, Knowledge City
              </li>
              <li>
                <i className="fa fa-phone-alt me-2 text-primary"></i>+91
                9876543210
              </li>
              <li>
                <i className="fa fa-paper-plane me-2 text-primary"></i>
                support@cmslearning.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center  pt-3 border-top text-lg  ">
          <p className="mb-10">
            &copy; {new Date().getFullYear()} Course Management System. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
