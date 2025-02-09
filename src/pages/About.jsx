import React from "react";
import Card from "../components/Card";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <Card>
        <h1>About Us</h1>
        <h2 className="card-title">Our Mission</h2>
        <p className="card-text">
          Our mission is to provide an exceptional learning experience by
          offering a variety of courses tailored to meet the needs of our
          diverse student body.
        </p>
        <h2 className="card-title">Our Vision</h2>
        <p className="card-text">
          To revolutionize education by making high-quality courses accessible
          to everyone, regardless of their background or geographical location.
        </p>
        <h2 className="card-title">Our Values</h2>
        <p className="card-text">
          Integrity, Innovation, Inclusivity. We strive to build a learning
          environment that is honest, forward-thinking, and open to all.
        </p>
        <h2 className="card-title">Meet the Team</h2>
        <p className="card-text">
          Our team of dedicated educators and professionals work tirelessly to
          ensure that each course is well-designed and delivered with
          excellence.
        </p>
        <div className="row">
          <div className="col-md-4">
            <img
              src="/path/to/team-member-1.jpg"
              alt="Team Member 1"
              className="img-fluid rounded-circle mb-2"
            />
            <h5>Team Member 1</h5>
            <p>Co-founder & CEO</p>
          </div>
          <div className="col-md-4">
            <img
              src="/path/to/team-member-2.jpg"
              alt="Team Member 2"
              className="img-fluid rounded-circle mb-2"
            />
            <h5>Team Member 2</h5>
            <p>Chief Academic Officer</p>
          </div>
          <div className="col-md-4">
            <img
              src="/path/to/team-member-3.jpg"
              alt="Team Member 3"
              className="img-fluid rounded-circle mb-2"
            />
            <h5>Team Member 3</h5>
            <p>Director of Operations</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
