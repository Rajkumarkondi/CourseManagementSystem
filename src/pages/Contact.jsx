import React from "react";
import Card from "../components/Card";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container">
      <Card
        title="Get in Touch"
        description="We'd love to hear from you! Please fill out the form below to get in touch with our team."
      >
        <form className="contact-form">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
